import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Palette, Server, Smartphone, PenTool as Tool, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
        { name: 'Sass/SCSS', level: 88 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-rose-500 to-rose-600',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 93 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'MongoDB', level: 87 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Firebase', level: 90 },
        { name: 'Docker', level: 75 }
      ]
    },
    {
      title: 'Design & Editing',
      icon: Palette,
      color: 'from-rose-600 to-pink-500',
      skills: [
        { name: 'Canva', level: 80 },
        { name: 'Figma', level: 40 },
        { name: 'Prototyping', level: 88 },
        { name: 'Davinci Resolve', level: 75 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Tool,
      color: 'from-pink-600 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Webpack/Vite', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Testing', level: 82 }
      ]
    }
  ];

  const topSkills = [
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
    { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 85, color: 'from-green-600 to-blue-600' },
    { name: 'CSS/Tailwind', level: 92, color: 'from-purple-400 to-purple-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My expertise spans across modern web technologies, from frontend frameworks to cloud platforms.
          </p>
        </motion.div>

        {/* Top Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                  <motion.div
                    className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 h-full border border-gray-200 dark:border-dark-700 hover:border-red-500/30 transition-all duration-300 group-hover:shadow-xl">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              ease: "easeOut", 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
            <Zap className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              Web3 technologies, AI/ML integration, and advanced performance optimization techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;