import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, Volume2, VolumeX, Mic, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  role: "pronto" | "patient";
  text: string;
}

const conversation: Message[] = [
  {
    id: 1,
    role: "pronto",
    text: "Hi! Thank you for calling Bright Smiles Orthodontics. This is Pronto, your virtual assistant. How can I help you today?",
  },
  {
    id: 2,
    role: "patient",
    text: "Hi, I'm interested in getting Invisalign. I've been thinking about it for a while.",
  },
  {
    id: 3,
    role: "pronto",
    text: "That's wonderful! Invisalign is a great option for straightening teeth discreetly. I'd love to help you schedule a free consultation with Dr. Martinez. Can I get your name?",
  },
  {
    id: 4,
    role: "patient",
    text: "Sure, it's Sarah Johnson.",
  },
  {
    id: 5,
    role: "pronto",
    text: "Nice to meet you, Sarah! I have availability this Thursday at 2 PM or Friday at 10 AM. Which works better for you?",
  },
  {
    id: 6,
    role: "patient",
    text: "Thursday at 2 would be perfect!",
  },
  {
    id: 7,
    role: "pronto",
    text: "Excellent! I've booked you for Thursday at 2 PM with Dr. Martinez. You'll receive a confirmation text shortly. Is there anything else I can help you with?",
  },
  {
    id: 8,
    role: "patient",
    text: "No, that's all. Thank you so much!",
  },
  {
    id: 9,
    role: "pronto",
    text: "You're welcome, Sarah! We look forward to seeing you Thursday. Have a great day!",
  },
];

const VoiceWaveform = ({ isActive, role }: { isActive: boolean; role: "pronto" | "patient" }) => {
  const [heights, setHeights] = useState([8, 8, 8, 8, 8]);

  useEffect(() => {
    if (!isActive) {
      setHeights([8, 8, 8, 8, 8]);
      return;
    }

    const interval = setInterval(() => {
      setHeights(prev => prev.map(() => Math.random() * 24 + 8));
    }, 100);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="flex items-center justify-center gap-0.5 h-8">
      {heights.map((height, i) => (
        <div
          key={i}
          className={cn(
            "w-1 rounded-full transition-all duration-100",
            role === "pronto" ? "bg-primary" : "bg-secondary"
          )}
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
  </div>
);

const getVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
    } else {
      speechSynthesis.onvoiceschanged = () => {
        resolve(speechSynthesis.getVoices());
      };
    }
  });
};

export const VoiceDemoSection = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState<"pronto" | "patient" | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [prontoVoice, setProntoVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [patientVoice, setPatientVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [hasAutoStarted, setHasAutoStarted] = useState(false);
  const [voicesReady, setVoicesReady] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const currentMessageIndex = useRef(0);
  const isSpeaking = useRef(false);
  const isAborted = useRef(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    const initVoices = async () => {
      const voices = await getVoices();
      
      const femaleVoices = voices.filter(v => 
        v.name.toLowerCase().includes('female') || 
        v.name.toLowerCase().includes('samantha') ||
        v.name.toLowerCase().includes('karen') ||
        v.name.toLowerCase().includes('victoria') ||
        v.name.includes('Google UK English Female') ||
        v.name.includes('Google US English')
      );
      
      const maleVoices = voices.filter(v => 
        v.name.toLowerCase().includes('male') ||
        v.name.toLowerCase().includes('daniel') ||
        v.name.toLowerCase().includes('alex') ||
        v.name.toLowerCase().includes('david') ||
        v.name.includes('Google UK English Male')
      );

      setProntoVoice(femaleVoices[0] || voices.find(v => v.lang.startsWith('en')) || voices[0]);
      setPatientVoice(maleVoices[0] || voices.find(v => v.lang.startsWith('en') && v !== femaleVoices[0]) || voices[1] || voices[0]);
      setVoicesReady(true);
    };

    initVoices();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration((d) => d + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  const speakMessage = useCallback((message: Message, onEnd: () => void) => {
    if (isAborted.current) return;
    
    if (isMuted) {
      const wordCount = message.text.split(' ').length;
      const duration = Math.max(1500, wordCount * 200);
      const timeoutId = setTimeout(() => {
        if (!isAborted.current) onEnd();
      }, duration);
      timeoutRefs.current.push(timeoutId);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(message.text);
    utterance.voice = message.role === "pronto" ? prontoVoice : patientVoice;
    utterance.rate = message.role === "pronto" ? 1.0 : 0.95;
    utterance.pitch = message.role === "pronto" ? 1.1 : 0.9;
    utterance.volume = 1;

    utterance.onend = () => {
      if (!isAborted.current) onEnd();
    };

    utterance.onerror = () => {
      if (!isAborted.current) onEnd();
    };

    speechSynthesis.speak(utterance);
  }, [isMuted, prontoVoice, patientVoice]);

  const processNextMessage = useCallback(() => {
    if (isAborted.current) return;
    
    if (currentMessageIndex.current >= conversation.length) {
      setIsCallActive(false);
      setCurrentSpeaker(null);
      isSpeaking.current = false;
      setIsComplete(true);
      return;
    }

    const message = conversation[currentMessageIndex.current];
    isSpeaking.current = true;

    setIsTyping(true);
    setCurrentSpeaker(message.role);

    const typingTimeout = setTimeout(() => {
      if (isAborted.current) return;
      
      setIsTyping(false);
      setVisibleMessages(prev => [...prev, message]);
      
      speakMessage(message, () => {
        if (isAborted.current) return;
        
        const nextTimeout = setTimeout(() => {
          if (isAborted.current) return;
          currentMessageIndex.current += 1;
          processNextMessage();
        }, 500);
        timeoutRefs.current.push(nextTimeout);
      });
    }, 800);
    timeoutRefs.current.push(typingTimeout);
  }, [speakMessage]);

  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(id => clearTimeout(id));
    timeoutRefs.current = [];
  }, []);

  const startCall = useCallback(() => {
    clearAllTimeouts();
    speechSynthesis.cancel();
    isAborted.current = false;
    setIsCallActive(true);
    setVisibleMessages([]);
    setCallDuration(0);
    setIsComplete(false);
    currentMessageIndex.current = 0;
    isSpeaking.current = false;

    const startTimeout = setTimeout(() => {
      if (!isAborted.current) {
        processNextMessage();
      }
    }, 500);
    timeoutRefs.current.push(startTimeout);
  }, [processNextMessage, clearAllTimeouts]);

  const endCall = useCallback(() => {
    isAborted.current = true;
    clearAllTimeouts();
    speechSynthesis.cancel();
    setIsCallActive(false);
    setCurrentSpeaker(null);
    setIsTyping(false);
    isSpeaking.current = false;
  }, [clearAllTimeouts]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      if (!prev) {
        // When muting, cancel current speech
        speechSynthesis.cancel();
      }
      return !prev;
    });
  }, []);

  // Auto-start when section scrolls into view
  useEffect(() => {
    if (!voicesReady || hasAutoStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoStarted && !isCallActive && !isComplete) {
            setHasAutoStarted(true);
            // Small delay before starting
            setTimeout(() => {
              startCall();
            }, 800);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [voicesReady, hasAutoStarted, isCallActive, isComplete, startCall]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section ref={sectionRef} className="relative -mt-32 z-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl border overflow-hidden">
            {/* Call Header */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b">
              <h3 className="text-center text-xl font-semibold">
                {isCallActive ? "Call in Progress" : isComplete ? "Demo Complete" : "Experience Pronto+ Live"}
              </h3>
              
              {/* Voice Visualization */}
              <div className="flex items-center justify-center gap-8 mt-6">
                <div className="text-center">
                  <div className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                    currentSpeaker === "patient" 
                      ? "bg-secondary ring-4 ring-secondary/30 scale-110" 
                      : "bg-muted"
                  )}>
                    <Mic className={cn(
                      "w-5 h-5 transition-colors",
                      currentSpeaker === "patient" ? "text-secondary-foreground" : "text-muted-foreground"
                    )} />
                  </div>
                  <p className="text-sm font-medium">Patient</p>
                  <VoiceWaveform isActive={currentSpeaker === "patient"} role="patient" />
                </div>

                <div className="flex flex-col items-center">
                  {isCallActive && (
                    <span className="text-sm text-muted-foreground font-mono">
                      {formatDuration(callDuration)}
                    </span>
                  )}
                </div>

                <div className="text-center">
                  <div className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                    currentSpeaker === "pronto" 
                      ? "bg-primary ring-4 ring-primary/30 scale-110" 
                      : "bg-muted"
                  )}>
                    <Volume2 className={cn(
                      "w-5 h-5 transition-colors",
                      currentSpeaker === "pronto" ? "text-primary-foreground" : "text-muted-foreground"
                    )} />
                  </div>
                  <p className="text-sm font-medium">Pronto+</p>
                  <VoiceWaveform isActive={currentSpeaker === "pronto"} role="pronto" />
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="overflow-y-auto p-4 space-y-3 h-[280px] bg-muted/20">
              {visibleMessages.length === 0 && !isCallActive && (
                <div className="flex items-center justify-center h-full text-muted-foreground text-center p-6">
                  <p>Click "Start Demo Call" to hear how Pronto+ handles a real patient inquiry about Invisalign</p>
                </div>
              )}
              
              {visibleMessages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex animate-fade-in",
                    message.role === "patient" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
                      message.role === "pronto"
                        ? "bg-primary text-primary-foreground rounded-tl-sm"
                        : "bg-secondary text-secondary-foreground rounded-tr-sm"
                    )}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className={cn(
                  "flex animate-fade-in",
                  currentSpeaker === "patient" ? "justify-end" : "justify-start"
                )}>
                  <div className={cn(
                    "rounded-2xl shadow-sm",
                    currentSpeaker === "pronto"
                      ? "bg-primary/80 rounded-tl-sm"
                      : "bg-secondary/80 rounded-tr-sm"
                  )}>
                    <TypingIndicator />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Call Controls */}
            <div className="p-5 border-t bg-background">
              <div className="flex justify-center gap-3">
                {!isCallActive ? (
                  <>
                    <Button
                      size="lg"
                      onClick={startCall}
                      className="gap-2 px-6"
                    >
                      {isComplete ? <RotateCcw className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
                      {isComplete ? "Replay Demo" : "Start Demo Call"}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={toggleMute}
                      className="gap-2"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      {isMuted ? "Unmute" : "Mute"}
                    </Button>
                    <Button
                      size="lg"
                      variant="destructive"
                      onClick={endCall}
                      className="gap-2 px-6"
                    >
                      <PhoneOff className="w-5 h-5" />
                      End Call
                    </Button>
                  </>
                )}
              </div>
              
              {isComplete && (
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Call completed • Appointment booked in 30 seconds
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
