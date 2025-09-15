import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Terms of Service - AMS Enterprises</title>

        <style jsx>{`
          body {
            min-height: max(884px, 100dvh);
          }
        `}</style>
      </Head>

      <div 
        className="relative flex h-auto min-h-screen w-full flex-col bg-[#111a22] dark justify-between group/design-root overflow-x-hidden font-roboto-mono"
      >
        <div className="flex-grow">
          <Header />
          
          {/* Page Title */}
          <div className="pt-24 pb-8 text-center">
            <h1 className="text-white text-4xl font-bold tracking-tight">Terms of Service</h1>
          </div>
          
          {/* Content */}
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="prose prose-invert max-w-none">
              <div className="text-slate-300 space-y-6">
                <p className="text-lg">
                  Last updated: December 15, 2024
                </p>
                
                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the services provided by AMS Enterprises, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">2. Services</h2>
                  <p>
                    AMS Enterprises provides AI-powered solutions including rescue projects, enterprise development, and workforce enhancement services.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">3. User Obligations</h2>
                  <p>
                    Users must provide accurate information and comply with all applicable laws and regulations when using our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">4. Intellectual Property</h2>
                  <p>
                    All content, features, and functionality are owned by AMS Enterprises and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">5. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, please contact us at legal@amsenterprises.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}