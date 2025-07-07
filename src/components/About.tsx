
import React from 'react';
import { MapPin, Code, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with strong expertise in Python, Java, SQL, JavaScript, TypeScript, and MongoDB. My journey in technology is driven by a deep curiosity for solving real-world problems through innovative solutions.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With a growing interest in AI and prompt engineering, I'm constantly exploring how emerging technologies can be leveraged to create more efficient and intelligent applications. I believe in writing clean, maintainable code and building user-centric solutions.
            </p>
            
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="text-blue-600" size={20} />
              <span>Hyderabad, Telangana, India</span>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What drives me:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Code className="text-blue-600" size={24} />
                  <span className="text-gray-700 font-medium">Clean Code</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
                  <Brain className="text-indigo-600" size={24} />
                  <span className="text-gray-700 font-medium">AI Innovation</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <Zap className="text-purple-600" size={24} />
                  <span className="text-gray-700 font-medium">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:text-center">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Programming Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                  <div className="text-gray-600">Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">∞</div>
                  <div className="text-gray-600">Learning Mindset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
