import Link from 'next/link';
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
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
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

  return (
    <header className="hidden md:flex items-center bg-transparent p-4 pb-2 justify-between absolute w-full z-50">
      <Link href="/" className="text-white text-lg font-bold leading-tight tracking-[-0.015em] hover:text-blue-400 transition-colors">
        AMS Enterprises
      </Link>

      <nav className="flex items-center space-x-8">
        {navItems.map((item, index) => {
          if (item.onClick) {
            return (
              <button
                key={`action-${index}`}
                onClick={item.onClick}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 text-slate-300 hover:text-white hover:bg-slate-800/50"
              >
                <span className="material-symbols-outlined text-lg">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href!}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                router.pathname === item.href
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}