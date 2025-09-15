import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Privacy Policy - AMS Enterprises</title>

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
            <h1 className="text-white text-4xl font-bold tracking-tight">Privacy Policy</h1>
          </div>
          
          {/* Content */}
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="prose prose-invert max-w-none">
              <div className="text-slate-300 space-y-6">
                <p className="text-lg">
                  Last updated: December 15, 2024
                </p>
                
                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, contact us, or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">2. How We Use Information</h2>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">3. Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">4. Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">5. Your Rights</h2>
                  <p>
                    You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-bold mb-4">6. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at privacy@amsenterprises.com.
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