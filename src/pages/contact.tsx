import Head from 'next/head';
import { useState, FormEvent } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import FormInput from '../components/shared/FormInput';
import FormTextarea from '../components/shared/FormTextarea';
import ContactInfo from '../components/contact/ContactInfo';
import Button from '../components/shared/Button';

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
        `}</style>
      </Head>

      <div 
        className="relative flex h-auto min-h-screen w-full flex-col bg-[#111A22] dark justify-between group/design-root overflow-x-hidden" 
      >
        <div className="flex-grow">
          <Header />
          
          {/* Page Title */}
          <div className="pt-24 pb-8 text-center">
            <h1 className="text-white text-4xl font-bold tracking-tight">Contact Us</h1>
          </div>
          
          {/* Main Content */}
          <main className="px-4">
            {/* Hero Section */}
            <div className="text-center my-8">
              <h2 className="text-white text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="text-gray-400 mt-2">We&apos;re here to help. Reach out to us for any inquiries or support.</p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <FormInput
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <FormInput
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <FormTextarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button 
                type="submit" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>

            {/* Contact Information */}
            <div className="my-10">
              <h3 className="text-white text-2xl font-bold tracking-tight">Contact Information</h3>
              <div className="mt-6 space-y-6">
                {contactDetails.map((contact, index) => (
                  <ContactInfo
                    key={index}
                    icon={contact.icon}
                    title={contact.title}
                    content={contact.content}
                    href={contact.href}
                    isAddress={contact.isAddress}
                  />
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="my-10">
              <h3 className="text-white text-2xl font-bold tracking-tight mb-4">Our Location</h3>
              <div 
                className="w-full aspect-video bg-cover bg-center rounded-lg" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCi-CoddzkTvY_89JxbeOPOJuWaFvdILkkg7AYRDDZM5XMKs1y9p_1geM4Z0u7KhyJ3b7YGptj-zr5BSsP0O5jlKglC5pkOGrbRKEeaD6aYKJT6UB8RmHqbj14LHD8vX8vO_HRMqlGW6skIItWvx85oZr7EJNMHffG5rPopAxFp14hxnPg1Aa7l_4nx1MIny774rcg9zxRU1M7vD85h6rkBIF7kdMgDpx0qylSK-9CEVKTLuvkvQmQ_zatr39LNPmIpjkz4WGe4pTgc")'
                }}
              ></div>
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