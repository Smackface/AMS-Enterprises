import Head from 'next/head';
import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../components/shared/Logo';
import AuthInput from '../components/client-portal/AuthInput';
import Button from '../components/shared/Button';
import Header from '@/components/shared/Header';
import { useAuth } from '../hooks/useAuth';

export default function SignUp() {
  const router = useRouter();
  const { signUp, confirmSignUp, isLoading, isAuthenticated } = useAuth();

  const [step, setStep] = useState<'signup' | 'confirm'>('signup');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [confirmationData, setConfirmationData] = useState({
    email: '',
    code: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    code: '',
    auth: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/u');
    }
  }, [isAuthenticated, router]);

  const validateSignupForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      code: '',
      auth: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSignupSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validateSignupForm();
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      try {
        const result = await signUp(formData.email, formData.password, formData.name);

        if (result.nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
          setConfirmationData({ email: formData.email, code: '' });
          setStep('confirm');
        }
      } catch (error: any) {
        setErrors(prev => ({
          ...prev,
          auth: error.message || 'Sign up failed. Please try again.'
        }));
      }
    }
  };

  const handleConfirmSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      code: '',
      auth: ''
    };

    if (!confirmationData.code) {
      newErrors.code = 'Confirmation code is required';
    } else if (confirmationData.code.length !== 6) {
      newErrors.code = 'Confirmation code must be 6 digits';
    }

    setErrors(newErrors);

    if (!newErrors.code) {
      try {
        await confirmSignUp(confirmationData.email, confirmationData.code);
        router.push('/client-portal?message=signup-complete');
      } catch (error: any) {
        setErrors(prev => ({
          ...prev,
          auth: error.message || 'Invalid confirmation code. Please try again.'
        }));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (step === 'signup') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setConfirmationData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
        auth: ''
      }));
    }
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Sign Up - AMS Enterprises</title>

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
              {step === 'signup' ? 'Create Account' : 'Confirm Your Email'}
            </h2>
            <p className="text-gray-400 text-lg leading-normal">
              {step === 'signup'
                ? 'Sign up to access the client portal'
                : `Enter the 6-digit code sent to ${confirmationData.email}`
              }
            </p>
          </div>

          {step === 'signup' ? (
            /* Sign Up Form */
            <form onSubmit={handleSignupSubmit} className="flex flex-col gap-4 mt-12">
              {/* Auth Error */}
              {errors.auth && (
                <div className="bg-red-900/30 border border-red-500 rounded-md p-3">
                  <p className="text-red-400 text-sm">{errors.auth}</p>
                </div>
              )}

              <AuthInput
                name="name"
                type="text"
                icon="person"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
              />

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
                placeholder="Password (min. 8 characters)"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
              />

              <AuthInput
                name="confirmPassword"
                type="password"
                icon="lock"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
              />

              {/* Submit Button */}
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#1172d4] hover:bg-[#1172d4]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </div>
            </form>
          ) : (
            /* Confirmation Form */
            <form onSubmit={handleConfirmSubmit} className="flex flex-col gap-4 mt-12">
              {/* Auth Error */}
              {errors.auth && (
                <div className="bg-red-900/30 border border-red-500 rounded-md p-3">
                  <p className="text-red-400 text-sm">{errors.auth}</p>
                </div>
              )}

              <AuthInput
                name="code"
                type="text"
                icon="security"
                placeholder="6-digit confirmation code"
                value={confirmationData.code}
                onChange={handleInputChange}
                error={errors.code}
                maxLength={6}
              />

              {/* Submit Button */}
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#1172d4] hover:bg-[#1172d4]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Verifying...' : 'Confirm Account'}
                </Button>
              </div>

              {/* Back to signup */}
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => setStep('signup')}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  ← Back to sign up
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sign In Link */}
        <div className="pb-8 px-4">
          <p className="text-gray-400 text-sm font-normal leading-normal text-center">
            Already have an account?{' '}
            <Link href="/client-portal" className="font-medium text-[#1172d4] hover:text-[#1172d4]/80">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}