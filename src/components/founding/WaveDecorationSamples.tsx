import aiWave from "@/assets/wave-decoration-ai.png";

export const WaveDecorationSamples = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Wave Decoration Samples</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* SVG Version */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Option 2: SVG Version</h2>
            <div className="bg-card rounded-lg p-8 relative h-96 border border-border overflow-hidden">
              <svg 
                className="absolute top-0 left-0 w-64 h-64 opacity-60"
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M0,50 Q50,30 100,50 T200,50" 
                  stroke="hsl(184, 96%, 47%)" 
                  strokeWidth="3" 
                  opacity="0.8"
                />
                <path 
                  d="M0,70 Q50,50 100,70 T200,70" 
                  stroke="hsl(184, 96%, 47%)" 
                  strokeWidth="3" 
                  opacity="0.6"
                />
                <path 
                  d="M0,90 Q50,70 100,90 T200,90" 
                  stroke="hsl(184, 96%, 47%)" 
                  strokeWidth="3" 
                  opacity="0.4"
                />
                <path 
                  d="M0,110 Q50,90 100,110 T200,110" 
                  stroke="hsl(184, 96%, 47%)" 
                  strokeWidth="2" 
                  opacity="0.3"
                />
              </svg>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">SVG Advantages</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ Infinitely scalable</li>
                  <li>✓ Very small file size</li>
                  <li>✓ Can easily change colors</li>
                  <li>✓ Programmatically customizable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Generated Version */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Option 3: AI Generated</h2>
            <div className="bg-card rounded-lg p-8 relative h-96 border border-border overflow-hidden">
              <img 
                src={aiWave}
                alt="AI generated wave decoration"
                className="absolute top-0 left-0 w-64 h-64 opacity-60 object-cover"
              />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">AI Generation Advantages</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ Unique organic patterns</li>
                  <li>✓ Can match specific styles</li>
                  <li>✓ Quick to generate variations</li>
                  <li>✓ Natural flowing curves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-card/50 rounded-lg border border-primary/20">
          <h3 className="text-xl font-bold mb-4">Test in Different Corners</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left */}
            <div className="bg-card h-48 rounded-lg relative overflow-hidden border border-border">
              <svg 
                className="absolute top-0 left-0 w-32 h-32 opacity-50"
                viewBox="0 0 200 200" 
                fill="none"
              >
                <path d="M0,50 Q50,30 100,50 T200,50" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.8"/>
                <path d="M0,70 Q50,50 100,70 T200,70" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.6"/>
                <path d="M0,90 Q50,70 100,90 T200,90" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.4"/>
              </svg>
              <p className="absolute bottom-2 right-2 text-sm text-muted-foreground">Top Left</p>
            </div>

            {/* Top Right */}
            <div className="bg-card h-48 rounded-lg relative overflow-hidden border border-border">
              <svg 
                className="absolute top-0 right-0 w-32 h-32 opacity-50 -scale-x-100"
                viewBox="0 0 200 200" 
                fill="none"
              >
                <path d="M0,50 Q50,30 100,50 T200,50" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.8"/>
                <path d="M0,70 Q50,50 100,70 T200,70" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.6"/>
                <path d="M0,90 Q50,70 100,90 T200,90" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.4"/>
              </svg>
              <p className="absolute bottom-2 left-2 text-sm text-muted-foreground">Top Right</p>
            </div>

            {/* Bottom Left */}
            <div className="bg-card h-48 rounded-lg relative overflow-hidden border border-border">
              <svg 
                className="absolute bottom-0 left-0 w-32 h-32 opacity-50 -scale-y-100"
                viewBox="0 0 200 200" 
                fill="none"
              >
                <path d="M0,50 Q50,30 100,50 T200,50" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.8"/>
                <path d="M0,70 Q50,50 100,70 T200,70" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.6"/>
                <path d="M0,90 Q50,70 100,90 T200,90" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.4"/>
              </svg>
              <p className="absolute top-2 right-2 text-sm text-muted-foreground">Bottom Left</p>
            </div>

            {/* Bottom Right */}
            <div className="bg-card h-48 rounded-lg relative overflow-hidden border border-border">
              <svg 
                className="absolute bottom-0 right-0 w-32 h-32 opacity-50 scale-x-[-1] scale-y-[-1]"
                viewBox="0 0 200 200" 
                fill="none"
              >
                <path d="M0,50 Q50,30 100,50 T200,50" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.8"/>
                <path d="M0,70 Q50,50 100,70 T200,70" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.6"/>
                <path d="M0,90 Q50,70 100,90 T200,90" stroke="hsl(184, 96%, 47%)" strokeWidth="3" opacity="0.4"/>
              </svg>
              <p className="absolute top-2 left-2 text-sm text-muted-foreground">Bottom Right</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
