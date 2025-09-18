import Head from 'next/head';
import { useState, FormEvent } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import FormInput from '../components/shared/FormInput';
import FormTextarea from '../components/shared/FormTextarea';
import ContactInfo from '../components/contact/ContactInfo';
import Button from '../components/shared/Button';
import GridBackground from '@/components/shared/GridBackground';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactDetails = [
    {
      icon: 'mail',
      title: 'Email',
      content: 'contact@amsenterprises.com',
      href: 'mailto:contact@amsenterprises.com'
    },
    {
      icon: 'phone',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: 'location_on',
      title: 'Address',
      content: '123 Tech Street, Innovation City, CA 90001',
      isAddress: true
    }
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Contact Us - AMS Enterprises</title>

        <style jsx>{`
          body {
            min-height: max(884px, 100dvh);
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(2rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-left {
            from {
              opacity: 0;
              transform: translateX(-2rem);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in-right {
            from {
              opacity: 0;
              transform: translateX(2rem);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }

          .animate-fade-in-left {
            animation: fade-in-left 0.8s ease-out forwards;
          }

          .animate-fade-in-right {
            animation: fade-in-right 0.8s ease-out forwards;
          }
        `}</style>
      </Head>

      <div
        className="relative flex h-auto min-h-screen w-full flex-col bg-slate-950 dark justify-between group/design-root overflow-x-hidden"
      >
        <div className="flex-grow">
          <Header />
          <GridBackground />

          {/* Hero Section */}
          <div className="pt-24 pb-16 text-center">
            <div className="" style={{ animationDelay: '0ms' }}>
              <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Let&apos;s Transform Your Vision
              </h1>
              <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to revolutionize your business? We&apos;re here to turn your challenges into opportunities with AI-powered solutions.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <main className="px-4 max-w-7xl mx-auto">
            {/* Contact Content - Side by side on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Contact Form Section */}
              <div className="space-y-8 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
                <div>
                  <h2 className="text-white text-3xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Start Your Project
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Tell us about your project and we&apos;ll provide a tailored solution within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Animated form fields with staggered delays */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <FormInput
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <FormInput
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <FormInput
                      name="subject"
                      placeholder="Project Type or Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <FormTextarea
                      name="message"
                      placeholder="Tell us about your project, challenges, or goals..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>Launch Your Project</span>
                        <span className="material-symbols-outlined text-lg">rocket_launch</span>
                      </span>
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-8 animate-fade-in-right" style={{ animationDelay: '300ms' }}>
                <div>
                  <h2 className="text-white text-3xl font-bold tracking-tight mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Reach Out Directly
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Prefer to connect instantly? Use any of these channels to speak with our team.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactDetails.map((contact, index) => (
                    <div
                      key={index}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <ContactInfo
                        icon={contact.icon}
                        title={contact.title}
                        content={contact.content}
                        href={contact.href}
                        isAddress={contact.isAddress}
                      />
                    </div>
                  ))}
                </div>

                {/* Business Hours Card */}
                <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                  <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/40 transition-all duration-500 group">
                    <h4 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        schedule
                      </span>
                      Business Hours
                    </h4>
                    <div className="space-y-3 text-gray-400">
                      <div className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-700/20 transition-colors duration-200">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="text-blue-400">9:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-700/20 transition-colors duration-200">
                        <span className="font-medium">Saturday</span>
                        <span className="text-blue-400">10:00 AM - 4:00 PM PST</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-700/20 transition-colors duration-200">
                        <span className="font-medium">Sunday</span>
                        <span className="text-red-400">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                  <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl border border-blue-700/30 hover:border-blue-600/50 hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-500 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-blue-400 text-xl">
                          flash_on
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-lg font-semibold mb-2">Lightning Fast Response</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          We respond to all project inquiries within 4 hours during business days.
                          Emergency support? Call us directly for immediate assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div className="my-16 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <div className="text-center mb-8">
                <h3 className="text-white text-3xl font-bold tracking-tight mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Visit Our Innovation Hub
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  Located in the heart of Innovation City, our state-of-the-art facility is where breakthrough solutions come to life.
                </p>
              </div>
              <div className="relative group">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCi-CoddzkTvY_89JxbeOPOJuWaFvdILkkg7AYRDDZM5XMKs1y9p_1geM4Z0u7KhyJ3b7YGptj-zr5BSsP0O5jlKglC5pkOGrbRKEeaD6aYKJT6UB8RmHqbj14LHD8vX8vO_HRMqlGW6skIItWvx85oZr7EJNMHffG5rPopAxFp14hxnPg1Aa7l_4nx1MIny774rcg9zxRU1M7vD85h6rkBIF7kdMgDpx0qylSK-9CEVKTLuvkvQmQ_zatr39LNPmIpjkz4WGe4pTgc")'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent group-hover:from-slate-900/40 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <span className="material-symbols-outlined text-blue-400">
                        location_on
                      </span>
                      <span className="font-medium">123 Tech Street, Innovation City</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Privacy Footer */}
          <footer className="p-4 mt-8">
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <span className="material-symbols-outlined text-base">lock</span>
              <p className="text-xs text-center">
                Your information is secure with us. We prioritize your privacy and data protection.
              </p>
            </div>
          </footer>
        </div>

        <Footer />
      </div>
    </>
  );
}