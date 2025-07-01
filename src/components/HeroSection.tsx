
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-violet-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-teal-300 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-violet-200 rounded-full opacity-20 animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center z-10">
        <div className="animate-fadeInUp">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-400 to-violet-500 rounded-full flex items-center justify-center text-white text-4xl font-bold font-poppins shadow-2xl">
              K
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-charcoal-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
              Kalyan
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-charcoal-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Flutter & Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Crafting Android, iOS & Web apps with beautiful design and scalable code. 
            I turn ideas into reality with <span className="text-teal-600 font-semibold">1.5 years</span> of freelancing experience 
            and <span className="text-violet-600 font-semibold">12+ successful projects</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's Work Together
            </a>
            <a
              href="#work"
              className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              View My Work
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-charcoal-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
