import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, Mic, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoiceDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Message {
  id: number;
  role: "pronto" | "patient";
  text: string;
  delay: number;
}

const conversation: Message[] = [
  {
    id: 1,
    role: "pronto",
    text: "Hi! Thank you for calling Bright Smiles Orthodontics. This is Pronto, your virtual assistant. How can I help you today?",
    delay: 0,
  },
  {
    id: 2,
    role: "patient",
    text: "Hi, I'm interested in getting Invisalign. I've been thinking about it for a while.",
    delay: 3500,
  },
  {
    id: 3,
    role: "pronto",
    text: "That's wonderful! Invisalign is a great option for straightening teeth discreetly. I'd love to help you schedule a free consultation with Dr. Martinez. Can I get your name?",
    delay: 7000,
  },
  {
    id: 4,
    role: "patient",
    text: "Sure, it's Sarah Johnson.",
    delay: 11500,
  },
  {
    id: 5,
    role: "pronto",
    text: "Nice to meet you, Sarah! I have availability this Thursday at 2 PM or Friday at 10 AM. Which works better for you?",
    delay: 14000,
  },
  {
    id: 6,
    role: "patient",
    text: "Thursday at 2 would be perfect!",
    delay: 18000,
  },
  {
    id: 7,
    role: "pronto",
    text: "Excellent! I've booked you for Thursday at 2 PM with Dr. Martinez. You'll receive a confirmation text shortly. Is there anything else I can help you with?",
    delay: 20500,
  },
  {
    id: 8,
    role: "patient",
    text: "No, that's all. Thank you so much!",
    delay: 25000,
  },
  {
    id: 9,
    role: "pronto",
    text: "You're welcome, Sarah! We look forward to seeing you Thursday. Have a great day!",
    delay: 27500,
  },
];

const VoiceWaveform = ({ isActive, role }: { isActive: boolean; role: "pronto" | "patient" }) => {
  return (
    <div className="flex items-center gap-0.5 h-8">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 rounded-full transition-all duration-150",
            role === "pronto" ? "bg-primary" : "bg-secondary",
            isActive ? "animate-pulse" : "h-2"
          )}
          style={{
            height: isActive ? `${Math.random() * 24 + 8}px` : "8px",
            animationDelay: `${i * 100}ms`,
          }}
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

export const VoiceDemoModal = ({ open, onOpenChange }: VoiceDemoModalProps) => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState<"pronto" | "patient" | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    if (!open) {
      // Reset state when modal closes
      setIsCallActive(false);
      setVisibleMessages([]);
      setIsTyping(false);
      setCurrentSpeaker(null);
      setCallDuration(0);
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    }
  }, [open]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration((d) => d + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  const startCall = () => {
    setIsCallActive(true);
    setVisibleMessages([]);
    setCallDuration(0);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    conversation.forEach((message, index) => {
      // Show typing indicator before message
      const typingTimeout = setTimeout(() => {
        setIsTyping(true);
        setCurrentSpeaker(message.role);
      }, message.delay);
      timeoutsRef.current.push(typingTimeout);

      // Show the actual message
      const messageTimeout = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, message]);
        setCurrentSpeaker(message.role);
        
        // Clear speaker after message duration
        const clearSpeakerTimeout = setTimeout(() => {
          if (index === conversation.length - 1) {
            setCurrentSpeaker(null);
          }
        }, 2000);
        timeoutsRef.current.push(clearSpeakerTimeout);
      }, message.delay + 1200);
      timeoutsRef.current.push(messageTimeout);
    });

    // End call after conversation
    const endCallTimeout = setTimeout(() => {
      setIsCallActive(false);
      setCurrentSpeaker(null);
    }, 32000);
    timeoutsRef.current.push(endCallTimeout);
  };

  const endCall = () => {
    setIsCallActive(false);
    setCurrentSpeaker(null);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
        {/* Call Header */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              {isCallActive ? "Call in Progress" : "Experience Pronto+ Live"}
            </DialogTitle>
          </DialogHeader>
          
          {/* Voice Visualization */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="text-center">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                currentSpeaker === "patient" 
                  ? "bg-secondary ring-4 ring-secondary/30 scale-110" 
                  : "bg-muted"
              )}>
                <Mic className={cn(
                  "w-6 h-6 transition-colors",
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
                "w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
                currentSpeaker === "pronto" 
                  ? "bg-primary ring-4 ring-primary/30 scale-110" 
                  : "bg-muted"
              )}>
                <Volume2 className={cn(
                  "w-6 h-6 transition-colors",
                  currentSpeaker === "pronto" ? "text-primary-foreground" : "text-muted-foreground"
                )} />
              </div>
              <p className="text-sm font-medium">Pronto+</p>
              <VoiceWaveform isActive={currentSpeaker === "pronto"} role="pronto" />
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[400px] bg-muted/20">
          {visibleMessages.length === 0 && !isCallActive && (
            <div className="flex items-center justify-center h-full text-muted-foreground text-center p-8">
              <p>Click "Start Demo Call" to see how Pronto+ handles a real patient inquiry about Invisalign</p>
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
        <div className="p-6 border-t bg-background">
          <div className="flex justify-center gap-4">
            {!isCallActive ? (
              <Button
                size="lg"
                onClick={startCall}
                className="gap-2 px-8"
              >
                <Phone className="w-5 h-5" />
                Start Demo Call
              </Button>
            ) : (
              <Button
                size="lg"
                variant="destructive"
                onClick={endCall}
                className="gap-2 px-8"
              >
                <PhoneOff className="w-5 h-5" />
                End Call
              </Button>
            )}
          </div>
          
          {!isCallActive && visibleMessages.length > 0 && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Call completed • Appointment booked in 30 seconds
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
