import Link from 'next/link';
import Logo from '../shared/Logo';

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0a0f15] border-t border-slate-700">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center text-center mb-6">
          <Logo size="sm" showText={true} className="mb-3" />
          <p className="text-slate-400 text-sm max-w-md">
            AI-Powered Solutions for the Future of Business
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          <Link 
            href="/contact" 
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Contact
          </Link>
          <span className="text-slate-600">•</span>
          <Link 
            href="/terms" 
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <span className="text-slate-600">•</span>
          <Link 
            href="/privacy" 
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-500 text-xs">
          <p>© 2024 AMS Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}