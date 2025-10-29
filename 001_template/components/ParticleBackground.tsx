export default function ParticleBackground() {
  const particles = [
    {
      left: '10%',
      top: '20%',
      tx: '50px',
      ty: '-200px',
      delay: '0s',
      color: 'bg-red-500/40',
      size: 'w-1 h-1',
    },
    {
      left: '80%',
      top: '40%',
      tx: '-100px',
      ty: '-300px',
      delay: '3s',
      color: 'bg-purple-500/30',
      size: 'w-1.5 h-1.5',
    },
    {
      left: '30%',
      top: '60%',
      tx: '80px',
      ty: '-250px',
      delay: '6s',
      color: 'bg-amber-500/30',
      size: 'w-1 h-1',
    },
    {
      left: '60%',
      top: '80%',
      tx: '-60px',
      ty: '-180px',
      delay: '9s',
      color: 'bg-red-500/20',
      size: 'w-2 h-2 blur-md',
    },
    {
      left: '90%',
      top: '15%',
      tx: '-120px',
      ty: '-220px',
      delay: '12s',
      color: 'bg-purple-400/40',
      size: 'w-1 h-1',
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute ${particle.size} ${particle.color} rounded-full blur-sm animate-particle-float`}
          style={{
            left: particle.left,
            top: particle.top,
            '--tx': particle.tx,
            '--ty': particle.ty,
            animationDelay: particle.delay,
          } as React.CSSProperties & { '--tx': string; '--ty': string }}
        />
      ))}
    </div>
  );
}
