import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Calendar, Download, ExternalLink } from 'lucide-react';

const Languages: React.FC = () => {
  const languages = [
    {
      name: 'Hindi',
      level: 'Native',
      proficiency: 100,
      flag: '🇮🇳',
      description: 'Native speaker with excellent written and verbal communication skills'
    },
    {
      name: 'English',
      level: 'Professional',
      proficiency: 85,
      flag: '🇬🇧',
      description: 'Professional working proficiency, can conduct meetings and presentations'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      status: 'Active',
      description: 'Professional level certification demonstrating expertise in designing distributed systems on AWS',
      credentialId: 'AWS-CSA-2023-001234',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      status: 'Active',
      description: 'Validates skills in building scalable and reliable applications using Google Cloud Platform',
      credentialId: 'GCP-PD-2023-005678',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta (Facebook)',
      date: '2022',
      status: 'Active',
      description: 'Professional certificate covering React, responsive design, and modern development practices',
      credentialId: 'META-FE-2022-009012',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2022',
      status: 'Active',
      description: 'Foundation level understanding of Azure services and cloud computing concepts',
      credentialId: 'AZ-900-2022-003456',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      status: 'Active',
      description: 'Demonstrates skills in Kubernetes cluster administration and container orchestration',
      credentialId: 'CKA-2023-007890',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Deloitte Technology Consulting Virtual Internship',
      issuer: 'Deloitte (Forage)',
      date: '2024',
      status: 'Completed',
      description: 'Completed a virtual internship simulating real consulting scenarios, including client discovery, tech strategy, and solution prototyping.',
      credentialId: 'HPHiavuicEt8YMuyA',
      color: 'from-yellow-500 to-yellow-600'
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

  const itemVariants = {
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
    <section id="languages" className="py-20 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Languages & <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Global communication skills and professional certifications that demonstrate my commitment to excellence.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Languages Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <Globe className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Language Proficiency
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-700 hover:border-primary-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{language.flag}</span>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {language.name}
                        </h4>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {language.level}
                        </span>
                      </div>
                    </div>
                    <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                      {language.proficiency}%
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {language.description}
                  </p>

                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <Award className="w-8 h-8 text-secondary-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Professional Certifications
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-700 hover:border-secondary-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{cert.date}</span>
                        <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                          cert.status === 'Active' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-400'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color}`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* /<div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium">ID:</span> {cert.credentialId}
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Download Certificate"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Verify Certificate"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div> */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I'm constantly expanding my skillset and pursuing new certifications. Currently working on 
              advanced Kubernetes certifications and exploring AI/ML specializations.
            </p>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Credentials
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;