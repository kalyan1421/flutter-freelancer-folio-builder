
import React from 'react';
import { ArrowDown, Code, Users, Calendar } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInUp">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto lg:mx-0 bg-gradient-to-br from-teal-400 to-violet-500 rounded-full flex items-center justify-center text-white text-4xl font-bold font-poppins shadow-2xl">
                K
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-charcoal-900 mb-6 text-center lg:text-left">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
                Kalyan
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-charcoal-700 mb-8 text-center lg:text-left leading-relaxed">
              Flutter & Full-Stack Developer
            </h2>

            {/* Description */}
            <p className="text-lg text-charcoal-600 mb-10 text-center lg:text-left leading-relaxed">
              Crafting Android, iOS & Web apps with beautiful design and scalable code. 
              I turn ideas into reality with modern technology and great user experiences.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Calendar className="text-teal-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-charcoal-900">1.5+</span>
                </div>
                <p className="text-sm text-charcoal-600">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Code className="text-violet-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-charcoal-900">12+</span>
                </div>
                <p className="text-sm text-charcoal-600">Projects Completed</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="text-teal-600 mr-2" size={20} />
                  <span className="text-2xl font-bold text-charcoal-900">100%</span>
                </div>
                <p className="text-sm text-charcoal-600">Client Satisfaction</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
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
          </div>

          {/* Right Content - Code Editor Visual */}
          <div className="hidden lg:block">
            <div className="bg-charcoal-900 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">main.dart</span>
              </div>
              <div className="text-sm font-mono space-y-2">
                <div className="text-purple-400">import <span className="text-green-400">'package:flutter/material.dart'</span>;</div>
                <div className="text-blue-400">class <span className="text-yellow-400">MyApp</span> extends <span className="text-yellow-400">StatelessWidget</span> {</div>
                <div className="text-gray-300 ml-4">@override</div>
                <div className="text-blue-400 ml-4">Widget <span className="text-yellow-400">build</span>(BuildContext context) {</div>
                <div className="text-gray-300 ml-8">return <span className="text-yellow-400">MaterialApp</span>(</div>
                <div className="text-gray-300 ml-12">title: <span className="text-green-400">'Amazing App'</span>,</div>
                <div className="text-gray-300 ml-12">theme: <span className="text-yellow-400">ThemeData</span>(</div>
                <div className="text-gray-300 ml-16">primarySwatch: Colors.teal,</div>
                <div className="text-gray-300 ml-12">),</div>
                <div className="text-gray-300 ml-12">home: <span className="text-yellow-400">HomePage</span>(),</div>
                <div className="text-gray-300 ml-8">);</div>
                <div className="text-gray-300 ml-4">}</div>
                <div className="text-blue-400">}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-charcoal-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
