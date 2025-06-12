import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Code, Coffee, Instagram} from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: 'Home', to: 'hero' },
      { name: 'About', to: 'about' },
      { name: 'Experience', to: 'experience' },
      { name: 'Projects', to: 'projects' },
    ],
    More: [
      { name: 'Skills', to: 'skills' },
      { name: 'Languages', to: 'languages' },
      { name: 'Resume', to: 'resume' },
      { name: 'Contact', to: 'contact' },
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/devteotia1511', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/dev-teotia-62297928b/', color: 'hover:text-blue-600 dark:hover:text-white' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/devteotia_1511', color: 'hover:text-red-400 dark:hover:text-white' },
    { name: 'Email', icon: Mail, href: 'mailto:devteotia1511@gmail.com', color: 'hover:text-primary-600 dark:hover:text-white' }
  ];

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
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
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                  Full-Stack Developer passionate about creating digital experiences that combine 
                  beautiful design with powerful functionality. Let's build something amazing together.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70} // Adjust offset for sticky headers
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center text-gray-600 dark:text-gray-300"
            >
              <span>© {currentYear} Dev Teotia. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600 mx-1" />
            </motion.div>

            {/* Back to Top */}
            <motion.button
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              
                  <Link
                    key="back-to-top"
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-sm font-medium">Back to Top</span>
                    <ArrowUp className="w-4 h-4" />
                  </Link>
                
            </motion.button>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-4 border-t border-gray-100 dark:border-dark-800"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">
            "Code is poetry written in logic" - Built with React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;