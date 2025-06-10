import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Lightbulb, Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      icon: Code,
      title: "Technical Skills",
      description: "Passionate about modern web technologies including React, TypeScript, Node.js, and cloud platforms. Always learning and adapting to new frameworks.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Heart,
      title: "Interests & Hobbies", 
      description: "When not coding, I enjoy photography, hiking, reading tech blogs, and contributing to open-source projects. I believe in work-life balance.",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: Lightbulb,
      title: "Background & Vision",
      description: "Computer Science graduate with 3+ years of experience building scalable web applications. My goal is to create digital solutions that make a real impact.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "I approach challenges methodically, breaking down complex problems into manageable solutions while maintaining code quality and performance.",
      color: "from-purple-700 to-purple-800"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong believer in teamwork and knowledge sharing. I enjoy mentoring junior developers and contributing to team success.",
      color: "from-pink-600 to-purple-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always exploring emerging technologies and best practices. I'm passionate about creating efficient, scalable, and user-friendly applications.",
      color: "from-pink-700 to-purple-700"
    }
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves creating digital experiences that combine 
            beautiful design with powerful functionality. Here's what drives me.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-purple-500/30 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.color} mb-6`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-montserrat">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1+", label: "Years Experience" },
              { number: "25+", label: "Projects Completed" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 font-montserrat">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;