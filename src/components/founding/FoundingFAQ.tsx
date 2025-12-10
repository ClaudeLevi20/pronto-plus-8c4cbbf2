import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import waveLines from "@/assets/wave-lines.png";

export const FoundingFAQ = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollReveal();

  const faqs = [
    {
      question: "What exactly do I get for $1?",
      answer: "For $1, you get full access to all three ProntoPlus AI agents (Receptionist, Booking, and Insurance) for 30 days. After completing the pilot requirements, you unlock lifetime benefits including free after-hours coverage forever and exclusive Founders-only pricing that will never increase."
    },
    {
      question: "What are the pilot requirements?",
      answer: "You need to: (1) Use ProntoPlus for 30 days, (2) Attend at least 2 out of 3 short check-in calls with our team, and (3) Share a brief testimonial if you love the product. That's it! We're here to support you through the entire process."
    },
    {
      question: "What happens after the 30-day trial?",
      answer: "If you complete all pilot requirements, your after-hours coverage becomes free for life (as long as you maintain an active account). You'll also get access to exclusive Founders-only pricing for full 24/7 coverage that's significantly lower than the public rates of $499-$699/month."
    },
    {
      question: "How does ProntoPlus integrate with my practice management software?",
      answer: "ProntoPlus integrates seamlessly with major orthodontic practice management systems. Our team will handle the setup during onboarding - it typically takes just minutes. The AI can schedule appointments directly into your PMS, access scheduling rules, and follow your practice's specific workflows."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! There's no long-term commitment. If you complete the pilot requirements, you get to keep your free after-hours coverage. If you decide it's not for you during the trial, you can cancel anytime. The $1 pilot fee is non-refundable but gives you 30 days to fully test the platform."
    },
    {
      question: "Will the AI know how to handle orthodontic-specific questions?",
      answer: "Absolutely! ProntoPlus is designed exclusively for orthodontic practices. It understands broken brackets, lost aligners, poking wires, emergency protocols, insurance verification, and consult scheduling. We train the AI on your practice's specific information during setup so it represents your brand perfectly."
    },
    {
      question: "What if someone needs to speak with a real person?",
      answer: "ProntoPlus can seamlessly transfer calls to your team when necessary. You have full control over when and how transfers happen. The AI is smart enough to know when human intervention is needed and will route calls appropriately while providing your team with full context of the conversation."
    },
    {
      question: "Why are you only accepting 100 practices?",
      answer: "We want to work closely with a limited group to perfect the product before our nationwide launch. This allows us to provide white-glove support, gather detailed feedback, and ensure every Founding Member has an amazing experience. Once we hit 100 practices, this offer closes permanently."
    },
    {
      question: "How quickly can I get started?",
      answer: "Very quickly! Once you reserve your spot, we'll schedule an onboarding call within 48 hours. Setup typically takes 15-30 minutes, and you can start receiving calls immediately after. No complex IT setup or hardware installation required."
    },
    {
      question: "What makes ProntoPlus different from other AI phone systems?",
      answer: "ProntoPlus is built exclusively for orthodontics, not generic dentistry or general healthcare. Our three-agent system (Receptionist, Booking, Insurance) works together seamlessly. We understand ortho-specific workflows, terminology, emergencies, and insurance nuances. Plus, Founding Members get benefits that will never be offered again."
    }
  ];

  return (
    <section className="relative py-32 md:py-40 bg-muted/30 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Wave texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url(${waveLines})`,
          backgroundSize: '900px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center space-y-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the Founding 100 program
            </p>
          </div>

          {/* Accordion */}
          <div 
            ref={accordionRef}
            className={`transition-all duration-700 delay-200 ${accordionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`item-${index + 1}`} 
                  className="group border border-border/50 rounded-2xl px-6 bg-card/50 backdrop-blur-sm hover:border-border hover:bg-card/80 transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:bg-card/80"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline py-5 tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
