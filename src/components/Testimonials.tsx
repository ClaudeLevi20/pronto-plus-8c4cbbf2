import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import wave14 from "@/assets/wave-14.png";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    practice: "Smile Perfect Orthodontics",
    location: "Austin, TX",
    rating: 5,
    image: "/placeholder.svg",
    text: "Pronto has transformed our practice. We've reduced missed calls by 95% and our patients love the 24/7 availability. The AI is incredibly natural and handles complex scheduling with ease.",
    initials: "SM"
  },
  {
    name: "Dr. Michael Chen",
    practice: "Brightway Orthodontics",
    location: "Seattle, WA",
    rating: 5,
    image: "/placeholder.svg",
    text: "Our front desk staff can now focus on in-office patient care while Pronto handles all incoming calls flawlessly. The ROI was immediate - we're booking 30% more appointments.",
    initials: "MC"
  },
  {
    name: "Dr. Jennifer Rodriguez",
    practice: "Elite Orthodontic Care",
    location: "Miami, FL",
    rating: 5,
    image: "/placeholder.svg",
    text: "I was skeptical about AI receptionists, but Pronto exceeded all expectations. Patients can't tell they're speaking with AI, and the integration with our scheduling system was seamless.",
    initials: "JR"
  },
  {
    name: "Dr. James Thompson",
    practice: "Thompson Orthodontics Group",
    location: "Chicago, IL",
    rating: 5,
    image: "/placeholder.svg",
    text: "Running three locations, we needed consistent phone coverage. Pronto handles all our calls across locations perfectly. The analytics dashboard gives us incredible insights into patient inquiries.",
    initials: "JT"
  },
  {
    name: "Dr. Emily Watson",
    practice: "Coastal Orthodontics",
    location: "San Diego, CA",
    rating: 5,
    image: "/placeholder.svg",
    text: "The best investment we've made in our practice technology. Pronto never takes a sick day, never puts patients on hold, and captures every opportunity. Our patient satisfaction scores have never been higher.",
    initials: "EW"
  },
  {
    name: "Dr. Robert Kim",
    practice: "Premier Smile Studios",
    location: "Boston, MA",
    rating: 5,
    image: "/placeholder.svg",
    text: "Implementation was incredibly easy, and the Pronto team provided excellent training. We're now handling twice the call volume without adding staff. The voice quality is remarkably human-like.",
    initials: "RK"
  }
];

export const Testimonials = () => {
  return (
    <section 
      className="py-24 px-6 bg-secondary/30 relative overflow-hidden"
      style={{
        backgroundImage: `url(${wave14})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Leading Practices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of orthodontic practices that have transformed their patient experience with Pronto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14 border-2 border-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.practice}</p>
                    <p className="text-xs text-muted-foreground/80">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm text-foreground/90 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
