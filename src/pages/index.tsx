import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Button from '../components/shared/Button';
import ServiceCard from '../components/shared/ServiceCard';

export default function Home() {
  const services = [
    {
      icon: 'security',
      title: 'Rescue Projects',
      description: 'Revitalize struggling projects with our expert team, ensuring timely delivery and optimal performance.',
      href: '/services'
    },
    {
      icon: 'code',
      title: 'Enterprise Projects',
      description: 'Develop robust, scalable enterprise solutions tailored to your unique business needs.',
      href: '/services'
    },
    {
      icon: 'groups',
      title: 'Workforce Enhancement',
      description: 'Enhance your workforce with top-tier developers on a contractual basis, boosting productivity and innovation.',
      href: '/services'
    }
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>AMS Enterprises - AI-Powered Solutions</title>
        <style jsx>{`
          body {
            min-height: max(884px, 100dvh);
          }
        `}</style>
      </Head>

      <div
        className="relative flex h-auto min-h-screen w-full flex-col bg-slate-950 dark justify-between group/design-root overflow-x-hidden font-roboto-mono"
      >
        <div>
          <Header />
          
          {/* Hero Section */}
          <div className="relative">
            <div className="@container">
              <div
                className="flex min-h-[70vh] flex-col gap-8 bg-cover bg-center bg-no-repeat @[480px]:gap-10 items-center justify-center px-4 py-20 @[480px]:px-10 text-center"
                style={{
                  backgroundImage: 'linear-gradient(to top, rgba(13, 18, 25, 0.8) 0%, rgba(13, 18, 25, 0.6) 50%, rgba(13, 18, 25, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo0-NqY1ZKd298c_CRX_NG3xobTXyjIExw70AgrmwcdEvnPzupCgRS0eSSwgYm2JKIBRN60AjRj2M8L9QADEHTLD7Nmo4gxbOSnMlixtUH6HJ5gqmJFQNkCNNGFkCbEcjrnYLwZJ-rjuCYhF83Ps1yIesjrF2dIOCJ3Mli7vi9V_iDbxHxE21NXVjrZmuAoxksAAGoWxPEyfIveI8-GCMBTTcXssnRskZLWopINHmJxx19dm5qfUyGmweQ2KGpmSCVvC3QfgS9WM_M")'
                }}
              >
                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                  <h1 className="text-white text-5xl font-bold leading-tight tracking-tight @[480px]:text-6xl @[768px]:text-7xl">
                    <span className="text-slate-400">Enterprise Solutions.</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI-Powered Excellence.</span>
                  </h1>
                  <h2 className="text-slate-300 text-xl font-normal leading-relaxed @[480px]:text-2xl max-w-3xl mx-auto">
                    From custom development and workforce enhancement to enterprise architecture, AMS Enterprises delivers comprehensive AI-powered solutions that drive innovation and accelerate business growth.
                  </h2>
                </div>

                <div className="flex flex-col @[480px]:flex-row gap-4 @[480px]:gap-6 items-center justify-center mt-8">
                  <Link href="/services">
                    <Button className="group relative min-w-[220px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                      <div className="relative flex items-center gap-3 justify-center">
                        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform duration-300">
                          business_center
                        </span>
                        <span className="text-lg">Explore Solutions</span>
                      </div>
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button className="group relative min-w-[220px] bg-slate-800/80 border border-slate-600/50 hover:border-slate-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center gap-3 justify-center">
                        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform duration-300">
                          chat
                        </span>
                        <span className="text-lg">Start a Project</span>
                      </div>
                    </Button>
                  </Link>

                  <Link href="/u">
                    <Button className="group min-w-[180px] bg-transparent border border-slate-500/30 hover:border-slate-400 text-slate-300 hover:text-white font-medium py-3 px-6 rounded-lg hover:bg-slate-800/30 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center gap-2 justify-center">
                        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform duration-300">
                          dashboard
                        </span>
                        <span>Client Portal</span>
                      </div>
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <span className="material-symbols-outlined text-green-400">verified</span>
                  <span>Trusted by 500+ enterprises worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-16 px-4 py-16 @container">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-tight @[480px]:text-4xl max-w-2xl mx-auto">
                Our Core Services
              </h2>
              <p className="text-slate-400 text-lg font-normal leading-normal max-w-2xl mx-auto">
                We specialize in three key areas to drive your business forward with AI-driven solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-slate-900/50">
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-16 text-center @[480px]:gap-8 @[480px]:px-10 @[480px]:py-24">
                <div className="flex flex-col gap-4">
                  <h2 className="text-white text-3xl font-bold leading-tight tracking-tight @[480px]:text-4xl max-w-2xl mx-auto">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-slate-400 text-lg font-normal leading-normal max-w-2xl mx-auto">
                    Contact us today to learn how AMS Enterprises can help you achieve your goals with our AI-powered solutions.
                  </p>
                </div>
                <div className="flex flex-1 justify-center mt-4">
                  <Link href="/contact" className="min-w-[84px] max-w-[480px] grow">
                    <Button className="w-full">
                      <span className="truncate">Get Started</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
