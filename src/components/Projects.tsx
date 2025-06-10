import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X, Play, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Web Apps', 'Mobile', 'APIs', 'Tools'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      description: 'Full-stack e-commerce platform with React, Node.js, and Stripe integration',
      detailedDescription: 'A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. Built with modern web technologies ensuring scalability and performance.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web Apps',
      description: 'Collaborative task management application with real-time updates',
      detailedDescription: 'A powerful task management tool designed for teams with features like real-time collaboration, drag-and-drop task organization, deadline tracking, file attachments, and detailed analytics. Includes mobile-responsive design and offline capabilities.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      category: 'Mobile',
      description: 'Cross-platform weather app with location-based forecasts',
      detailedDescription: 'Native mobile application providing accurate weather forecasts with geolocation services, interactive maps, weather alerts, and beautiful UI animations. Features offline data caching and multiple location support.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Redux', 'Weather API', 'Maps'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      status: 'Completed'
    },
    {
      id: 4,
      title: 'REST API Gateway',
      category: 'APIs',
      description: 'Scalable API gateway with authentication and rate limiting',
      detailedDescription: 'Enterprise-grade API gateway solution with JWT authentication, rate limiting, request/response transformation, API versioning, monitoring, and comprehensive logging. Built for high-traffic applications with microservices architecture.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Code Generator CLI',
      category: 'Tools', 
      description: 'Command-line tool for generating boilerplate code',
      detailedDescription: 'Developer productivity tool that generates boilerplate code for various frameworks and libraries. Features template customization, project scaffolding, and integration with popular development workflows.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Node.js', 'Commander.js', 'Inquirer', 'Templates'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      category: 'Web Apps',
      description: 'Analytics dashboard for social media management',
      detailedDescription: 'Comprehensive social media management platform with multi-platform integration, content scheduling, analytics reporting, engagement tracking, and team collaboration features. Includes real-time notifications and customizable dashboards.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'D3.js', 'Express', 'PostgreSQL', 'Social APIs'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      status: 'Completed'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work in web development, mobile apps, and software tools.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-900 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-dark-600 hover:border-orange-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 z-0" />
              
              <div className="relative bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 group-hover:border-orange-500/30 z-10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {project.status}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  )}

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-5 h-5" />
                      </motion.button>
                      <motion.a
                        href={project.githubUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/30 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Project Image */}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />

                  {/* Project Details */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {selectedProject.title}
                        </h3>
                        <span className="text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                          {selectedProject.category}
                        </span>
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={selectedProject.githubUrl}
                          className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={selectedProject.liveUrl}
                          className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                      {selectedProject.detailedDescription}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="text-sm font-medium bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;