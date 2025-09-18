import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import ServiceCard from '../components/shared/ServiceCard';
import GridBackground from '@/components/shared/GridBackground';

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

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
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
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Transforming businesses through AI-powered solutions. From rescue missions to enterprise development, we deliver excellence across every project.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-16 px-4 py-16 @container">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto">
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Core Capabilities
                </h2>
                <p className="text-slate-400 text-lg font-normal leading-normal">
                  Three specialized areas where we excel, delivering measurable results that drive your business forward.
                </p>
              </div>
            </div>

            {/* Services Grid - Same as home page */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={600 + index * 200}
                />
              ))}
            </div>

            {/* Additional Service Details Section */}
            <div className="animate-fade-in-up max-w-6xl mx-auto" style={{ animationDelay: '1200ms' }}>
              <div className="text-center mb-12">
                <h3 className="text-white text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Why Choose AMS Enterprises?
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  Our proven methodology and AI-powered approach ensure your projects succeed where others fail.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-600/50 hover:bg-slate-800/40 transition-all duration-500 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-blue-400 text-2xl">speed</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Fast Delivery</h4>
                  <p className="text-slate-400 text-sm">Projects completed 40% faster than industry average</p>
                </div>

                <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-600/50 hover:bg-slate-800/40 transition-all duration-500 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-purple-400 text-2xl">psychology</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">AI-Powered</h4>
                  <p className="text-slate-400 text-sm">Cutting-edge AI integration in every solution</p>
                </div>

                <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-green-600/50 hover:bg-slate-800/40 transition-all duration-500 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-green-400 text-2xl">verified</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Proven Results</h4>
                  <p className="text-slate-400 text-sm">95% project success rate across all verticals</p>
                </div>

                <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-orange-600/50 hover:bg-slate-800/40 transition-all duration-500 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-orange-400 text-2xl">support_agent</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
                  <p className="text-slate-400 text-sm">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}