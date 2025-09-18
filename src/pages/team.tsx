import Head from 'next/head';
import Header from '@/components/shared/Header';
import Footer from '../components/shared/Footer';
import Card from '../components/shared/Card';
import GridBackground from '@/components/shared/GridBackground';

export default function Team() {
  const teamMembers = [
    {
      name: 'Jacob Mathison',
      position: 'Chief Executive Officer',
      specialty: 'Strategic Leadership & Business Development',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      gradient: 'from-blue-500 to-purple-500',
      icon: 'person'
    },
    {
      name: 'Hunter Albert',
      position: 'Chief Technology Officer',
      specialty: 'AI Architecture & System Design',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      gradient: 'from-purple-500 to-pink-500',
      icon: 'psychology'
    },
    {
      name: 'Anna Albert',
      position: 'Lead Product Designer',
      specialty: 'User Experience & Interface Design',
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b9c3c1e4?w=400&h=400&fit=crop&crop=face',
      gradient: 'from-pink-500 to-rose-500',
      icon: 'palette'
    },
    {
      name: 'Cristian Segovia',
      position: 'Senior Full-Stack Engineer',
      specialty: 'Frontend & Backend Development',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      gradient: 'from-green-500 to-teal-500',
      icon: 'code'
    },
    {
      name: 'Attila Oroszi',
      position: 'AI Solutions Architect',
      specialty: 'Machine Learning & Data Engineering',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      gradient: 'from-cyan-500 to-blue-500',
      icon: 'smart_toy'
    }
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Our Team - AMS Enterprises</title>

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

          @keyframes fade-in-scale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }

          .animate-fade-in-scale {
            animation: fade-in-scale 0.8s ease-out forwards;
          }
        `}</style>
      </Head>

      <div
        className="relative flex h-auto min-h-screen w-full flex-col bg-slate-950 dark justify-between group/design-root overflow-x-hidden font-roboto-mono"
      >
        <div className="flex-grow">
          <Header />
          <GridBackground />

          {/* Hero Section */}
          <div className="pt-24 pb-20 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
                Meet Our Team
              </h1>
              <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                The brilliant minds driving innovation and delivering exceptional results across every project at AMS Enterprises.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <main className="px-4 max-w-7xl mx-auto pb-20">
            {/* Team Introduction */}
            <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovation Through Collaboration
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Our diverse team combines cutting-edge AI expertise with deep industry knowledge to transform your vision into reality.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="animate-fade-in-scale"
                  style={{ animationDelay: `${400 + index * 150}ms` }}
                >
                  <Card className="p-8 h-full group hover:scale-105 transition-all duration-500">
                    <div className="text-center">
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <div className="w-32 h-32 mx-auto relative">
                          <div
                            className="w-full h-full rounded-full bg-cover bg-center shadow-xl"
                            style={{ backgroundImage: `url("${member.imageUrl}")` }}
                          />
                          <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="material-symbols-outlined text-white text-lg">
                              {member.icon}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="space-y-3">
                        <h3 className="text-white text-xl font-bold">{member.name}</h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                          {member.position}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {member.specialty}
                        </p>
                      </div>

                      {/* Social/Contact Links */}
                      <div className="mt-6 flex justify-center space-x-3">
                        <button className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors duration-200 group/btn">
                          <span className="material-symbols-outlined text-gray-400 group-hover/btn:text-blue-400 text-lg transition-colors duration-200">
                            mail
                          </span>
                        </button>
                        <button className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors duration-200 group/btn">
                          <span className="material-symbols-outlined text-gray-400 group-hover/btn:text-blue-400 text-lg transition-colors duration-200">
                            link
                          </span>
                        </button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Team Values Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
              <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-400 text-3xl">groups</span>
                  </div>
                  <h3 className="text-white text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    United by Excellence
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    Our team is built on a foundation of collaboration, innovation, and unwavering commitment to delivering exceptional results.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-400 text-xl">lightbulb</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Innovation First</h4>
                    <p className="text-gray-400 text-sm">We push boundaries and embrace new technologies to solve complex challenges.</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-purple-400 text-xl">handshake</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Client-Focused</h4>
                    <p className="text-gray-400 text-sm">Every decision we make is guided by our commitment to client success.</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-400 text-xl">trending_up</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Continuous Growth</h4>
                    <p className="text-gray-400 text-sm">We believe in lifelong learning and constantly evolving our expertise.</p>
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