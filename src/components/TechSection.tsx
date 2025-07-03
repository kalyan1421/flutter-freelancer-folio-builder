
import React, { useState } from 'react';
import { Code, Github, X } from 'lucide-react';

const TechSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const techCategories = [
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: [
        { 
          name: 'Flutter', 
          level: 95, 
          color: 'from-blue-500 to-cyan-500',
          description: 'Cross-platform mobile development with native performance',
          projects: '8+ projects including e-commerce, food delivery, and utility apps',
          experience: '2+ years',
          keyFeatures: ['State Management (Provider, Bloc)', 'Custom Animations', 'Platform Integration', 'Performance Optimization']
        },
        { 
          name: 'Dart', 
          level: 90, 
          color: 'from-blue-600 to-blue-700',
          description: 'Core programming language for Flutter development',
          projects: 'Used in all Flutter projects',
          experience: '2+ years',
          keyFeatures: ['Object-Oriented Programming', 'Async Programming', 'Null Safety', 'Strong Typing']
        },
        { 
          name: 'Flutter Web', 
          level: 85, 
          color: 'from-teal-500 to-green-500',
          description: 'Building responsive web applications with Flutter',
          projects: '3+ web projects including portfolios and dashboards',
          experience: '1+ year',
          keyFeatures: ['Responsive Design', 'Web Routing', 'SEO Optimization', 'PWA Support']
        },
        { 
          name: 'Android/iOS', 
          level: 80, 
          color: 'from-green-500 to-emerald-500',
          description: 'Native mobile development and platform integrations',
          projects: 'Platform-specific integrations in Flutter apps',
          experience: '1.5+ years',
          keyFeatures: ['Native Code Integration', 'Platform Channels', 'Device APIs', 'App Store Deployment']
        }
      ]
    },
    {
      title: 'Backend & Full-Stack',
      icon: '⚙️',
      skills: [
        { 
          name: 'Node.js', 
          level: 88, 
          color: 'from-green-600 to-green-700',
          description: 'Server-side JavaScript runtime for scalable applications',
          projects: '5+ backend projects with RESTful APIs',
          experience: '1.5+ years',
          keyFeatures: ['Express Framework', 'Authentication', 'Database Integration', 'API Development']
        },
        { 
          name: 'Express.js', 
          level: 85, 
          color: 'from-gray-600 to-gray-700',
          description: 'Web application framework for Node.js',
          projects: 'Backend framework for most web projects',
          experience: '1.5+ years',
          keyFeatures: ['RESTful APIs', 'Middleware', 'Routing', 'Error Handling']
        },
        { 
          name: 'Firebase', 
          level: 92, 
          color: 'from-orange-500 to-red-500',
          description: 'Google\'s platform for mobile and web applications',
          projects: '10+ projects using various Firebase services',
          experience: '2+ years',
          keyFeatures: ['Firestore Database', 'Authentication', 'Cloud Functions', 'Hosting & Storage']
        },
        { 
          name: 'Supabase', 
          level: 87, 
          color: 'from-emerald-500 to-teal-500',
          description: 'Open-source Firebase alternative with PostgreSQL',
          projects: '3+ projects with real-time features',
          experience: '1+ year',
          keyFeatures: ['PostgreSQL Database', 'Real-time Subscriptions', 'Row Level Security', 'Edge Functions']
        }
      ]
    },
    {
      title: 'Frontend & Web',
      icon: '🌐',
      skills: [
        { 
          name: 'JavaScript', 
          level: 90, 
          color: 'from-yellow-500 to-orange-500',
          description: 'Modern JavaScript for web and mobile development',
          projects: 'Used in all web projects and Flutter Web',
          experience: '2+ years',
          keyFeatures: ['ES6+ Features', 'Async/Await', 'DOM Manipulation', 'Modern Frameworks']
        },
        { 
          name: 'React', 
          level: 85, 
          color: 'from-blue-400 to-blue-600',
          description: 'Component-based JavaScript library for user interfaces',
          projects: '4+ React applications and components',
          experience: '1+ year',
          keyFeatures: ['Hooks & State Management', 'Component Architecture', 'JSX', 'React Router']
        },
        { 
          name: 'HTML/CSS', 
          level: 92, 
          color: 'from-orange-500 to-pink-500',
          description: 'Foundation of web development with modern standards',
          projects: 'All web projects and Flutter Web styling',
          experience: '2+ years',
          keyFeatures: ['Semantic HTML5', 'CSS Grid & Flexbox', 'Responsive Design', 'Animations']
        },
        { 
          name: 'Tailwind CSS', 
          level: 88, 
          color: 'from-cyan-500 to-blue-500',
          description: 'Utility-first CSS framework for rapid UI development',
          projects: '6+ projects with custom design systems',
          experience: '1+ year',
          keyFeatures: ['Utility Classes', 'Custom Components', 'Responsive Design', 'Dark Mode Support']
        }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '☁️',
      skills: [
        { 
          name: 'MongoDB', 
          level: 85, 
          color: 'from-green-600 to-green-800',
          description: 'NoSQL database for flexible, scalable applications',
          projects: '4+ projects with complex data structures',
          experience: '1+ year',
          keyFeatures: ['Document Database', 'Aggregation Pipeline', 'Indexing', 'Atlas Cloud']
        },
        { 
          name: 'AWS S3', 
          level: 80, 
          color: 'from-orange-600 to-red-600',
          description: 'Cloud storage service for scalable file management',
          projects: '3+ projects with file upload/storage',
          experience: '1+ year',
          keyFeatures: ['Object Storage', 'CDN Integration', 'Security Policies', 'Cost Optimization']
        },
        { 
          name: 'Firestore', 
          level: 90, 
          color: 'from-blue-500 to-indigo-500',
          description: 'NoSQL document database with real-time synchronization',
          projects: '8+ projects with real-time features',
          experience: '2+ years',
          keyFeatures: ['Real-time Updates', 'Offline Support', 'Security Rules', 'Scalable Queries']
        },
        { 
          name: 'REST APIs', 
          level: 92, 
          color: 'from-purple-500 to-pink-500',
          description: 'RESTful web services for client-server communication',
          projects: 'All full-stack projects with API integration',
          experience: '2+ years',
          keyFeatures: ['API Design', 'Authentication', 'Error Handling', 'Documentation']
        }
      ]
    },
    {
      title: 'Design & UX',
      icon: '🎨',
      skills: [
        { 
          name: 'Figma', 
          level: 88, 
          color: 'from-purple-500 to-pink-500',
          description: 'Collaborative design tool for UI/UX and prototyping',
          projects: '15+ designs including mobile and web interfaces',
          experience: '1.5+ years',
          keyFeatures: ['Interface Design', 'Prototyping', 'Component Systems', 'Team Collaboration']
        },
        { 
          name: 'UI/UX Design', 
          level: 85, 
          color: 'from-pink-500 to-rose-500',
          description: 'User-centered design principles and methodologies',
          projects: 'All projects include custom UI/UX design',
          experience: '2+ years',
          keyFeatures: ['User Research', 'Wireframing', 'Design Systems', 'Usability Testing']
        },
        { 
          name: 'Prototyping', 
          level: 82, 
          color: 'from-indigo-500 to-purple-500',
          description: 'Interactive prototypes for testing and validation',
          projects: '10+ prototypes for client approval',
          experience: '1.5+ years',
          keyFeatures: ['Interactive Mockups', 'User Flow Testing', 'Design Validation', 'Client Presentations']
        },
        { 
          name: 'User Research', 
          level: 78, 
          color: 'from-violet-500 to-purple-500',
          description: 'Understanding user needs and behavior patterns',
          projects: 'Research conducted for 5+ major projects',
          experience: '1+ year',
          keyFeatures: ['User Interviews', 'Persona Development', 'Journey Mapping', 'Usability Analysis']
        }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { 
          name: 'Git', 
          level: 90, 
          color: 'from-red-600 to-orange-600',
          description: 'Version control system for collaborative development',
          projects: 'Used in all development projects',
          experience: '2+ years',
          keyFeatures: ['Version Control', 'Branching Strategies', 'Collaboration', 'Code History']
        },
        { 
          name: 'VS Code', 
          level: 95, 
          color: 'from-blue-600 to-blue-800',
          description: 'Primary code editor with extensive customization',
          projects: 'Main development environment',
          experience: '2+ years',
          keyFeatures: ['Extensions', 'Debugging', 'IntelliSense', 'Integrated Terminal']
        },
        { 
          name: 'Postman', 
          level: 85, 
          color: 'from-orange-500 to-red-500',
          description: 'API development and testing platform',
          projects: 'API testing for all backend projects',
          experience: '1.5+ years',
          keyFeatures: ['API Testing', 'Collections', 'Environment Variables', 'Automated Testing']
        },
        { 
          name: 'AI Tools', 
          level: 80, 
          color: 'from-violet-500 to-purple-600',
          description: 'Leveraging AI for enhanced development workflows',
          projects: 'Integrated AI features in 3+ projects',
          experience: '1+ year',
          keyFeatures: ['Code Generation', 'Content Creation', 'Problem Solving', 'Automation']
        }
      ]
    }
  ];

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

  const allSkills = techCategories.flatMap(category => 
    category.skills.map(skill => ({ ...skill, category: category.title, categoryIcon: category.icon }))
  );

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
            Click on any skill to explore my experience, projects, and expertise in detail.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-20">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-lg hover:border-teal-200 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className={`w-12 h-2 bg-gradient-to-r ${skill.color} rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}></div>
                <h3 className="font-semibold text-charcoal-900 text-sm mb-1">{skill.name}</h3>
                <p className="text-xs text-charcoal-600">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{selectedSkill.categoryIcon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal-900">{selectedSkill.name}</h3>
                      <p className="text-charcoal-600">{selectedSkill.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="text-charcoal-400 hover:text-charcoal-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-charcoal-900">Proficiency</span>
                      <span className="text-lg font-bold text-teal-600">{selectedSkill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r ${selectedSkill.color} h-3 rounded-full transition-all duration-1000`}
                        style={{ width: `${selectedSkill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-2">Description</h4>
                    <p className="text-charcoal-700 leading-relaxed">{selectedSkill.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal-900 mb-2">Experience</h4>
                      <p className="text-charcoal-700">{selectedSkill.experience}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal-900 mb-2">Projects</h4>
                      <p className="text-charcoal-700">{selectedSkill.projects}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-charcoal-900 mb-3">Key Features & Capabilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedSkill.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-charcoal-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-600 to-violet-600 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
