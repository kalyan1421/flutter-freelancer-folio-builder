
import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#tech' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'Backend Integration',
    'AI Integration',
    'Consulting'
  ];

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold font-poppins bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
                Kalyan
              </span>
              <Code className="ml-3 text-teal-400" size={24} />
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Flutter & Full-Stack Developer crafting beautiful, scalable applications. 
              From mobile apps to web platforms, I turn ideas into digital reality with 
              modern technology and great design.
            </p>

            <div className="flex space-x-4 mb-6">
              <a
                href="mailto:hi@kalyank.dev"
                className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/kalyan-dev"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/kalyan"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>

            <div className="text-sm text-gray-400">
              📍 Chennai, India • Available for remote work worldwide
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Kalyan. All rights reserved. Built with React & Tailwind CSS.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🚀 Available for new projects</span>
              <span>•</span>
              <span>⚡ 24hr response time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-violet-600"></div>
    </footer>
  );
};

export default Footer;
