import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Star } from 'lucide-react';

const Projects: React.FC = () => {
  interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    detailedDescription: string;
    image: string;
    tech: string[];
    githubUrl: string;
    liveUrl: string;
    featured: boolean;
    status: string;
  }
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Employee Task Management System',
      category: 'Web Apps',
      description: 'A web app that helps managers assign and track tasks while enabling employees to update progress—improving productivity, accountability, and team collaboration.',
      detailedDescription: 'Employee Task Management System is a web-based application designed to help organizations assign, track, and manage employee tasks efficiently. It allows managers to create tasks, set deadlines, assign them to employees, and monitor progress. Employees can view their assigned tasks, update status, and communicate any issues. The system improves productivity, accountability, and transparency within teams. Admin Credentials -> email: ETMS@admin.com, password: 1234567890',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'JavaScript', 'Spline', 'Tailwind CSS', 'ShadCN'],
      githubUrl: 'https://github.com/devteotia1511/ETMS.git',
      liveUrl: 'https://dtetms.vercel.app/',
      featured: true,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Consistency Tracker App',
      category: 'Web Apps',
      description: 'A simple app to build and track daily Schedules, helping you stay consistent and achieve your goals',
      detailedDescription: 'BeConsistent is a simple web app that helps users plan and track their daily schedules. It’s designed to encourage consistency, improve productivity, and make it easier to stay focused on personal and professional goals.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next', 'TypeScript', 'Tailwind CSS', 'Firebase', 'MongoDB'],
      githubUrl: 'https://github.com/devteotia1511/beconsistent.git',
      liveUrl: 'https://bconsistent.netlify.app/',
      featured: false,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Brand Business Dashboard',
      category: 'Web Apps',
      description: 'Brand Business Dashboard provides a sleek interface for tracking sales, performance metrics, and customer insights—empowering brands to make data-driven decisions and visualize growth at a glance.',
      detailedDescription: 'This Initiative is a web-based Brand Business Dashboard designed to unify critical business data in one place. It offers customizable visualizations for performance metrics, intuitive sales tracking, and customer behavior insights. With real-time updates and easy navigation, brands can monitor growth trends, identify opportunities, and streamline decision-making—all through a clean, responsive interface tailored for both managers and stakeholders. Credentials:- Email: business@name.com, Password: 12345',
      image: 'https://strapi.biuwer.com/uploads/biuwer_full_internet_sales_dashboard_f861cc9693.png',
      tech: ['Next.js', 'JavaScript', 'CSS', 'Tailwind CSS', 'Node.js/npm'],
      githubUrl: 'https://github.com/devteotia1511/Parksmartproject1.git',
      liveUrl: 'https://parksmartprojectnew.netlify.app/login',
      featured: true,
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Automation_IG',
      category: 'Tools',
      description: 'Automation_IG is a Python-based system that auto-posts Instagram Reels every 20 minutes, generating captions and thumbnails—for content creators and marketers seeking hands-off content scheduling.',
      detailedDescription: 'Automation_IG automates the posting of Instagram Reels using Python and Meta’s Graph API. Every 20 minutes it uploads a reel from local storage, auto-generates thumbnails and captions, and handles everything via a scheduler without manual intervention. It’s ideal for content creators and marketing pages aiming to keep their feed fresh, consistent, and engaging while minimizing effort.',
      image: 'https://www.interakt.shop/wp-content/uploads/2025/02/How-to-Automate-Your-Instagram-Strategy-Without-Violating-Rules.png',
      tech: ['Python', 'Meta Graph API', 'Scheduler/Cron/Time Module', 'OS & File Handling'],
      githubUrl: 'https://github.com/devteotia1511/Automation_IG.git',
      liveUrl: 'https://github.com/devteotia1511/Automation_IG.git',
      featured: true,
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Video Cutter',
      category: 'Tools',
      description: 'A tool to quickly cut long videos into short clips for easy sharing.',
      detailedDescription: 'A Python-based video shortener that automatically splits long videos into customizable clips (e.g. 30–40 seconds), making it easy for creators to repurpose content for Instagram Reels, YouTube Shorts, and more.',
      image: 'https://www.adoreshare.com/images/products/key-feature/quick-video-cutter/key-1.jpg',
      tech: ['HTML', 'Python', 'Flask', 'JavaScript', 'CSS', 'File System'],
      githubUrl: 'https://github.com/devteotia1511/Video_Cutter.git',
      liveUrl: 'https://github.com/devteotia1511/Video_Cutter.git',
      featured: false,
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Parking-spots',
      category: 'Web Apps',
      description: 'Parking-Spots is a Next.js app tracking available parking slots via a dynamic UI. Users can view spot availability in real-time and manage reservations seamlessly.',
      detailedDescription: 'Parking-Spots is a responsive web application built with Next.js, TypeScript, and Tailwind CSS. It visualizes parking space availability, offers a clean interface to monitor open and occupied spots, and enables users to reserve or free spots in real time. Designed for parking management in residential or commercial areas, it simplifies allocation and improves efficiency.',
      image: 'https://images.squarespace-cdn.com/content/v1/54f7c017e4b0ceb22a706c44/1470743704404-IMZ4NYOPO3JYKGRL5L3A/ke17ZwdGBToddI8pDm48kDzr_xzGYealx4kUY43NSpcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcH-p8aITKm1gTVLW7iMqFdoYAMjsuZ3UqButZ8HFhBcAFoboque91MA4BQJN416vk/image-asset.jpeg?format=original',
      tech: ['Next.js', 'Typescript', 'CSS', 'Tailwind CSS', 'Filters'],
      githubUrl: 'https://github.com/devteotia1511/Parking-Spots.git',
      liveUrl: 'https://parking-spots.netlify.app',
      featured: false,
      status: 'Completed'
    },
    {
      id: 7,
      title: 'Code Generator CLI',
      category: 'Tools', 
      description: 'Command-line tool for generating boilerplate code',
      detailedDescription: 'Developer productivity tool that generates boilerplate code for various frameworks and libraries. Features template customization, project scaffolding, and integration with popular development workflows.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Node.js', 'Commander.js', 'Inquirer', 'Templates', 'Express.js', 'Figlet'],
      githubUrl: 'https://github.com/devteotia1511/CODEGEN_CLI.git',
      liveUrl: 'https://github.com/devteotia1511/CODEGEN_CLI.git',
      featured: false,
      status: 'In Progress'
    },
    {
      id: 8,
      title: 'Synced-Products',
      category: 'Web Apps',
      description: 'Synced-Products is a Next.js web app with Myntra-style filters, product search, cart options, and a Todo page. It also shows random news via API.',
      detailedDescription: 'Synced-Products is a feature-rich Next.js application that mimics an e-commerce experience. It offers product exploration with advanced filters (brand, price, color, discount), search functionality, and cart actions. Alongside the shopping interface, it includes a Todo page to manage tasks and displays random news fetched from an API. The responsive design ensures a smooth experience across devices.',
      image: 'https://paid.com/wp-content/uploads/2024/10/AdobeStock_234707797-scaled.jpeg',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration', 'Zustand/State Management'],
      githubUrl: 'https://github.com/devteotia1511/CODEGEN_CLI.git',
      liveUrl: 'https://synced-products.vercel.app',
      featured: false,
      status: 'Completed'
    },
    {
      id: 9,
      title: 'Practice Projects',
      category: 'Web Apps',
      description: 'Practice projects to improve my skills',
      detailedDescription: 'Collection of Projects like Color Game, Display cards, Survey Forms, BMI Calculator, Guess The Number Game, Task Reminder, etc.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QfBJtdpF77K-Ga3S5LcN-KQUI6Dp2kWOFA&s',
      tech: ['HTML', 'CSS', 'JS'],
      githubUrl: 'https://github.com/devteotia1511/Practice_projects.git',
      liveUrl: 'https://dtpractice-projects.vercel.app/',
      featured: false,
      status: 'Completed'
    }
  ];

  const filteredProjects = projects;

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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work in web development, mobile apps, and software tools.
          </p>
        </motion.div>

        <motion.div
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
                    <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-2 rounded-2xl">
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
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