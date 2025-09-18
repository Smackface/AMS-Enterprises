import { TextareaHTMLAttributes } from 'react';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function FormTextarea({ label, error, className = '', ...props }: FormTextareaProps) {
  const baseClasses = 'form-textarea w-full rounded-lg text-white bg-[#233648] border-none min-h-36 placeholder:text-gray-400 p-4 text-base resize-none focus:ring-2 focus:ring-[#1173d4] focus:outline-none';
  
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-white text-sm font-medium">{label}</label>
      )}
      <textarea 
        className={`${baseClasses} ${error ? 'ring-2 ring-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}