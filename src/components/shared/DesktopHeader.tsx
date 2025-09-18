import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';

interface NavItem {
  href?: string;
  label: string;
  icon: string;
  onClick?: () => void;
}

const baseNavItems: NavItem[] = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/about', label: 'About', icon: 'info' },
  { href: '/services', label: 'Services', icon: 'business_center' },
  { href: '/portfolio', label: 'Portfolio', icon: 'folder_special' },
  { href: '/team', label: 'Team', icon: 'groups' },
  { href: '/contact', label: 'Contact', icon: 'mail' }
];

export default function DesktopHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems: NavItem[] = [
    ...baseNavItems,
    isAuthenticated
      ? { label: 'Sign Out', icon: 'logout', onClick: handleSignOut }
      : { href: '/client-portal', label: 'Client Portal', icon: 'login' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  return (
    <>
      <header className="hidden md:flex items-center bg-transparent p-4 pb-2 justify-between absolute w-full z-50">
        <Link href="/" className="text-white text-lg font-bold leading-tight tracking-[-0.015em] hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
          AMS Enterprises
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative p-3 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 ease-out group overflow-hidden"
        >
          {/* Animated Background */}
          <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ease-out ${
            isHovered || isMenuOpen
              ? 'from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-100'
              : 'from-blue-600/0 via-purple-600/0 to-cyan-600/0 opacity-0'
          }`} />

          {/* Pulsing Ring Effect */}
          <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
            isMenuOpen ? 'ring-2 ring-blue-400/50 ring-opacity-100' : 'ring-0'
          }`} />

          {/* Hamburger Icon with Morphing Animation */}
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ease-out transform ${
              isMenuOpen ? 'rotate-45 translate-y-0.5' : 'translate-y-0'
            }`} />
            <span className={`block w-5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ease-out my-1 ${
              isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`} />
            <span className={`block w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ease-out transform ${
              isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0'
            }`} />
          </div>

          {/* Floating Orbs */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500 ease-out"
          onClick={closeMenu}
        />
      )}

      {/* Desktop Hamburger Menu */}
      <div className={`fixed top-0 right-0 h-full w-96 z-40 transition-all duration-700 ease-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Menu Background with Gradient Animation */}
        <div className="relative h-full bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full transition-all duration-1000 ${
              isMenuOpen ? 'translate-x-0 translate-y-0' : 'translate-x-48 -translate-y-48'
            }`} />
            <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-full transition-all duration-1000 delay-200 ${
              isMenuOpen ? 'translate-x-0 translate-y-0' : '-translate-x-32 translate-y-32'
            }`} />
          </div>

          {/* Menu Content */}
          <div className="relative pt-20 px-8 h-full flex flex-col">
            {/* Menu Header */}
            <div className={`mb-8 transition-all duration-500 delay-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <h3 className="text-white text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Navigation
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent rounded-full" />
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 space-y-2">
              {navItems.map((item, index) => {
                const isActive = router.pathname === item.href;

                if (item.onClick) {
                  return (
                    <button
                      key={`action-${index}`}
                      onClick={item.onClick}
                      className={`group flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-500 w-full text-left relative overflow-hidden ${
                        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                          <span className="material-symbols-outlined text-red-400 text-xl group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </span>
                        </div>
                        <span className="font-medium text-slate-300 group-hover:text-white transition-colors duration-300">{item.label}</span>
                      </div>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`group flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-500 relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30'
                        : 'hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10'
                    } ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30'
                          : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30'
                      }`}>
                        <span className={`material-symbols-outlined text-xl transition-all duration-300 group-hover:scale-110 ${
                          isActive ? 'text-blue-400' : 'text-blue-400/80 group-hover:text-blue-400'
                        }`}>
                          {item.icon}
                        </span>
                      </div>
                      <span className={`font-medium transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    {isActive && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Menu Footer */}
            <div className={`mt-8 pt-6 border-t border-slate-700/50 transition-all duration-500 delay-700 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="text-slate-400 text-sm">
                <p className="font-semibold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AMS Enterprises
                </p>
                <p className="leading-relaxed">AI-Powered Solutions for the Future of Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}