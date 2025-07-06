import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Code, Coffee, Instagram} from 'lucide-react';
// import { Link as ScrollLink } from 'react-scroll';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/devteotia1511' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/dev-teotia-62297928b/' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/devteotia_1511' },
    { name: 'Email', icon: Mail, href: 'mailto:devteotia1511@gmail.com' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="h-auto bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-8 h-8 text-primary-600" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    Dev Teotia
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md font-mono">
                  Full-Stack Developer passionate about creating digital experiences that combine 
                  beautiful design with powerful functionality. Let's build something amazing together.
                </p>
              </motion.div>
            </div>

            {/* Social Links moved to right side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-end"
            >
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-12 h-12 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Visit ${social.name}`}
                    >
                      <IconComponent 
                        size={20} 
                        className="sm:w-6 sm:h-6 hover:text-blue-600 dark:hover:text-white transition-colors duration-300" 
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center text-gray-600 dark:text-gray-300 text-sm sm:text-base"
            >
              <span>© {currentYear} Dev Teotia. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600 mx-1" />
            </motion.div>

            {/* Back to Top */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={handleScrollToTop}
                className="cursor-pointer flex items-center justify-center sm:justify-start space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg px-4 py-3 sm:px-3 sm:py-2 min-h-[44px] w-full sm:w-auto text-sm font-medium shadow-sm hover:shadow-md"
                aria-label="Back to top of page"
              >
                <span>Inspired ✨</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-2 border-t border-gray-100 dark:border-dark-800"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 px-4">
            "Code is poetry written in logic" - Built with React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;