import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, Calendar, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Led development of responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences.',
      achievements: [
        'Increased application performance by 40%',
        'Mentored 3 junior developers',
        'Led migration to TypeScript'
      ],
      icon: Building,
      color: 'from-green-500 to-green-700'
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2021 - 2022',
      description: 'Developed and maintained full-stack applications using React, Node.js, and MongoDB. Implemented RESTful APIs and database optimization.',
      achievements: [
        'Built 5+ production applications',
        'Reduced server response time by 60%',
        'Implemented CI/CD pipelines'
      ],
      icon: Building,
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      period: '2017 - 2021',
      description: 'Graduated Magna Cum Laude with focus on Software Engineering and Web Development. Active member of Computer Science Society.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List 6 semesters',
        'Led student coding bootcamp'
      ],
      icon: GraduationCap,
      color: 'from-teal-500 to-teal-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
            My <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of my educational background and professional experience in software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500 transform md:-translate-x-0.5" />

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-16 ${
                  isEven ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-black ${
                  isEven ? 'left-6 md:right-0 md:left-auto md:-mr-2' : 'left-6 md:-ml-2'
                } top-8`} />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`ml-16 md:ml-0 group ${isEven ? 'md:mr-8' : ''}`}
                >
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 group-hover:border-green-500/30">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${exp.color}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 font-montserrat">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-green-600 dark:text-green-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-900 dark:text-white font-medium">
                        <Award className="w-4 h-4 mr-2 text-green-600" />
                        <span>Key Achievements</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;