
import React from 'react';
import { Award, ExternalLink, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Programming",
      issuer: "HackerRank",
      date: "2024",
      description: "Comprehensive certification covering Java fundamentals, OOP concepts, and advanced programming techniques.",
      badgeColor: "from-orange-400 to-red-500",
      skills: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Exception Handling"]
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      date: "2024",
      description: "Advanced SQL certification demonstrating proficiency in complex queries, database design, and optimization.",
      badgeColor: "from-blue-400 to-indigo-500",
      skills: ["Complex Queries", "Database Design", "Performance Optimization", "Data Analysis"]
    },
    {
      title: "Python Programming",
      issuer: "Cisco & HackerRank",
      date: "2024",
      description: "Dual certification from Cisco and HackerRank covering Python fundamentals and advanced programming concepts.",
      badgeColor: "from-green-400 to-emerald-500",
      skills: ["Python Fundamentals", "Data Structures", "Libraries", "Automation"]
    },
    {
      title: "SmartCoder",
      issuer: "SmartInterviews",
      date: "2024",
      description: "Comprehensive coding certification focusing on problem-solving skills and algorithmic thinking.",
      badgeColor: "from-purple-400 to-pink-500",
      skills: ["Problem Solving", "Algorithms", "Data Structures", "Competitive Programming"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and commitment to continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center shadow-lg`}>
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{cert.issuer}</p>
                      <p className="text-gray-500 text-sm">{cert.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${cert.badgeColor} text-white text-xs rounded-full font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Award size={16} />
                    Verified Certification
                  </span>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <Award className="text-white" size={24} />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4+ Certifications</div>
              <div className="text-gray-600">Continuously expanding my skill set</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
