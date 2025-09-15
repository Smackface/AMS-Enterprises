import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/about', label: 'About', icon: 'info' },
  { href: '/services', label: 'Services', icon: 'business_center' },
  { href: '/portfolio', label: 'Portfolio', icon: 'folder_special' },
  { href: '/team', label: 'Team', icon: 'groups' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
  { href: '/client-portal', label: 'Client Portal', icon: 'login' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center bg-transparent p-4 pb-2 justify-between absolute w-full z-50">
        <Link href="/" className="text-white text-lg font-bold leading-tight tracking-[-0.015em] hover:text-blue-400 transition-colors">
          AMS Enterprises
        </Link>
        <Button 
          variant="transparent" 
          size="md" 
          className="max-w-[480px] min-w-0 p-0 relative z-50"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-[#0d1219] border-l border-slate-700 transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  router.pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-xl">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="text-slate-400 text-sm">
              <p className="font-semibold text-white mb-2">AMS Enterprises</p>
              <p>AI-Powered Solutions for the Future of Business</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}