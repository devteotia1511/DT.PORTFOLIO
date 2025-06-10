import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, ExternalLink, Printer } from 'lucide-react';

const Resume: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const resumeData = {
    lastUpdated: 'January 2024',
    fileSize: '2.4 MB',
    format: 'PDF',
    sections: [
      'Professional Summary',
      'Work Experience',
      'Education',
      'Technical Skills',
      'Projects',
      'Certifications',
      'Languages'
    ]
  };

  const downloadFormats = [
    { format: 'PDF', icon: FileText, description: 'Best for applications', size: '2.4 MB' },
    { format: 'Word', icon: FileText, description: 'Editable format', size: '1.8 MB' },
    { format: 'Plain Text', icon: FileText, description: 'ATS-friendly', size: '0.5 MB' }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume & <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">CV</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-dark-700">
              {/* Resume Preview Image */}
              <div className="relative mb-6">
                <div className="aspect-[3/4] bg-white dark:bg-dark-900 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 overflow-hidden">
                  {/* Simulated Resume Content */}
                  <div className="p-6 space-y-4">
                    <div className="h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded" />
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded w-3/4" />
                      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded w-1/2" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-400 dark:bg-dark-500 rounded w-2/3" />
                      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded" />
                      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded w-5/6" />
                      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded w-3/4" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-400 dark:bg-dark-500 rounded w-1/2" />
                      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded w-4/5" />
                      <div className="h-3 bg-gray-300 dark:bg-dark-600 rounded w-2/3" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-3 bg-primary-300 dark:bg-primary-700 rounded" />
                      <div className="h-3 bg-secondary-300 dark:bg-secondary-700 rounded" />
                      <div className="h-3 bg-accent-300 dark:bg-accent-700 rounded" />
                      <div className="h-3 bg-primary-300 dark:bg-primary-700 rounded" />
                    </div>
                  </div>
                </div>

                {/* Preview Overlay */}
                <motion.button
                  onClick={() => setIsPreviewOpen(true)}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center text-white">
                    <Eye className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-lg font-medium">Preview Resume</span>
                  </div>
                </motion.button>
              </div>

              {/* Resume Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Last Updated: {resumeData.lastUpdated}</span>
                  <span>{resumeData.format} • {resumeData.fileSize}</span>
                </div>

                {/* Sections List */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Includes:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {resumeData.sections.map((section, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                        {section}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Download Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Choose your preferred format. All versions contain the same comprehensive information 
                about my experience and qualifications.
              </p>

              {/* Download Format Options */}
              <div className="space-y-4">
                {downloadFormats.map((format, index) => {
                  const IconComponent = format.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {format.format} Format
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {format.description} • {format.size}
                              </p>
                            </div>
                          </div>
                          <Download className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Quick Actions
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </motion.button>
                
                <motion.button
                  onClick={() => setIsPreviewOpen(true)}
                  className="flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-xl font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview
                </motion.button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <button className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Printer className="w-4 h-4 mr-1" />
                  Print
                </button>
                <button className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Share Link
                </button>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Interested in Working Together?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Let's discuss how my skills and experience can contribute to your team's success.
              </p>
              <motion.button
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                whileHover={{ x: 5 }}
              >
                Contact Me →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Resume Preview Modal */}
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200 dark:border-dark-700 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Resume Preview
                </h3>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6 h-96 bg-gray-50 dark:bg-dark-800 flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <FileText className="w-16 h-16 mx-auto mb-4" />
                  <p>Resume preview would be displayed here</p>
                  <p className="text-sm mt-2">PDF viewer integration would show the actual resume</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Resume;