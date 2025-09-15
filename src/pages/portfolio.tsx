import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudyCard from '../components/CaseStudyCard';
import TabNavigation from '../components/TabNavigation';
import Button from '../components/Button';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('rescue');
  
  const handleTabChange = (newTab: string) => {
    console.log('Portfolio: Tab changing from', activeTab, 'to', newTab);
    setActiveTab(newTab);
  };

  const tabs = [
    { id: 'rescue', label: 'Rescue' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'workforce', label: 'Workforce' }
  ];

  const caseStudies = {
    rescue: [
      {
        title: 'Project Phoenix',
        category: 'E-commerce Platform Rescue',
        description: 'Revitalized a failing e-commerce platform by overhauling its architecture. We implemented robust security protocols and optimized the user experience, resulting in a 200% increase in performance and a significant reduction in security incidents.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zaqZ3p4qp8IwcoQJUnB4-jEAAW0Ry_FnbR7GQyVueUmA_TyFMwIIfH6XkF7I1FXCJBFxB-CFpJ3R1TWB2swUzJHtvSPOE884yzJ66Hh_2uGwF9dhZl1QQPX8n2f-kjYACIJe2WFob7bIwxV3-kLa4FiclKvN9UPYz9KZwwy6A9MoMd5tMq0lAsuHH-pPyx7SvQc9FKy9--rQULcLNyU2hEAMmvvX2F8lwyxtr0XUXvuhBXTCvbSpsuI2ewUg9_F_xGu4MnOT8tS',
        icon: 'electric_bolt'
      }
    ],
    enterprise: [
      {
        title: 'Operation SafeNet',
        category: 'Enterprise Security Enhancement',
        description: 'Secured a financial institution\'s network by implementing advanced AI-powered threat detection and automated response systems. This proactive approach to cybersecurity mitigated risks and ensured compliance with industry regulations.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBanC4F5d8cL7kEvxlMBKmR1jGdk1DfpK2nI8Th0RxDxIRAQPMkj8xolcG9k26spz_es6_WRryZw2ixGlb2G119KuY8cQlSkgU0kZ-aHn3waZf3WX9T5iOBdsN316tj8oYN6pGR7EmErhjoBiweX-PeJuQ1CVYJcPFXHgUnLXbzt28E_pYERfkSPeu0-PTlBhXOt7cPXArN9ilVl4fWE8qbEsnyE2OMGqYGusc5OpBt7jI5m_wYIBAiiIVUHoFwm6XZn6ZSiOSSd8w8',
        icon: 'security'
      },
      {
        title: 'Digital Transformation Initiative',
        category: 'Enterprise Modernization',
        description: 'Led a comprehensive digital transformation for a manufacturing company, modernizing legacy systems and implementing cloud-native architecture that increased operational efficiency by 150%.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz4zaqZ3p4qp8IwcoQJUnB4-jEAAW0Ry_FnbR7GQyVueUmA_TyFMwIIfH6XkF7I1FXCJBFxB-CFpJ3R1TWB2swUzJHtvSPOE884yzJ66Hh_2uGwF9dhZl1QQPX8n2f-kjYACIJe2WFob7bIwxV3-kLa4FiclKvN9UPYz9KZwwy6A9MoMd5tMq0lAsuHH-pPyx7SvQc9FKy9--rQULcLNyU2hEAMmvvX2F8lwyxtr0XUXvuhBXTCvbSpsuI2ewUg9_F_xGu4MnOT8tS',
        icon: 'transform'
      }
    ],
    workforce: [
      {
        title: 'Code Rescue & Team Augmentation',
        category: 'Workforce Enhancement',
        description: 'We not only recovered a critical patient management system for a healthcare provider but also enhanced their team with our specialized developers. This ensured HIPAA compliance, 99.9% uptime, and fostered long-term project stability.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeTZVJzmw3GS1p8ktkgMGzHmFZ48T5JceTaEoGd4fHXMKYgdRd1y0jC4ClZhLvFFg4uHJrSd1JadTWN-sYEEsbTWZPibOhfn919VwIOplPqfALZR1U0pyEPucUVy_TLskf44itwo9cgcTCJ_10J4-kIa-1hoeuypCCFoEVQMIP4yIojUlPxfNXs28-v8DK2GQtgAGdpeglqKZ5bZYWo_xHgAx6292U_1aMvydgmmCYxSODshj5ha34yN91olQWhgsTzGFqfFKVvAgS',
        icon: 'healing'
      },
      {
        title: 'Rapid Team Scaling',
        category: 'Workforce Augmentation',
        description: 'Rapidly scaled a startup\'s development team by 300% in just 6 weeks, providing specialized React and Node.js developers who seamlessly integrated with existing workflows.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBanC4F5d8cL7kEvxlMBKmR1jGdk1DfpK2nI8Th0RxDxIRAQPMkj8xolcG9k26spz_es6_WRryZw2ixGlb2G119KuY8cQlSkgU0kZ-aHn3waZf3WX9T5iOBdsN316tj8oYN6pGR7EmErhjoBiweX-PeJuQ1CVYJcPFXHgUnLXbzt28E_pYERfkSPeu0-PTlBhXOt7cPXArN9ilVl4fWE8qbEsnyE2OMGqYGusc5OpBt7jI5m_wYIBAiiIVUHoFwm6XZn6ZSiOSSd8w8',
        icon: 'group_add'
      }
    ]
  };

  const currentCaseStudies = caseStudies[activeTab as keyof typeof caseStudies] || [];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Portfolio - AMS Enterprises</title>
        <style jsx>{`
          body {
            min-height: max(884px, 100dvh);
          }
        `}</style>
      </Head>

      <div 
        className="relative min-h-screen w-full flex flex-col justify-between bg-slate-950 text-slate-300 font-roboto-mono"
      >
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_10%,transparent_50%)]"></div>
        
        <Header />

        {/* Page Title */}
        <div className="pt-24 pb-8 text-center">
          <h1 className="text-white text-4xl font-bold tracking-tight">Portfolio</h1>
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">Our Work</p>
              <h2 
                className="text-4xl md:text-5xl font-bold mt-2 text-white font-orbitron"
              >
                Case Studies
              </h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Showcasing our expertise in transforming complex challenges into innovative, secure, and resilient digital solutions.
              </p>
            </div>

            {/* Tab Navigation */}
            <TabNavigation 
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            {/* Case Studies */}
            <div className="space-y-12">
              {currentCaseStudies.map((study, index) => (
                <CaseStudyCard
                  key={index}
                  title={study.title}
                  category={study.category}
                  description={study.description}
                  imageUrl={study.imageUrl}
                  icon={study.icon}
                  reversed={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}