
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const projectTypes = [
    'Mobile App Development',
    'Web Development',
    'Full-Stack Solution',
    'UI/UX Design',
    'Backend Integration',
    'Consulting',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-charcoal-900 mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can 
            bring your ideas to life with modern technology and great design.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-charcoal-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-charcoal-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-charcoal-700 font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select project type...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-charcoal-700 font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-violet-600 hover:from-teal-700 hover:to-violet-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-200"
              >
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-charcoal-600 text-center mb-4">Or reach out directly:</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:hi@kalyank.dev"
                  className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors"
                >
                  <Mail size={20} />
                  <span>hi@kalyank.dev</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Why Work With Me */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Why Work With Me?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900 mb-2">Fast & Reliable Delivery</h4>
                    <p className="text-charcoal-600">12+ projects delivered on time with consistent quality and client satisfaction.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900 mb-2">Full-Stack Expertise</h4>
                    <p className="text-charcoal-600">From mobile apps to web platforms, I handle the complete development cycle.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900 mb-2">Modern Tech & AI</h4>
                    <p className="text-charcoal-600">Using cutting-edge technologies and AI tools to build future-ready solutions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900 mb-2">Design + Development</h4>
                    <p className="text-charcoal-600">Unique combination of UI/UX design skills with strong development capabilities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume & Social Links */}
            <div className="bg-gradient-to-r from-teal-600 to-violet-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6 opacity-90">
                Download my resume or connect with me on social platforms to learn more about my work and experience.
              </p>
              
              <div className="space-y-4">
                <a
                  href="/resume-kalyan-flutter-developer.pdf"
                  className="block w-full bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                  download
                >
                  📄 Download Resume
                </a>
                
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/kalyan-dev"
                    className="flex-1 border-2 border-white text-white px-4 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-200 font-semibold text-center flex items-center justify-center space-x-2"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/kalyan"
                    className="flex-1 border-2 border-white text-white px-4 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-200 font-semibold text-center flex items-center justify-center space-x-2"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-2xl">⚡</div>
                <h4 className="font-bold text-charcoal-900">Quick Response Guarantee</h4>
              </div>
              <p className="text-charcoal-700">
                I typically respond to new project inquiries within 24 hours. 
                For urgent projects, don't hesitate to mention it in your message!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
