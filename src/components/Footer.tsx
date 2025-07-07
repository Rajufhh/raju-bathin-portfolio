
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Raju Bathini</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating innovative solutions and continuous learning.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Rajufhh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/raju-bathini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rajubathini83@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Raju Bathini. Made with <Heart size={16} className="text-red-500" /> and lots of code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
