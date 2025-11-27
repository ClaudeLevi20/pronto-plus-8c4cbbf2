import wave11 from "@/assets/wave-11.png";
import wave12 from "@/assets/wave-12.png";

export const WaveDecorationSamples = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Wave Decoration Samples</h1>
        <p className="text-center text-muted-foreground mb-8">Your uploaded transparent wave PNGs</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Wave 11 - Line Pattern */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Wave 11 - Line Pattern</h2>
            <div className="bg-gradient-to-br from-card to-card/50 rounded-lg p-8 relative h-96 border border-border overflow-hidden">
              <img 
                src={wave11}
                alt="Wave line pattern decoration"
                className="absolute top-0 left-0 w-64 h-auto opacity-50"
              />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Elegant Line Waves</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ Transparent background</li>
                  <li>✓ Curved line pattern</li>
                  <li>✓ Perfect for corners</li>
                  <li>✓ Scales beautifully</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wave 12 - Soft Gradient */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Wave 12 - Soft Gradient</h2>
            <div className="bg-gradient-to-br from-card to-card/50 rounded-lg p-8 relative h-96 border border-border overflow-hidden">
              <img 
                src={wave12}
                alt="Wave gradient decoration"
                className="absolute top-0 left-0 w-64 h-auto opacity-50"
              />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Soft Gradient Waves</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ Transparent background</li>
                  <li>✓ Smooth gradient effect</li>
                  <li>✓ Subtle and professional</li>
                  <li>✓ Modern aesthetic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-card/50 rounded-lg border border-primary/20">
          <h3 className="text-xl font-bold mb-4">Wave 11 - Corner Placement Tests</h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Top Left */}
            <div className="bg-gradient-to-br from-card to-card/50 h-48 rounded-lg relative overflow-hidden border border-border">
              <img 
                src={wave11}
                alt="Top left wave decoration"
                className="absolute top-0 left-0 w-40 h-auto opacity-40"
              />
              <p className="absolute bottom-2 right-2 text-sm text-muted-foreground">Top Left</p>
            </div>

            {/* Top Right */}
            <div className="bg-gradient-to-br from-card to-card/50 h-48 rounded-lg relative overflow-hidden border border-border">
              <img 
                src={wave11}
                alt="Top right wave decoration"
                className="absolute top-0 right-0 w-40 h-auto opacity-40 -scale-x-100"
              />
              <p className="absolute bottom-2 left-2 text-sm text-muted-foreground">Top Right (Flipped)</p>
            </div>

            {/* Bottom Left */}
            <div className="bg-gradient-to-br from-card to-card/50 h-48 rounded-lg relative overflow-hidden border border-border">
              <img 
                src={wave11}
                alt="Bottom left wave decoration"
                className="absolute bottom-0 left-0 w-40 h-auto opacity-40 -scale-y-100"
              />
              <p className="absolute top-2 right-2 text-sm text-muted-foreground">Bottom Left (Flipped)</p>
            </div>

            {/* Bottom Right */}
            <div className="bg-gradient-to-br from-card to-card/50 h-48 rounded-lg relative overflow-hidden border border-border">
              <img 
                src={wave11}
                alt="Bottom right wave decoration"
                className="absolute bottom-0 right-0 w-40 h-auto opacity-40 -scale-x-100 -scale-y-100"
              />
              <p className="absolute top-2 left-2 text-sm text-muted-foreground">Bottom Right (Flipped)</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Wave 12 - Corner Placement Tests</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left */}
            <div className="bg-gradient-to-br from-card to-card/50 h-48 rounded-lg relative overflow-hidden border border-border">
              <img 
                src={wave12}
                alt="Top left wave decoration"
                className="absolute top-0 left-0 w-40 h-auto opacity-40"
              />
              <p className="absolute bottom-2 right-2 text-sm text-muted-foreground">Top Left</p>
            </div>

            {/* Top Right */}
            <div className="bg-gradient-to-br from-card to-card/50 h-48 rounded-lg relative overflow-hidden border border-border">
              <img 
                src={wave12}
                alt="Top right wave decoration"
                className="absolute top-0 right-0 w-40 h-auto opacity-40 -scale-x-100"
              />
              <p className="absolute bottom-2 left-2 text-sm text-muted-foreground">Top Right (Flipped)</p>
            </div>

            {/* Bottom Left */}
            <div className="bg-gradient-to-br from-card to-card/50 h-48 rounded-lg relative overflow-hidden border border-border">
              <img 
                src={wave12}
                alt="Bottom left wave decoration"
                className="absolute bottom-0 left-0 w-40 h-auto opacity-40 -scale-y-100"
              />
              <p className="absolute top-2 right-2 text-sm text-muted-foreground">Bottom Left (Flipped)</p>
            </div>

            {/* Bottom Right */}
            <div className="bg-gradient-to-br from-card to-card/50 h-48 rounded-lg relative overflow-hidden border border-border">
              <img 
                src={wave12}
                alt="Bottom right wave decoration"
                className="absolute bottom-0 right-0 w-40 h-auto opacity-40 -scale-x-100 -scale-y-100"
              />
              <p className="absolute top-2 left-2 text-sm text-muted-foreground">Bottom Right (Flipped)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
