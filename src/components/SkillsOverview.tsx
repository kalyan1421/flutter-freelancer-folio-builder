
import React from 'react';
import { Code, Smartphone, Globe, Database, Palette, Wrench } from 'lucide-react';

const SkillsOverview = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <Smartphone className="text-blue-500" size={32} />,
      skills: ['Flutter', 'Dart', 'iOS', 'Android'],
      level: 95,
      projects: '8+ mobile apps built'
    },
    {
      title: 'Frontend & Web',
      icon: <Globe className="text-green-500" size={32} />,
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Flutter Web'],
      level: 88,
      projects: '6+ web applications'
    },
    {
      title: 'Backend & APIs',
      icon: <Database className="text-purple-500" size={32} />,
      skills: ['Node.js', 'Express', 'REST APIs', 'Firebase'],
      level: 85,
      projects: '10+ API integrations'
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="text-orange-500" size={32} />,
      skills: ['Firebase', 'Supabase', 'MongoDB', 'AWS S3'],
      level: 87,
      projects: '12+ database implementations'
    },
    {
      title: 'Design & UX',
      icon: <Palette className="text-pink-500" size={32} />,
      skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
      level: 82,
      projects: '15+ designs created'
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="text-gray-600" size={32} />,
      skills: ['Git', 'VS Code', 'Postman', 'AI Tools'],
      level: 90,
      projects: 'Daily workflow tools'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {skillCategories.map((category, index) => (
        <div key={index} className="bg-white border border-gray-200 p-6 rounded-2xl hover-lift hover:border-teal-200 transition-all duration-300 group">
          <div className="text-center mb-4">
            <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            <h3 className="text-lg font-bold text-charcoal-900 mb-2">{category.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className="bg-gradient-to-r from-teal-600 to-violet-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${category.level}%` }}
              ></div>
            </div>
            <div className="text-2xl font-bold text-teal-600 mb-1">{category.level}%</div>
            <p className="text-xs text-charcoal-600 mb-4">{category.projects}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-gray-100 text-charcoal-700 text-xs rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsOverview;
