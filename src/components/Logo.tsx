interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        className={`${sizeClasses[size]} text-white ${showText ? 'mr-3' : ''}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 2L2 7L12 12L22 7L12 2Z" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
        />
        <path 
          d="M2 17L12 22L22 17" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
        />
        <path 
          d="M2 12L12 17L22 12" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
        />
      </svg>
      {showText && (
        <h1 className={`text-white ${textSizeClasses[size]} font-bold tracking-[-0.015em]`}>
          AMS Enterprises
        </h1>
      )}
    </div>
  );
}