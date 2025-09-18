import Head from 'next/head';
import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../components/shared/Logo';
import AuthInput from '../components/client-portal/AuthInput';
import Button from '../components/shared/Button';
import Header from '@/components/shared/Header';
import { useAuth } from '../hooks/useAuth';

export default function ClientPortal() {
  const router = useRouter();
  const { signIn, isLoading, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    auth: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/u');
    }
  }, [isAuthenticated, router]);

  const successMessage = router.query.message === 'signup-complete'
    ? 'Account created successfully! Please sign in with your credentials.'
    : '';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {
      email: '',
      password: '',
      auth: ''
    };

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      try {
        await signIn(formData.email, formData.password);
      } catch (error: any) {
        setErrors(prev => ({
          ...prev,
          auth: error.message || 'Authentication failed. Please check your credentials.'
        }));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
        auth: '' // Clear auth error when user types
      }));
    }
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Client Portal - AMS Enterprises</title>

        <style jsx>{`
          body {
            min-height: max(884px, 100dvh);
          }
        `}</style>
      </Head>

      <div 
        className="relative flex h-auto min-h-screen w-full flex-col bg-[#0d1219] dark justify-between group/design-root overflow-x-hidden" 
      >
        <div className="h-[10dvh]">
          <Header />
        </div>
        
        <div className="p-4 pt-10">
          {/* Logo Section */}
          <div className="mb-8">
            <Logo size="md" />
          </div>

          {/* Header */}
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-tight mb-2">
              Secure Client Portal
            </h2>
            <p className="text-gray-400 text-lg leading-normal">Sign in to continue</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-12">
            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-900/30 border border-green-500 rounded-md p-3">
                <p className="text-green-400 text-sm">{successMessage}</p>
              </div>
            )}

            {/* Auth Error */}
            {errors.auth && (
              <div className="bg-red-900/30 border border-red-500 rounded-md p-3">
                <p className="text-red-400 text-sm">{errors.auth}</p>
              </div>
            )}

            <AuthInput
              name="email"
              type="email"
              icon="alternate_email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <AuthInput
              name="password"
              type="password"
              icon="lock"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
            />

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-[#1172d4] focus:ring-[#1172d4]"
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label className="ml-2 block text-sm text-gray-300" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm font-medium text-[#1172d4] hover:text-[#1172d4]/80">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1172d4] hover:bg-[#1172d4]/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </div>
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="pb-8 px-4">
          <p className="text-gray-400 text-sm font-normal leading-normal text-center">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-medium text-[#1172d4] hover:text-[#1172d4]/80">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}