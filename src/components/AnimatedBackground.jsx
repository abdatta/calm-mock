const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[40px]">
    {/* Base Layer - Deep Blue */}
    <div className="absolute inset-0 bg-[#0f4c81]" />

    {/* Gradient Overlay mimicking the lake/mountain scene */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a3b5c] via-[#2d5a87] to-[#0f4c81] opacity-80" />

    {/* Top Highlight (Sun/Moon glow) */}
    <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#6b9dc2] via-transparent to-transparent opacity-30 mix-blend-screen" />

    {/* Scenic Image Overlay (blended) */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1000')`,
      }}
    />
  </div>
);

export default AnimatedBackground;
