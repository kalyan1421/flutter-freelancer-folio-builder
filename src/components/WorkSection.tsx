
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Food Delivery App',
      category: 'Mobile App',
      image: '/api/placeholder/400/300',
      tags: ['Flutter', 'Firebase', 'iOS', 'Android'],
      shortDescription: 'Cross-platform food ordering app with real-time tracking and secure payments.',
      problem: 'A local restaurant needed a mobile solution to handle online orders and compete with major delivery platforms.',
      role: 'Sole Flutter Developer & UI/UX Designer',
      solution: 'Built a complete food delivery ecosystem with customer app, restaurant dashboard, and delivery tracking.',
      outcome: '+40% order increase, 4.8★ rating, 25% faster order processing',
      features: [
        'Real-time order tracking',
        'Secure payment integration', 
        'Push notifications',
        'Restaurant dashboard',
        'Multi-language support'
      ]
    },
    {
      id: 2,
      title: 'Recharge & Bill Pay',
      category: 'Mobile App',
      image: '/api/placeholder/400/300',
      tags: ['Flutter', 'Supabase', 'Payment Gateway'],
      shortDescription: 'All-in-one recharge and bill payment solution with cashback system.',
      problem: 'Users needed a reliable app for mobile recharges and utility bill payments with competitive rates.',
      role: 'Full-Stack Developer',
      solution: 'Created a comprehensive fintech app with multiple payment options and loyalty rewards.',
      outcome: '10,000+ users, ₹50L+ transactions, 4.6★ rating',
      features: [
        'Multi-operator support',
        'Cashback rewards',
        'Bill reminders',
        'Transaction history',
        'Wallet integration'
      ]
    },
    {
      id: 3,
      title: 'Laundry Management',
      category: 'Web + Mobile',
      image: '/api/placeholder/400/300',
      tags: ['Flutter Web', 'Node.js', 'MongoDB'],
      shortDescription: 'Complete laundry business management with customer app and admin panel.',
      problem: 'Laundry business owners struggled with order management and customer communication.',
      role: 'Full-Stack Developer & System Architect',
      solution: 'Built an end-to-end solution covering order placement, tracking, and business analytics.',
      outcome: '300% efficiency increase, automated 80% of manual processes',
      features: [
        'Order scheduling',
        'SMS notifications',
        'Revenue analytics',
        'Staff management',
        'Customer feedback system'
      ]
    },
    {
      id: 4,
      title: 'Retail Billing System',
      category: 'Desktop + Web',
      image: '/api/placeholder/400/300',
      tags: ['Flutter Desktop', 'Firebase', 'Print Integration'],
      shortDescription: 'Modern POS system for retail stores with inventory and sales tracking.',
      problem: 'Small retail stores needed an affordable, modern alternative to expensive POS systems.',
      role: 'Solo Developer',
      solution: 'Developed a cross-platform billing solution with cloud sync and offline capabilities.',
      outcome: '50+ stores using, 99.9% uptime, ₹2L+ daily transactions',
      features: [
        'Barcode scanning',
        'Inventory management',
        'Sales reports',
        'Tax calculations',
        'Cloud backup'
      ]
    },
    {
      id: 5,
      title: 'E-learning Platform',
      category: 'Web App',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'AWS', 'Video Streaming'],
      shortDescription: 'Interactive learning platform with video courses and progress tracking.',
      problem: 'Educational institute needed an online platform to deliver courses during remote learning.',
      role: 'Lead Full-Stack Developer',
      solution: 'Built a scalable e-learning platform with video delivery, quizzes, and analytics.',
      outcome: '2000+ active learners, 95% course completion rate',
      features: [
        'HD video streaming',
        'Interactive quizzes',
        'Progress tracking',
        'Certificate generation',
        'Discussion forums'
      ]
    },
    {
      id: 6,
      title: 'Event Management',
      category: 'Mobile App',
      image: '/api/placeholder/400/300',
      tags: ['Flutter', 'Firebase', 'QR Code', 'Analytics'],
      shortDescription: 'Event organization app with ticketing, check-in, and attendee management.',
      problem: 'Event organizers needed a digital solution for ticket sales and attendee management.',
      role: 'Mobile App Developer & UX Designer',
      solution: 'Created a comprehensive event management solution with digital tickets and analytics.',
      outcome: '100+ events managed, 15,000+ tickets sold, 4.7★ rating',
      features: [
        'QR code tickets',
        'Check-in system',
        'Event analytics',
        'Push notifications',
        'Social sharing'
      ]
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-all duration-300 border border-gray-100">
      <div className="aspect-w-16 aspect-h-10 bg-gradient-to-br from-teal-100 to-violet-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-violet-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
            {project.title.charAt(0)}
          </div>
          <div className="text-sm text-charcoal-600">{project.category}</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-charcoal-700 text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-charcoal-900 mb-3">{project.title}</h3>
        <p className="text-charcoal-600 mb-6 leading-relaxed">{project.shortDescription}</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200"
            >
              Read Case Study
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-charcoal-900 mb-4">
                {project.title} - Case Study
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Project Overview */}
              <div className="bg-gradient-to-r from-teal-50 to-violet-50 p-6 rounded-xl">
                <h4 className="font-semibold text-charcoal-900 mb-2">Project Overview</h4>
                <p className="text-charcoal-700">{project.shortDescription}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-charcoal-900 mb-3">Problem Statement</h4>
                  <p className="text-charcoal-700 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-900 mb-3">My Role</h4>
                  <p className="text-charcoal-700 leading-relaxed">{project.role}</p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Solution Approach</h4>
                <p className="text-charcoal-700 leading-relaxed mb-4">{project.solution}</p>
                
                <h5 className="font-medium text-charcoal-800 mb-2">Key Features Implemented:</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-charcoal-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-teal-100 to-violet-100 text-charcoal-800 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="bg-gradient-to-r from-teal-600 to-violet-600 text-white p-6 rounded-xl">
                <h4 className="font-semibold mb-3">Project Outcome & Impact</h4>
                <p className="text-lg font-medium">{project.outcome}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-charcoal-900 mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Real-world applications that solve business problems and delight users. 
            Each project showcases different aspects of my full-stack development skills.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
              Ready to bring your idea to life?
            </h3>
            <p className="text-charcoal-600 mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-600 to-violet-600 text-white px-8 py-3 rounded-full hover:from-teal-700 hover:to-violet-700 transition-all duration-200 font-semibold"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
