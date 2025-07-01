
import React from 'react';
import { Code, Github } from 'lucide-react';

const TechSection = () => {
  const techCategories = [
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: [
        { name: 'Flutter', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'Dart', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Flutter Web', level: 85, color: 'from-teal-500 to-green-500' },
        { name: 'Android/iOS', level: 80, color: 'from-green-500 to-emerald-500' }
      ]
    },
    {
      title: 'Backend & Full-Stack',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-600 to-green-700' },
        { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-700' },
        { name: 'Firebase', level: 92, color: 'from-orange-500 to-red-500' },
        { name: 'Supabase', level: 87, color: 'from-emerald-500 to-teal-500' }
      ]
    },
    {
      title: 'Frontend & Web',
      icon: '🌐',
      skills: [
        { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
        { name: 'React', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'HTML/CSS', level: 92, color: 'from-orange-500 to-pink-500' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-500 to-blue-500' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '☁️',
      skills: [
        { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-800' },
        { name: 'AWS S3', level: 80, color: 'from-orange-600 to-red-600' },
        { name: 'Firestore', level: 90, color: 'from-blue-500 to-indigo-500' },
        { name: 'REST APIs', level: 92, color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      title: 'Design & UX',
      icon: '🎨',
      skills: [
        { name: 'Figma', level: 88, color: 'from-purple-500 to-pink-500' },
        { name: 'UI/UX Design', level: 85, color: 'from-pink-500 to-rose-500' },
        { name: 'Prototyping', level: 82, color: 'from-indigo-500 to-purple-500' },
        { name: 'User Research', level: 78, color: 'from-violet-500 to-purple-500' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90, color: 'from-red-600 to-orange-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-800' },
        { name: 'Postman', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'AI Tools', level: 80, color: 'from-violet-500 to-purple-600' }
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
            A comprehensive toolkit for building modern applications from mobile to web, 
            with strong design sensibilities and full-stack capabilities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl hover-lift transition-all duration-300">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-charcoal-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-charcoal-700 font-medium">{skill.name}</span>
                      <span className="text-charcoal-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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
