
import React from 'react';
import { Github } from 'lucide-react';
import SkillsOverview from './SkillsOverview';

const TechSection = () => {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'Cross-platform Flutter apps for iOS & Android with native performance',
      icon: '📱',
      features: ['Flutter Development', 'UI/UX Design', 'App Store Deployment', 'Performance Optimization']
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Complete web solutions using MERN stack with Firebase/Supabase backend',
      icon: '🌐',
      features: ['React/Node.js', 'Database Design', 'API Development', 'Cloud Deployment']
    },
    {
      title: 'UI/UX Design & Prototyping',
      description: 'User-centered designs that convert visitors into customers',
      icon: '🎨',
      features: ['Figma Design', 'User Research', 'Wireframing', 'Interactive Prototypes']
    },
    {
      title: 'Backend Integration',
      description: 'Secure APIs, payment gateways, and third-party service integrations',
      icon: '⚙️',
      features: ['REST APIs', 'Payment Integration', 'Authentication', 'Database Management']
    },
    {
      title: 'AI-Powered Features',
      description: 'Modern AI integration including chatbots and smart automation',
      icon: '🤖',
      features: ['Chatbot Integration', 'Smart Forms', 'Content Generation', 'Process Automation']
    },
    {
      title: 'Consulting & Strategy',
      description: 'Technical guidance for startups and product development planning',
      icon: '💡',
      features: ['Tech Stack Selection', 'Architecture Planning', 'Code Review', 'Team Mentoring']
    }
  ];

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-charcoal-900 mb-6">
            Skills & 
            <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
              {' '}Expertise
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Overview */}
        <SkillsOverview />

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-poppins text-charcoal-900 text-center mb-12">
            What I Can Do For You
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-2xl hover-lift hover:border-teal-200 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-charcoal-900 mb-3">{service.title}</h4>
                <p className="text-charcoal-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-charcoal-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-600 to-violet-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-violet-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss your project and choose the perfect tech stack for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold"
            >
              Start Your Project
            </a>
            <a
              href="https://github.com/kalyan"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-200 font-semibold flex items-center space-x-2"
            >
              <Github size={20} />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
