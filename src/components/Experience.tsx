import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, Calendar, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Frontend Developer Intern',
      company: 'ParKSmart Technologies Pvt. Ltd.',
      period: 'July 2025 - Present',
      description: 'Spearheaded the creation of an intuitive admin panel for smart parking systems, leveraging React and TypeScript to build dynamic dashboards and streamline user management. Actively collaborated across teams to deliver responsive, data driven interfaces aligned with real-time operational needs.',
      achievements: [
        'Revamped mobile layouts and ensured WCAG-compliant accessibility for an inclusive user experience',
        'Optimized component rendering, resulting in smoother UI interactions',
        'Integrated third-party APIs to enhance user functionality and data visualization',
        'Led migration to TypeScript'
      ],
      icon: Building,
      color: 'from-green-500 to-green-700'
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'Samvaad Theatre & Film Group',
      period: 'Sept 2024 - Feb 2025',
      description: 'Engineered custom digital solutions to support theatrical and film initiatives, focusing on automating registration flows, project tracking, and media coordination. Delivered reliable full-stack systems that enhanced collaboration across departments using modern web technologies.',
      achievements: [
        'Created a robust event and content management system for cross-functional teams',
        'Streamlined project timelines and asset sharing through a unified platform',
        'Improved registration and scheduling efficiency for multiple productions'
      ],
      icon: Building,
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science.',
      company: 'ABES Engineering College',
      period: '2022 - 2026',
      description: "Pursuing a Bachelor's degree in Computer Science with a strong emphasis on Software Engineering and Web Development. Actively involved in technical communities and student-led initiatives.",
      achievements: [
        'CGPA: 7.3',
        'Main Lead of the finest & Artistic socity at ABESEC',
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