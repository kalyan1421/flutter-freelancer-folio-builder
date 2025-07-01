
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const milestones = [
    {
      year: '2020-2023',
      title: 'College Journey',
      description: 'Developed passion for Android/iOS and UI/UX at Sathyabhama University, Chennai. Built several class projects and discovered my love for creating apps.'
    },
    {
      year: '2023',
      title: 'Graduation & Launch',
      description: 'Earned B.Tech degree and immediately dove into freelance work. Started building real-world solutions for clients.'
    },
    {
      year: '2023-Present',
      title: 'Freelance Success',
      description: 'Completed 12+ client projects including mobile apps and websites using Flutter, Firebase, AWS, and Supabase. Built everything from food delivery to billing systems.'
    }
  ];

  const highlights = [
    'Full-stack development expertise',
    'UI/UX design with 15+ designs',
    'Cross-platform mobile development',
    'AI integration and modern tech',
    'Stock market enthusiast',
    'Continuous learner'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-charcoal-900 mb-6">
            My Story: From College Passion to{' '}
            <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
              Client Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                I'm a <span className="text-teal-600 font-semibold">Flutter developer</span>, designer, and 
                full-stack builder who started creating apps in my 2nd year at{' '}
                <span className="text-violet-600 font-semibold">Sathyabhama University, Chennai</span>, 
                and turned that passion into a full-time freelancing journey.
              </p>
              
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Since graduating in <span className="text-teal-600 font-semibold">2023</span>, I've worked on{' '}
                <span className="text-violet-600 font-semibold">12+ freelance projects</span> — from recharge and 
                food delivery apps to laundry and retail billing — always focused on performance, usability, and 
                solving real-world problems.
              </p>
              
              <p className="text-lg text-charcoal-700 leading-relaxed">
                I love exploring new technologies, leveraging AI in my builds, and bridging front-end design with 
                full-stack scalability. I'm also an active learner and a part-time{' '}
                <span className="text-teal-600 font-semibold">stock market enthusiast</span>.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-violet-50 p-6 rounded-xl">
              <p className="text-xl font-semibold text-charcoal-800 mb-4">
                Now, I'm eager to bring ideas to life — yours could be next.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="text-teal-600 flex-shrink-0" size={16} />
                    <span className="text-charcoal-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-poppins text-charcoal-900 mb-8">My Journey</h3>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-2 top-8 w-0.5 h-16 bg-gradient-to-b from-teal-600 to-violet-600"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-teal-600 to-violet-600 rounded-full"></div>
                
                {/* Content */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover-lift hover:border-teal-200 transition-all duration-300">
                  <div className="text-sm font-semibold text-teal-600 mb-1">{milestone.year}</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">{milestone.title}</h4>
                  <p className="text-charcoal-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
