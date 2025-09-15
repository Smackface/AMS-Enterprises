import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';

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
        className="relative flex h-auto min-h-screen w-full flex-col bg-[#0d1219] dark justify-between group/design-root overflow-x-hidden font-roboto-mono"
      >
        <div>
          <Header />
          
          {/* Hero Section */}
          <div className="relative">
            <div className="@container">
              <div 
                className="flex min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-start justify-end px-4 pb-10 @[480px]:px-10" 
                style={{
                  backgroundImage: 'linear-gradient(to top, rgba(13, 18, 25, 1) 0%, rgba(13, 18, 25, 0.4) 50%, rgba(13, 18, 25, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo0-NqY1ZKd298c_CRX_NG3xobTXyjIExw70AgrmwcdEvnPzupCgRS0eSSwgYm2JKIBRN60AjRj2M8L9QADEHTLD7Nmo4gxbOSnMlixtUH6HJ5gqmJFQNkCNNGFkCbEcjrnYLwZJ-rjuCYhF83Ps1yIesjrF2dIOCJ3Mli7vi9V_iDbxHxE21NXVjrZmuAoxksAAGoWxPEyfIveI8-GCMBTTcXssnRskZLWopINHmJxx19dm5qfUyGmweQ2KGpmSCVvC3QfgS9WM_M")'
                }}
              >
                <div className="flex flex-col gap-4 text-left">
                  <h1 className="text-white text-4xl font-bold leading-tight tracking-tight @[480px]:text-5xl">
                    AI-Powered Solutions for the Future of Business
                  </h1>
                  <h2 className="text-slate-300 text-base font-normal leading-normal @[480px]:text-lg">
                    AMS Enterprises is at the forefront of AI innovation, delivering cutting-edge solutions for rescue projects, enterprise development, and workforce enhancement.
                  </h2>
                </div>
                <Link href="/services">
                  <Button className="min-w-[84px] max-w-[480px]">
                    <span className="truncate">Explore Our Services</span>
                  </Button>
                </Link>
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
            <div className="grid grid-cols-1 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
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
