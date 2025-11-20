import { useEffect, useRef, useState } from "react";
import { Phone, Building2, Heart, Clock } from "lucide-react";

interface Stat {
  icon: typeof Phone;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  {
    icon: Phone,
    value: 2500000,
    suffix: "+",
    label: "Calls Handled",
    prefix: ""
  },
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Active Practices",
    prefix: ""
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    label: "Patient Satisfaction",
    prefix: ""
  },
  {
    icon: Clock,
    value: 99.9,
    suffix: "%",
    label: "Uptime Guarantee",
    prefix: ""
  },
];

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
};

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(easeOutQuart * end));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const displayValue = end >= 1000 ? formatNumber(count) : count.toFixed(end % 1 !== 0 ? 1 : 0);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-gradient">
      {prefix}{displayValue}{suffix}
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Practices <span className="text-gradient">Nationwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real orthodontic practices
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center">
                  <Counter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                  <p className="text-sm text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
