
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100">
              <img 
                src="/lovable-uploads/4a551fe1-c970-4cc4-995d-89df8a8800ab.png"
                alt="Raju Bathini"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Raju Bathini
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-4">
            Full Stack Developer
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            AI Enthusiast | Prompt Engineering Learner | Problem Solver
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Rajufhh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/raju-bathini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:rajubathini83@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
