import wave11 from "@/assets/wave-11.png";
import wave12 from "@/assets/wave-12.png";

export const WaveDecorationSamples = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Wave Background Overlays</h1>
        <p className="text-center text-muted-foreground mb-8">Full background images with wave artwork in corners</p>
        
        <div className="space-y-8">
          {/* Wave 11 Overlay Demo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Wave 11 - Full Background Overlay</h2>
            <div className="bg-gradient-to-br from-card to-card/50 rounded-lg p-12 relative min-h-[400px] border border-border overflow-hidden">
              {/* Wave overlay on top of gradient background */}
              <img 
                src={wave11}
                alt="Wave background overlay"
                className="absolute inset-0 w-full h-full object-contain opacity-70 pointer-events-none"
              />
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">Section with Wave Overlay</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  The wave artwork is already positioned in the corners of this full-size transparent PNG. 
                  It overlays on top of the existing gradient background.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li>✓ Full background coverage</li>
                  <li>✓ Transparent PNG with waves in corners</li>
                  <li>✓ Overlays on existing backgrounds</li>
                  <li>✓ Adjustable opacity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wave 12 Overlay Demo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Wave 12 - Full Background Overlay</h2>
            <div className="bg-gradient-to-br from-primary/10 to-card rounded-lg p-12 relative min-h-[400px] border border-primary/20 overflow-hidden">
              {/* Wave overlay on top of gradient background */}
              <img 
                src={wave12}
                alt="Wave background overlay"
                className="absolute inset-0 w-full h-full object-contain opacity-70 pointer-events-none"
              />
              
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">Another Section Example</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  This shows Wave 12 overlaid on a different background gradient. 
                  The wave artwork is pre-positioned in the image corners.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li>✓ Works with any background</li>
                  <li>✓ Maintains visual consistency</li>
                  <li>✓ Easy to implement</li>
                  <li>✓ No positioning needed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="p-6 bg-card/50 rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold mb-6">Both Waves - Different Opacity Levels</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Wave 11 variants */}
              <div className="space-y-4">
                <h4 className="font-semibold">Wave 11 - Opacity Variants</h4>
                
                <div className="bg-gradient-to-br from-card to-card/50 rounded-lg p-6 relative h-48 border border-border overflow-hidden">
                  <img 
                    src={wave11}
                    alt="Wave 11 - 60% opacity"
                    className="absolute inset-0 w-full h-full object-contain opacity-60 pointer-events-none"
                  />
                  <p className="relative z-10 text-sm font-medium">60% Opacity</p>
                </div>
                
                <div className="bg-gradient-to-br from-card to-card/50 rounded-lg p-6 relative h-48 border border-border overflow-hidden">
                  <img 
                    src={wave11}
                    alt="Wave 11 - 80% opacity"
                    className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none"
                  />
                  <p className="relative z-10 text-sm font-medium">80% Opacity</p>
                </div>
              </div>

              {/* Wave 12 variants */}
              <div className="space-y-4">
                <h4 className="font-semibold">Wave 12 - Opacity Variants</h4>
                
                <div className="bg-gradient-to-br from-primary/10 to-card rounded-lg p-6 relative h-48 border border-primary/20 overflow-hidden">
                  <img 
                    src={wave12}
                    alt="Wave 12 - 60% opacity"
                    className="absolute inset-0 w-full h-full object-contain opacity-60 pointer-events-none"
                  />
                  <p className="relative z-10 text-sm font-medium">60% Opacity</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-card rounded-lg p-6 relative h-48 border border-primary/20 overflow-hidden">
                  <img 
                    src={wave12}
                    alt="Wave 12 - 80% opacity"
                    className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none"
                  />
                  <p className="relative z-10 text-sm font-medium">80% Opacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
