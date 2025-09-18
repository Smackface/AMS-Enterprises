import Head from 'next/head';
import {useState, FormEvent, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Logo from '../components/shared/Logo';
import AuthInput from '../components/client-portal/AuthInput';
import Button from '../components/shared/Button';
import Header from '@/components/shared/Header';
import {useAuth} from '../hooks/useAuth';

export default function ClientPortal() {
  const router = useRouter();
  const {signIn, isLoading, isAuthenticated} = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    auth: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/u');
    }
  }, [isAuthenticated, router]);

  const successMessage = router.query.message === 'signup-complete' ? 'Account created successfully! Please sign in with your credentials.' : '';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {
      email: '',
      password: '',
      auth: '',
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
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          auth: error instanceof Error ? error.message : 'Authentication failed. Please check your credentials.',
        }));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
        auth: '', // Clear auth error when user types
      }));
    }
  };

  return (
    <div className="client-portal">
      <Head>
        <meta charSet="utf-8" />
        <title>Client Portal - AMS Enterprises</title>
      </Head>

      <div className="portal-layout">
        {/* Left Side - Form Content */}
        <div className="left-side panel left-panel">
          {/* Header */}
          <div className="mobile-header">
            <Header />
          </div>

          {/* Main Content */}
          <div className="form-content">
            <div className="form-container">
              {/* Logo Section */}
              <div className="mb-8 text-center lg:text-left">
                <Logo size="md" />
              </div>

              {/* Header */}
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-3">Welcome Back</h2>
                <p className="text-gray-400 text-lg leading-normal">Access your secure client portal</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {successMessage && (
                  <div className="bg-green-900/30 border border-green-500 rounded-lg p-4">
                    <p className="text-green-400 text-sm">{successMessage}</p>
                  </div>
                )}

                {/* Auth Error */}
                {errors.auth && (
                  <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{errors.auth}</p>
                  </div>
                )}

                <AuthInput name="email" type="email" icon="alternate_email" placeholder="Email" value={formData.email} onChange={handleInputChange} error={errors.email} />

                <AuthInput name="password" type="password" icon="lock" placeholder="Password" value={formData.password} onChange={handleInputChange} error={errors.password} />

                {/* Remember Me and Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-600" id="remember-me" name="rememberMe" type="checkbox" checked={formData.rememberMe} onChange={handleInputChange} />
                    <label className="ml-2 block text-sm text-gray-300" htmlFor="remember-me">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-sm font-medium text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-8 text-center lg:text-left">
                <p className="text-gray-400 text-sm">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" className="font-medium text-blue-400 hover:text-blue-300">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual Background */}
        <div className="right-side panel right-panel">
          {/* Background with circuit pattern */}
          <div className="background-content">
            {/* Animated circuit lines */}
            <div className="circuit-animation">
              <svg viewBox="0 0 400 400" fill="none">
                <defs>
                  <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Circuit paths */}
                <path d="M50 100 L150 100 L150 200 L250 200 L250 300" stroke="url(#circuit1)" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M100 50 L100 150 L200 150 L200 250 L300 250" stroke="url(#circuit1)" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M200 80 L300 80 L300 180 L350 180" stroke="url(#circuit1)" strokeWidth="2" fill="none" opacity="0.6" />

                {/* Circuit nodes */}
                <circle cx="150" cy="100" r="4" fill="#3B82F6" opacity="0.8" />
                <circle cx="150" cy="200" r="4" fill="#8B5CF6" opacity="0.8" />
                <circle cx="250" cy="200" r="4" fill="#06B6D4" opacity="0.8" />
                <circle cx="100" cy="150" r="4" fill="#3B82F6" opacity="0.8" />
                <circle cx="200" cy="150" r="4" fill="#8B5CF6" opacity="0.8" />
                <circle cx="300" cy="180" r="4" fill="#06B6D4" opacity="0.8" />
              </svg>
            </div>

            {/* 3D Isometric Data Visualization */}
            <div className="data-visualization">
              <div className="viz-container">
                {/* Data bars/charts with glow effect */}
                <div className="data-bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>

                {/* Platform/base */}
                <div className="platform-base"></div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="floating-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
          </div>

          {/* Overlay gradient */}
          <div className="overlay-gradient"></div>
        </div>

        {/* Desktop Header for larger screens */}
        <div className="desktop-header">
          <Header />
        </div>
      </div>
    </div>
  );
}
