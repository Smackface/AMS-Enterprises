import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import ValueItem from '../components/about/ValueItem';

export default function About() {
  const values = [
    {
      icon: 'psychology',
      title: 'Innovation',
      description: "We embrace cutting-edge technologies and AI to push the boundaries of what's possible in web development."
    },
    {
      icon: 'workspace_premium',
      title: 'Excellence',
      description: 'We strive for the highest quality in every project, ensuring client satisfaction and lasting impact.'
    },
    {
      icon: 'groups',
      title: 'Collaboration',
      description: 'We foster a collaborative environment, both internally and with our clients, to achieve shared goals.'
    },
    {
      icon: 'verified_user',
      title: 'Integrity',
      description: 'We operate with transparency and honesty, building trust with our clients and partners.'
    }
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>About Us - AMS Enterprises</title>
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
            <h1 className="text-white text-4xl font-bold tracking-tight">About Us</h1>
          </div>
          
          {/* Hero Image */}
          <div className="w-full h-64 overflow-hidden">
            <img 
              alt="AMS Enterprises office" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9tSgi3H1BudiBmQ15xPPqMXU3Z8TmOn2IGvT6muQ7TfRdbc-Z47QZwXONNLlCbAwtXgnwS3aQURfFxW8s4mkK6RxvAMn5ebgcIeBvzx8Pdm9Akb23eR8MhtSRdGbGSnIzU9SxwEfH-aDdBXhli4GDNW17nWeBGxQX9snR4yIayafY1UqBG6FBpfW154zlmP9Kg_W04OQFKg59NLeH2ONcc8KZuHFGlPlu6qmYRPenOGn2YlMG3PQ4xqYGLo4c3iiDeoo6GfMTZRTP" 
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Mission Section */}
            <div className="mb-8">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-tighter mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 text-base font-normal leading-relaxed">
                At AMS Enterprises, we&apos;re on a mission to revolutionize web development through the power of AI. We specialize in rescuing troubled projects, delivering robust
                enterprise solutions, and enhancing workforces by placing skilled developers on a contractual basis. Our AI-first approach ensures innovation and efficiency in every
                project we undertake.
              </p>
            </div>

            {/* Values Section */}
            <div className="mb-8">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-tighter mb-4">
                Our Values
              </h2>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <ValueItem
                    key={index}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </ul>
            </div>

            {/* AI-First Approach Section */}
            <div>
              <h2 className="text-white text-3xl font-bold leading-tight tracking-tighter mb-4">
                Our AI-First Approach
              </h2>
              <p className="text-gray-300 text-base font-normal leading-relaxed">
                We integrate AI into every stage of the development process, from project planning and code generation to testing and deployment. This allows us to deliver faster, more
                efficient, and more intelligent solutions, tailored to the unique needs of each client.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}