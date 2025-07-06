import React from 'react';
import { motion } from 'framer-motion';
import { Download} from 'lucide-react';

const ResumeCard: React.FC = () => {
  const resumeData = {
    lastUpdated: 'July 2025',
    fileSize: '191 KB',
    format: 'PDF',
    sections: [
      'Professional Summary',
      'Work Experience',
      'Education',
      'Technical Skills',
      'Projects',
      'Certifications',
      'Languages',
    ],
  };

  return (
    <section
      id="resume"
      className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-primary-500">Resume</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            A quick overview of my professional background.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-dark-700 flex flex-col lg:flex-row gap-8"
        >
          {/* Left Side: Resume Preview Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative mb-6 lg:mb-0">
              <div className="aspect-[3/4] bg-white dark:bg-dark-900 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 overflow-hidden flex items-center justify-center">
                <div className="p-6 h-full flex flex-col items-center justify-start text-center border border-dashed border-gray-300 dark:border-dark-600 space-y-6 w-full">
                  {/* Name Header */}
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white">Dev Teotia</h1>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-4 text-primary-600 dark:text-primary-400">
                    <a href="https://github.com/devteotia1511" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
                        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729
                        1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93
                        0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404
                        2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.429.372.813 1.102.813 2.222
                        0 1.606-.015 2.898-.015 3.293 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/dev-teotia-62297928b/" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11
                        19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75
                        1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761
                        1.381-1.562 2.842-1.562 3.04 0 3.602 2.001 3.602 4.601v5.594z"/>
                      </svg>
                    </a>
                    <a href="mailto:devteotia1511@gmail.com">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896
                        2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/>
                      </svg>
                    </a>
                    {/* <a href="tel:+91 9311031192">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24
                        c1.12.37 2.33.57 3.59.57a1 1 0 011 1v3.5a1 1 0 01-1 1c-10.49 0-19-8.51-19-19a1 1 0 011-1h3.5a1 1 0 011
                        1c0 1.26.2 2.47.57 3.59a1.003 1.003 0 01-.24 1.01l-2.2 2.2z"/>
                      </svg>
                    </a> */}
                  </div>

                  {/* Simulated Sections with lines */}
                  <div className="w-full space-y-4 border-t border-gray-300 pt-4">
                    <div className="h-3 bg-gray-200 dark:bg-dark-600 w-3/4 mx-auto rounded" />
                    <div className="h-3 bg-gray-200 dark:bg-dark-600 w-2/3 mx-auto rounded" />
                    <div className="h-3 bg-gray-200 dark:bg-dark-600 w-5/6 mx-auto rounded" />
                    <div className="h-3 bg-gray-200 dark:bg-dark-600 w-1/2 mx-auto rounded" />
                    <div className="border-t border-dashed border-gray-300 my-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-dark-600 w-2/3 mx-auto rounded" />
                    <div className="h-3 bg-gray-200 dark:bg-dark-600 w-4/5 mx-auto rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Resume Info */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Last Updated: {resumeData.lastUpdated}</span>
              <span>{resumeData.format} • {resumeData.fileSize}</span>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Includes:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {resumeData.sections.map((section, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    {section}
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center items-center">
            <a
              href="/Resume_DT.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 mb-8 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
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
          {/* </motion.div> */}
        {/* </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCard;