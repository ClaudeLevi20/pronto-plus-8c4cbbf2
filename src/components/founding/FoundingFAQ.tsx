import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import wave15 from "@/assets/wave-15.png";

export const FoundingFAQ = () => {
  return (
    <section 
      className="py-24 bg-background/50 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${wave15})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the Founding 100 program
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What exactly do I get for $1?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For $1, you get full access to all three ProntoPlus AI agents (Receptionist, Booking, and Insurance) for 30 days. 
                After completing the pilot requirements, you unlock lifetime benefits including free after-hours coverage forever 
                and exclusive Founders-only pricing that will never increase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What are the pilot requirements?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You need to: (1) Use ProntoPlus for 30 days, (2) Attend at least 2 out of 3 short check-in calls with our team, 
                and (3) Share a brief testimonial if you love the product. That's it! We're here to support you through the entire process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What happens after the 30-day trial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you complete all pilot requirements, your after-hours coverage becomes free for life (as long as you maintain 
                an active account). You'll also get access to exclusive Founders-only pricing for full 24/7 coverage that's 
                significantly lower than the public rates of $499-$699/month.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How does ProntoPlus integrate with my practice management software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                ProntoPlus integrates seamlessly with major orthodontic practice management systems. Our team will handle the 
                setup during onboarding - it typically takes just minutes. The AI can schedule appointments directly into your 
                PMS, access scheduling rules, and follow your practice's specific workflows.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I cancel anytime?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! There's no long-term commitment. If you complete the pilot requirements, you get to keep your free 
                after-hours coverage. If you decide it's not for you during the trial, you can cancel anytime. The $1 pilot 
                fee is non-refundable but gives you 30 days to fully test the platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Will the AI know how to handle orthodontic-specific questions?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! ProntoPlus is designed exclusively for orthodontic practices. It understands broken brackets, 
                lost aligners, poking wires, emergency protocols, insurance verification, and consult scheduling. We train 
                the AI on your practice's specific information during setup so it represents your brand perfectly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What if someone needs to speak with a real person?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                ProntoPlus can seamlessly transfer calls to your team when necessary. You have full control over when and 
                how transfers happen. The AI is smart enough to know when human intervention is needed and will route calls 
                appropriately while providing your team with full context of the conversation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Why are you only accepting 100 practices?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We want to work closely with a limited group to perfect the product before our nationwide launch. This allows 
                us to provide white-glove support, gather detailed feedback, and ensure every Founding Member has an amazing 
                experience. Once we hit 100 practices, this offer closes permanently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How quickly can I get started?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Very quickly! Once you reserve your spot, we'll schedule an onboarding call within 48 hours. Setup typically 
                takes 15-30 minutes, and you can start receiving calls immediately after. No complex IT setup or hardware 
                installation required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What makes ProntoPlus different from other AI phone systems?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                ProntoPlus is built exclusively for orthodontics, not generic dentistry or general healthcare. Our three-agent 
                system (Receptionist, Booking, Insurance) works together seamlessly. We understand ortho-specific workflows, 
                terminology, emergencies, and insurance nuances. Plus, Founding Members get benefits that will never be 
                offered again.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
