import { InputHTMLAttributes } from 'react';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  error?: string;
}

export default function AuthInput({ icon, error, className = '', ...props }: AuthInputProps) {
  const baseClasses = 'form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[#1172d4] border border-gray-700 bg-gray-800 h-14 placeholder:text-gray-500 p-4 pl-12 text-base font-normal leading-normal';
  
  return (
    <div className="space-y-1">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
        <input 
          className={`${baseClasses} ${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}