import { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function FormInput({ label, error, className = '', ...props }: FormInputProps) {
  const baseClasses = 'form-input w-full rounded-lg text-white bg-[#233648] border-none h-14 placeholder:text-gray-400 p-4 text-base focus:ring-2 focus:ring-[#1173d4] focus:outline-none';
  
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-white text-sm font-medium">{label}</label>
      )}
      <input 
        className={`${baseClasses} ${error ? 'ring-2 ring-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}