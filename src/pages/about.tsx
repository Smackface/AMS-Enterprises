import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Card from '../components/shared/Card';
import GridBackground from '@/components/shared/GridBackground';

export default function About() {
  const values = [
    {
      icon: 'psychology',
      title: 'Innovation',
      description: "We embrace cutting-edge technologies and AI to push the boundaries of what's possible in development.",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'workspace_premium',
      title: 'Excellence',
      description: 'We strive for the highest quality in every project, ensuring client satisfaction and lasting impact.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'groups',
      title: 'Collaboration',
      description: 'We foster a collaborative environment, both internally and with our clients, to achieve shared goals.',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: 'verified_user',
      title: 'Integrity',
      description: 'We operate with transparency and honesty, building trust with our clients and partners.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Rescued', icon: 'security' },
    { number: '95%', label: 'Success Rate', icon: 'verified' },
    { number: '24/7', label: 'Support Available', icon: 'support_agent' },
    { number: '10+', label: 'Years Experience', icon: 'timeline' }
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

          {/* Hero Section */}
          <div className="relative pt-24 pb-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <GridBackground />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
              <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
                  Pioneering the Future
                </h1>
                <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
                  Where artificial intelligence meets human ingenuity to create breakthrough solutions that transform businesses and rescue failing projects.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {stats.map((stat, index) => (
                  <Card key={index} delay={400 + index * 100} className="p-4 md:p-6 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-400 text-xl md:text-2xl">
                        {stat.icon}
                      </span>
                    </div>
                    <div className="text-white text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="px-4 max-w-7xl mx-auto py-16">
            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Mission */}
              <div className="animate-fade-in-left" style={{ animationDelay: '800ms' }}>
                <Card className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-400 text-2xl">rocket_launch</span>
                    </div>
                    <h2 className="text-white text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    At AMS Enterprises, we&apos;re revolutionizing development through AI-powered solutions. We specialize in rescuing troubled projects, delivering robust enterprise solutions, and enhancing workforces with skilled developers. Our AI-first approach ensures innovation, efficiency, and success in every project we undertake.
                  </p>
                </Card>
              </div>

              {/* Vision */}
              <div className="animate-fade-in-right" style={{ animationDelay: '900ms' }}>
                <Card className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-purple-400 text-2xl">visibility</span>
                    </div>
                    <h2 className="text-white text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We envision a future where AI seamlessly integrates with human creativity to solve complex business challenges. Through our innovative approach, we&apos;re building the next generation of intelligent solutions that adapt, learn, and evolve with your business needs.
                  </p>
                </Card>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="mb-20">
              <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Our Core Values
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                  The principles that guide everything we do, from project inception to successful delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1200 + index * 150}ms` }}>
                    <Card className="p-8 h-full group hover:scale-105 transition-transform duration-300">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${value.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <span className={`material-symbols-outlined text-2xl bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                            {value.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white text-xl font-bold mb-3">{value.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* AI-First Approach Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1800ms' }}>
              <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-cyan-400 text-3xl">smart_toy</span>
                  </div>
                  <h2 className="text-white text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Our AI-First Approach
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-400 text-xl">code</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Intelligent Development</h3>
                    <p className="text-gray-400 text-sm">AI-assisted coding and automated testing ensure faster, more reliable development cycles.</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-purple-400 text-xl">analytics</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Predictive Analysis</h3>
                    <p className="text-gray-400 text-sm">Advanced analytics predict project risks and optimize resource allocation for maximum efficiency.</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-400 text-xl">auto_fix_high</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Adaptive Solutions</h3>
                    <p className="text-gray-400 text-sm">Our solutions learn and adapt to your business needs, providing continuous improvement over time.</p>
                  </div>
                </div>
              </Card>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}