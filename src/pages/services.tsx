import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import ServiceCard from '../components/shared/ServiceCard';

export default function Services() {
  const services = [
    {
      icon: 'security',
      title: 'Rescue Projects',
      description: 'Revitalize struggling projects with our expert team, ensuring timely delivery and optimal performance.'
    },
    {
      icon: 'code',
      title: 'Enterprise Projects', 
      description: 'Develop robust, scalable enterprise solutions tailored to your unique business needs.'
    },
    {
      icon: 'groups',
      title: 'Workforce Enhancement',
      description: 'Enhance your workforce with top-tier developers on a contractual basis, boosting productivity and innovation.'
    }
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Our Services - AMS Enterprises</title>

        <style jsx>{`
          body {
            min-height: max(884px, 100dvh);
          }
        `}</style>
      </Head>

      <div 
        className="relative flex h-auto min-h-screen w-full flex-col bg-[#111a22] dark justify-between group/design-root overflow-x-hidden" 
      >
        <div className="flex-grow">
          <Header />
          
          {/* Page Title */}
          <div className="pt-24 pb-8 text-center">
            <h1 className="text-white text-4xl font-bold tracking-tight">Our Services</h1>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-tight mb-4">
                Our Core Services
              </h2>
              <p className="text-gray-300 text-base font-normal leading-relaxed max-w-2xl mx-auto">
                We specialize in three key areas to drive your business forward with AI-driven solutions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}