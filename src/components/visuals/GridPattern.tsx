"use client";

export default function GridPattern() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#FDFDFD] pointer-events-none">
      {/* Subtle architectural grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Radial fade to keep the center clean */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#FDFDFD] opacity-80" />
      
      {/* Gentle noise */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
