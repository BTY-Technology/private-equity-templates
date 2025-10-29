interface GlowEffectProps {
  color?: 'red' | 'purple' | 'amber';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
}

export default function GlowEffect({
  color = 'red',
  position = 'top-left',
  size = 'md',
}: GlowEffectProps) {
  const colorClasses = {
    red: 'bg-red-600/10',
    purple: 'bg-purple-600/10',
    amber: 'bg-amber-600/10',
  };

  const positionClasses = {
    'top-left': 'top-1/4 left-1/4',
    'top-right': 'top-1/4 right-1/4',
    'bottom-left': 'bottom-1/4 left-1/4',
    'bottom-right': 'bottom-1/4 right-1/4',
  };

  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[32rem] h-[32rem]',
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${colorClasses[color]} rounded-full blur-3xl animate-pulse-glow`}
    />
  );
}
