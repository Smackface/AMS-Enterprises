import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  hover = true,
  onClick,
  delay = 0
}: CardProps) {
  const baseClasses = `
    rounded-xl border border-slate-800 bg-[#111827]/50 backdrop-blur-sm
    transition-all duration-500 ease-out
    transform opacity-0 translate-y-8
    animate-fade-in-up
  `;

  const hoverClasses = hover
    ? 'hover:border-blue-600 hover:bg-[#111827]/70 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:scale-[1.02]'
    : '';

  const cursorClass = onClick ? 'cursor-pointer' : '';

  const animationDelay = `animation-delay: ${delay}ms`;

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${cursorClass} ${className}`}
      onClick={onClick}
      style={{ animationDelay }}
    >
      {children}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}