import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'flex cursor-pointer items-center justify-center overflow-hidden rounded-md font-bold leading-normal tracking-wide transition-colors duration-300';
  
  const variantClasses = {
    primary: 'bg-[#1173d4] text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600',
    transparent: 'bg-transparent text-white gap-2'
  };
  
  const sizeClasses = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}