import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import wave1 from "@/assets/wave-1.png";

const faqs = [
  {
    question: "How does the AI receptionist sound? Will my patients know it's AI?",
    answer: "Pronto uses advanced natural language processing to deliver incredibly human-like conversations. Most patients don't realize they're speaking with AI. The voice is warm, professional, and can be customized to match your practice's tone and personality."
  },
  {
    question: "What happens if the AI can't answer a patient's question?",
    answer: "Pronto is trained on orthodontic-specific knowledge and your practice information. For complex or unique situations, it can seamlessly transfer calls to your staff or take detailed messages for callback. You maintain complete control over which scenarios require human intervention."
  },
  {
    question: "How long does setup take?",
    answer: "Most practices are up and running within 24-48 hours. Setup involves three simple steps: customizing your AI's voice and responses, integrating with your scheduling system, and a brief training session for your team. Our support team guides you through every step."
  },
  {
    question: "Can Pronto integrate with my existing practice management software?",
    answer: "Yes! Pronto integrates with all major orthodontic practice management systems including Dolphin, OrthoTrac, Ortho2, and many others. We also offer API access for custom integrations. Our team handles the technical setup for you."
  },
  {
    question: "What if I need to make changes to how the AI responds?",
    answer: "You have full control through our intuitive dashboard. Update responses, modify scheduling rules, adjust call routing, and customize scripts anytime without technical expertise. Changes take effect immediately."
  },
  {
    question: "Is my patient data secure and HIPAA compliant?",
    answer: "Absolutely. Pronto is fully HIPAA compliant with end-to-end encryption for all communications and data storage. We undergo regular security audits and maintain SOC 2 Type II certification. Patient privacy and data security are our top priorities."
  },
  {
    question: "What's included in the pricing plans?",
    answer: "All plans include AI-powered call handling, appointment scheduling, basic analytics, and 24/7 availability. Higher tiers add more call capacity, advanced features like multi-location support, custom integrations, and priority support. Every plan includes a 14-day free trial with no credit card required."
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time with no penalties or hidden fees. If you cancel, you'll retain access through the end of your current billing period."
  },
  {
    question: "Does Pronto work outside of business hours?",
    answer: "Yes! That's one of the biggest benefits. Pronto works 24/7/365, handling calls during lunch breaks, after hours, weekends, and holidays. You'll never miss another opportunity, even when your office is closed."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All customers receive email support and access to our comprehensive knowledge base. Professional and Enterprise plans include priority phone support. Enterprise customers get a dedicated account manager and technical support specialist."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Wave decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-75 pointer-events-none">
        <img src={wave1} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Pronto's AI receptionist for orthodontic practices.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="#cta" 
            className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4"
          >
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
};
