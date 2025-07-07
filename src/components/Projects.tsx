
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
      gradient: "from-blue-400 to-cyan-500",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
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
      gradient: "from-green-400 to-emerald-500",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
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
      gradient: "from-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-600 flex items-start gap-2">
                        <Shield size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </button>
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
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
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
