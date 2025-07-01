
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Restaurant Owner',
      company: 'Chennai Delights',
      image: 'PS',
      rating: 5,
      text: 'Kalyan brought our food delivery idea to life in just 3 weeks. His attention to design and development speed made a huge difference. Our orders increased by 40% within the first month!',
      project: 'Food Delivery App'
    },
    {
      name: 'Raj Patel',
      role: 'Startup Founder',
      company: 'PayEase Solutions',
      image: 'RP',
      rating: 5,
      text: 'Working with Kalyan was seamless. He understood our fintech requirements perfectly and delivered a robust recharge app. The user feedback has been overwhelmingly positive.',
      project: 'Recharge & Bill Pay App'
    },
    {
      name: 'Anitha Kumar',
      role: 'Business Owner',
      company: 'Fresh Laundry Services',
      image: 'AK',
      rating: 5,
      text: 'The laundry management system revolutionized our business operations. We went from manual processes to complete automation. Highly recommend Kalyan for any business app needs.',
      project: 'Laundry Management System'
    },
    {
      name: 'Vikram Singh',
      role: 'Retail Store Owner',
      company: 'Singh Electronics',
      image: 'VS',
      rating: 5,
      text: 'The billing system Kalyan created is incredibly user-friendly and reliable. It handles our daily transactions smoothly and the reporting features help us make better business decisions.',
      project: 'Retail Billing System'
    },
    {
      name: 'Dr. Meera Reddy',
      role: 'Education Director',
      company: 'Learn Online Institute',
      image: 'MR',
      rating: 5,
      text: 'Our e-learning platform exceeded expectations. Students love the interface and the video streaming quality is excellent. Kalyan delivered exactly what we envisioned.',
      project: 'E-learning Platform'
    },
    {
      name: 'Arjun Gupta',
      role: 'Event Manager',
      company: 'Celebrations & Co',
      image: 'AG',
      rating: 5,
      text: 'The event management app streamlined our entire process. From ticket sales to check-ins, everything is now digital and efficient. Great work and excellent support!',
      project: 'Event Management App'
    }
  ];

  const stats = [
    { number: '12+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '4.9★', label: 'Average Rating' },
    { number: '1.5', label: 'Years Experience' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-charcoal-900 mb-6">
            Client{' '}
            <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Real feedback from real clients who trusted me with their projects. 
            Their success is my greatest achievement.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-poppins bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-charcoal-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg hover-lift transition-all duration-300 border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-charcoal-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Project Tag */}
              <div className="mb-4">
                <span className="bg-gradient-to-r from-teal-100 to-violet-100 text-charcoal-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-charcoal-900">{testimonial.name}</div>
                  <div className="text-charcoal-600 text-sm">{testimonial.role}</div>
                  <div className="text-charcoal-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-charcoal-600 mb-6 max-w-2xl mx-auto">
            From startups to established businesses, I've helped clients across industries 
            achieve their digital transformation goals. Your project could be next!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-teal-600 to-violet-600 text-white px-8 py-3 rounded-full hover:from-teal-700 hover:to-violet-700 transition-all duration-200 font-semibold"
            >
              Start Your Success Story
            </a>
            <a
              href="#work"
              className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 font-semibold"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
