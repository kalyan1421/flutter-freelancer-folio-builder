
import React from 'react';
import { Check, Award, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  const milestones = [
    {
      year: '2020-2023',
      title: 'College Journey',
      description: 'Developed passion for Android/iOS and UI/UX at Sathyabhama University, Chennai. Built several class projects and discovered my love for creating apps.',
      icon: '🎓'
    },
    {
      year: '2023',
      title: 'Graduation & Launch',
      description: 'Earned B.Tech degree and immediately dove into freelance work. Started building real-world solutions for clients.',
      icon: '🚀'
    },
    {
      year: '2023-Present',
      title: 'Freelance Success',
      description: 'Completed 12+ client projects including mobile apps and websites using Flutter, Firebase, AWS, and Supabase. Built everything from food delivery to billing systems.',
      icon: '💼'
    }
  ];

  const highlights = [
    { icon: <Award className="text-teal-600" size={16} />, text: 'Full-stack development expertise' },
    { icon: <Target className="text-violet-600" size={16} />, text: 'UI/UX design with 15+ designs' },
    { icon: <Check className="text-teal-600" size={16} />, text: 'Cross-platform mobile development' },
    { icon: <Heart className="text-violet-600" size={16} />, text: 'AI integration and modern tech' },
    { icon: <Award className="text-teal-600" size={16} />, text: 'Stock market enthusiast' },
    { icon: <Target className="text-violet-600" size={16} />, text: 'Continuous learner' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-charcoal-900 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            From college passion to professional success - here's my journey in tech
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-violet-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Personal Story */}
          <div>
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-teal-50 to-violet-50 p-8 rounded-2xl mb-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-violet-500 rounded-full flex items-center justify-center text-white text-2xl font-bold font-poppins mr-4">
                  K
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-charcoal-900">Kalyan Kumar</h3>
                  <p className="text-teal-600 font-semibold">Flutter & Full-Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-charcoal-700">
                <p className="leading-relaxed">
                  I'm a passionate developer who discovered the world of mobile and web development during my second year at 
                  <span className="text-violet-600 font-semibold"> Sathyabhama University, Chennai</span>. 
                  What started as curiosity turned into a full-time career.
                </p>
                
                <p className="leading-relaxed">
                  Since graduating in <span className="text-teal-600 font-semibold">2023</span>, I've successfully completed 
                  <span className="text-violet-600 font-semibold"> 12+ freelance projects</span>, ranging from mobile apps 
                  to full-stack web solutions, always focusing on performance and user experience.
                </p>
                
                <p className="leading-relaxed">
                  Beyond coding, I'm passionate about exploring new technologies, integrating AI into my projects, 
                  and studying the <span className="text-teal-600 font-semibold">stock market</span> in my free time.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-charcoal-900 mb-4">What I Bring to the Table</h4>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {highlight.icon}
                    <span className="text-charcoal-700 text-sm">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <h3 className="text-2xl font-bold font-poppins text-charcoal-900 mb-8">My Journey</h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline line */}
                  {index !== milestones.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-teal-600 to-violet-600"></div>
                  )}
                  
                  {/* Timeline dot with icon */}
                  <div className="absolute left-0 top-2 w-12 h-12 bg-white border-4 border-teal-600 rounded-full flex items-center justify-center text-xl shadow-lg">
                    {milestone.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover-lift hover:border-teal-200 transition-all duration-300">
                    <div className="text-sm font-semibold text-teal-600 mb-1">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-charcoal-900 mb-3">{milestone.title}</h4>
                    <p className="text-charcoal-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-teal-600 to-violet-600 text-white p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-2">Ready to work together?</h4>
              <p className="mb-4 opacity-90">Let's bring your ideas to life with modern technology</p>
              <a
                href="#contact"
                className="inline-block bg-white text-teal-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
