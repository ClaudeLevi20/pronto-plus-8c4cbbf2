import foundingPartnership from "@/assets/founding-partnership.jpg";
import wave12 from "@/assets/wave-12.png";

export const WhyPilotExists = () => {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      <img 
        src={wave12}
        alt="Wave decoration"
        className="absolute inset-0 w-full h-full object-contain opacity-85 pointer-events-none"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img 
              src={foundingPartnership} 
              alt="Partnership collaboration" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why We're Only Accepting <span className="text-gradient">100 Practices</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Before ProntoPlus launches nationwide, we're partnering with a limited group of orthodontic practices to:
            </p>

            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Test the full product for 30 days</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Give feedback that shapes the platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Share a short testimonial if they love it</span>
              </li>
            </ul>

            <p className="text-lg font-semibold text-foreground pt-4">
              In return, Founding Members unlock exclusive benefits that will never be offered again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
