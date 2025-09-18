import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/shared/Header';
import Button from '../../components/shared/Button';

export default function UserDashboard() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/client-portal');
    }
  }, [isAuthenticated, isLoading]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0d1219] flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Dashboard - AMS Enterprises</title>
      </Head>

      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0d1219] dark overflow-x-hidden">
        <div className="h-[10dvh]">
          <Header />
        </div>

        <div className="flex-1 p-4 pt-10">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-white text-4xl font-bold leading-tight tracking-tight mb-2">
              Welcome back, {user.name}
            </h1>
            <p className="text-gray-400 text-lg leading-normal">
              Access your account and manage your services
            </p>
          </div>

          {/* User Info Card */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mb-8">
            <h2 className="text-white text-xl font-semibold mb-4">Account Information</h2>
            <div className="space-y-3">
              <div>
                <span className="text-gray-400 text-sm">User ID:</span>
                <p className="text-white">{user.id}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Name:</span>
                <p className="text-white">{user.name}</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Email:</span>
                <p className="text-white">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-[#1172d4] transition-colors">
                <h3 className="text-white font-semibold mb-2">My Projects</h3>
                <p className="text-gray-400 text-sm mb-3">View and manage your active projects</p>
                <Button className="w-full bg-[#1172d4] hover:bg-[#1172d4]/90">
                  View Projects
                </Button>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-[#1172d4] transition-colors">
                <h3 className="text-white font-semibold mb-2">Support</h3>
                <p className="text-gray-400 text-sm mb-3">Get help with your account or services</p>
                <Button className="w-full bg-gray-600 hover:bg-gray-500">
                  Contact Support
                </Button>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-[#1172d4] transition-colors">
                <h3 className="text-white font-semibold mb-2">Billing</h3>
                <p className="text-gray-400 text-sm mb-3">View invoices and payment history</p>
                <Button className="w-full bg-gray-600 hover:bg-gray-500">
                  View Billing
                </Button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">
                  <span className="material-symbols-outlined text-4xl">inbox</span>
                </div>
                <p className="text-gray-400">No recent activity</p>
                <p className="text-gray-500 text-sm">Activity will appear here as you use our services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Section */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              Logged in as {user.email}
            </p>
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}