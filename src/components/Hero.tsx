import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from 'tsparticles-engine';
import ReactTypingEffect from 'react-typing-effect';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    return await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Particles loaded callback
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Particles Background */}
      <Particles
        id="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: { enable: true },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#333333",
            },
            links: {
              color: "#333333",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-gray-900/20 dark:from-black/30 dark:to-gray-900/40" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Body Cutout Illustration (40%) */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Profile Image with Cutout Effect */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem]">
                {/* Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-secondary-900/30 rounded-[3rem] transform rotate-3" />
                
                {/* Image Container with Cutout */}
                <div className="relative w-full h-full overflow-hidden rounded-[3rem] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Professional Portrait"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Transparent Overlay for Cutout Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-black/20" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-800 to-secondary-900 rounded-2xl opacity-80"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-secondary-800 to-primary-900 rounded-xl opacity-60"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content (60%) */}
          <motion.div
            className="lg:col-span-3 text-center lg:text-left space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Greeting */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-2xl italic text-gray-600 dark:text-gray-400 font-medium"
              >
                Hello, I'm
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif leading-tight">
                <ReactTypingEffect
                  text={["Dev Teotia", "a Developer", "a Creator"]}
                  speed={100}
                  eraseSpeed={50}
                  typingDelay={1000}
                  eraseDelay={2000}
                  displayTextRenderer={(text: string) => (
                    <span className="bg-gradient-to-r from-primary-800 via-secondary-900 to-primary-700 bg-clip-text text-transparent bg-200% animate-gradient-shift">
                      {text}
                    </span>
                  )}
                />
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-primary-700 to-secondary-800 bg-clip-text text-transparent">
                  Full-Stack Developer
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Crafting digital experiences with modern technologies. 
                  Passionate about clean code, elegant design, and innovative solutions.
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-primary-800 to-secondary-900 text-white rounded-2xl font-semibold text-lg flex items-center space-x-3 hover:shadow-2xl transition-all duration-300 min-w-[200px] justify-center"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={22} />
                  <span>Get In Touch</span>
                </motion.button>
              </Link>
              
              <motion.a
                href="./Resume_DT.pdf"
                download="Resume_DT.pdf"
                className="px-8 py-4 border-2 border-primary-800 text-primary-800 dark:text-primary-400 dark:border-primary-400 rounded-2xl font-semibold text-lg flex items-center space-x-3 hover:bg-primary-800 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-300 min-w-[200px] justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={22} />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
                {[
                { icon: Github, href: "https://github.com/devteotia1511", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/dev-teotia-62297928b/", label: "LinkedIn", color: "hover:text-blue-600" },
                { icon: Mail, href: "mailto:devteotia1511@gmail.com", label: "Email", color: "hover:text-primary-800" }
                ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;