
import React from 'react';
import { Github, ExternalLink, Eye, Users, Brain, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "An intelligent attendance system using computer vision to recognize faces and automatically log attendance. Built with Flask, OpenCV, and SQLite for seamless integration.",
      technologies: ["Python", "Flask", "OpenCV", "SQLite", "KNN Algorithm"],
      features: [
        "Real-time face detection and recognition",
        "Automated attendance logging",
        "Admin dashboard for attendance management",
        "Secure data storage with SQLite"
      ],
      githubUrl: "https://github.com/Rajufhh",
      icon: <Eye className="text-blue-600" size={24} />,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Feedback Management System",
      description: "A comprehensive web application for collecting and managing user feedback with advanced rating systems and secure authentication mechanisms.",
      technologies: ["Python", "Flask", "HTML/CSS", "JavaScript", "Database"],
      features: [
        "User authentication and authorization",
        "Dynamic rating and feedback system",
        "Admin dashboard with analytics",
        "Responsive web design"
      ],
      githubUrl: "https://github.com/Rajufhh",
      icon: <Users className="text-green-600" size={24} />,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "AI Prompt Engineering Projects",
      description: "Collection of projects exploring GPT-based solutions and prompt engineering techniques for various real-world applications and learning experiments.",
      technologies: ["Python", "OpenAI API", "Prompt Engineering", "AI/ML"],
      features: [
        "GPT integration and optimization",
        "Custom prompt templates",
        "AI-powered automation tools",
        "Learning documentation and examples"
      ],
      githubUrl: "https://github.com/Rajufhh",
      icon: <Brain className="text-purple-600" size={24} />,
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <Shield size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/Rajufhh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
