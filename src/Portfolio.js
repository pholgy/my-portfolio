import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, Code, Award, Send, Facebook } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Portfolio = () => {
  // Mouse position state for gradient effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Animation controls for sections
  const aboutControls = useAnimation();
  const projectsControls = useAnimation();
  const skillsControls = useAnimation();
  const contactControls = useAnimation();
  
  // Refs for detecting when sections are in view
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (aboutInView) aboutControls.start('visible');
    if (projectsInView) projectsControls.start('visible');
    if (skillsInView) skillsControls.start('visible');
    if (contactInView) contactControls.start('visible');
  }, [aboutInView, projectsInView, skillsInView, contactInView, aboutControls, projectsControls, skillsControls, contactControls]);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Calculate dynamic gradient based on mouse position
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(75, 85, 99, 0.4) 0%, rgba(31, 41, 55, 0.8) 50%, rgba(17, 24, 39, 0.95) 100%)`,
  };

  // Project data
  const freelanceProjects = [
    { 
      title: "RAG-Enhanced Question-Answering for Thai Traffic Regulations", 
      category: "Natural Language Processing", 
      description: "Implemented a RAG system using LLM fine-tuned with LoRA and QLoRA optimization techniques to answer questions about Thai traffic regulations.",
      github: "https://github.com/pholgy/rag-thai-traffic"
    },
    { 
      title: "Failure Analysis of Composite Materials in Aerospace Structures", 
      category: "Machine Learning", 
      description: "Utilized CTGAN-based machine learning approaches to analyze and predict failures in composite materials used in aerospace structures.",
      github: "https://github.com/pholgy/aerospace-materials-ml"
    },
    { 
      title: "Regression Analysis of Soil Carbon Sequestration", 
      category: "Data Science", 
      description: "Conducted regression analysis on hyperspectral image data to measure and predict soil carbon sequestration rates.",
      github: "https://github.com/pholgy/soil-carbon-analysis"
    },
    { 
      title: "Twitter Influencer Detection", 
      category: "Graph-based ML", 
      description: "Developed a graph-based machine learning system to detect and analyze influencers on Twitter based on network interactions.",
      github: "https://github.com/pholgy/twitter-influence-graph"
    }
  ];

  const selfLearningProjects = [
    { 
      title: "Predicting Suicidal Behavior in Thai Text", 
      category: "NLP & Deep Learning", 
      description: "Applied NLP-based machine learning, deep learning, and BERT models to identify and predict suicidal behavior patterns in Thai text.",
      github: "https://github.com/pholgy/thai-suicide-prediction"
    },
    { 
      title: "Transformer-based Approaches for Multi-dependency Dataset Analysis", 
      category: "Research Study", 
      description: "Conducted a research study exploring transformer-based approaches for analyzing datasets with multiple dependencies.",
      github: "https://github.com/pholgy/transformer-multi-dependency"
    }
  ];
  
  // Data Science & AI skills
  const aiSkills = [
    { name: "Python", level: "Expert" },
    { name: "TensorFlow", level: "Expert" },
    { name: "PyTorch", level: "Advanced" },
    { name: "Pandas", level: "Expert" },
    { name: "NumPy", level: "Expert" },
    { name: "R", level: "Intermediate" },
    { name: "Scala", level: "Beginner" }
  ];
  
  // Web dev skills
  const otherDevSkills = [
    { name: "SQL", level: "Intermediate" },
    { name: "Django", level: "Intermediate" },
    { name: "React/Next.js", level: "Intermediate" },
    { name: "HTML/CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" }
  ];

  // Mobile dev skills
  const mobileDevSkills = [
    { name: "Flutter", level: "Intermediate" },
    { name: "Ionic", level: "Intermediate" },
    { name: "React Native", level: "Intermediate" }
  ];
  
  // Stats
  const stats = [
    { count: "3+", label: "Years Experience" },
    { count: "10+", label: "Projects Completed" },
    { count: "5+", label: "AI Domains" },
    { count: "3", label: "Development Fields" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">PHOLGRIT</span>
            <span className="text-gray-400">ANONGCHAI</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white via-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
              <Link 
                key={item} 
                to={item.toLowerCase()} 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="relative overflow-hidden group"
              >
                <span className="transition duration-300 group-hover:text-white">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black" style={gradientStyle}></div>
        
        {/* Animated particles background */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-blue-500/30"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%"
                ],
                opacity: [
                  Math.random() * 0.5 + 0.3,
                  Math.random() * 0.8 + 0.2,
                  Math.random() * 0.5 + 0.3
                ],
                scale: [1, Math.random() * 1.5 + 0.5, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: Math.random() * 10 + 20, 
                ease: "linear"
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i + 20}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-purple-500/30"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%"
                ],
                opacity: [
                  Math.random() * 0.5 + 0.3,
                  Math.random() * 0.8 + 0.2,
                  Math.random() * 0.5 + 0.3
                ],
                scale: [1, Math.random() * 1.5 + 0.5, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: Math.random() * 10 + 20, 
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <motion.div 
          className="container mx-auto px-6 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3 
            className="text-xl md:text-2xl font-medium mb-2 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello, I'm
          </motion.h3>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Pholgrit Anongchai
          </motion.h1>
          <motion.div
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-300 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Typewriter
              words={['AI/ML Engineer', 'Data Scientist', 'LLM Specialist', 'Full-Stack Developer']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-400 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Specializing in AI/ML solutions across Computer Vision, LLMs, and predictive analytics.
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-40">
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                duration={700}
                className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.a 
              href="/pholgrit_anongchai_cv.pdf"
              download="Pholgrit_Anongchai_CV.pdf"
              className="flex items-center justify-center w-40 px-6 py-3 border border-white/50 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">Download CV</span>
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.a 
              href="https://github.com/pholgy" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/pholgrid/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </motion.a>
            <motion.a 
              href="mailto:pholgridnikolai@gmail.com"
              whileHover={{ y: -5, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/pholgrid.anongchai.5/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900" ref={aboutRef}>
        <motion.div 
          className="container mx-auto px-6"
          variants={fadeInUp}
          initial="hidden"
          animate={aboutControls}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2 h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center overflow-hidden relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutControls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
              <span className="text-gray-400 text-lg relative z-10">Profile Image</span>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutControls}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
              }}
            >
              <h3 className="text-xl font-medium text-gray-400 mb-2">About Me</h3>
              <h2 className="text-4xl font-bold mb-6 relative">
                AI/ML Specialist & Developer
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </h2>
              <p className="text-gray-300 mb-4">
                I'm a passionate AI/ML engineer with over 3 years of freelance experience, specializing in Artificial Intelligence and Large Language Models (LLMs). My work spans across computer vision, forecasting, regression analysis, and natural language processing.
              </p>
              <p className="text-gray-300 mb-6">
                With a strong foundation in both AI research and practical implementation, I develop innovative solutions that tackle complex problems across various domains.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="group transition-all duration-300 hover:bg-white/5 p-2 rounded-md">
                  <h4 className="font-bold group-hover:text-blue-400 transition-colors duration-300">Name</h4>
                  <p className="text-gray-400">Pholgrit Anongchai</p>
                </div>
                <div className="group transition-all duration-300 hover:bg-white/5 p-2 rounded-md">
                  <h4 className="font-bold group-hover:text-blue-400 transition-colors duration-300">Email</h4>
                  <p className="text-gray-400">pholgridnikolai@gmail.com</p>
                </div>
                <div className="group transition-all duration-300 hover:bg-white/5 p-2 rounded-md">
                  <h4 className="font-bold group-hover:text-blue-400 transition-colors duration-300">Education</h4>
                  <p className="text-gray-400">Bachelor's in Data Science</p>
                </div>
                <div className="group transition-all duration-300 hover:bg-white/5 p-2 rounded-md">
                  <h4 className="font-bold group-hover:text-blue-400 transition-colors duration-300">Availability</h4>
                  <p className="text-gray-400">Available for freelance</p>
                </div>
              </div>
              <motion.a 
                href="mailto:pholgridnikolai@gmail.com" 
                className="px-6 py-3 border border-white rounded font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:text-white transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium text-gray-400 mb-2">My Background</h3>
            <h2 className="text-4xl font-bold">Education</h2>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto p-8 border border-white/10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-bold">Bachelor's Degree in Data Science</h3>
              <span className="text-gray-400 px-3 py-1 border border-gray-700 rounded-full text-sm bg-gray-800/50">Present</span>
            </div>
            <p className="text-gray-300 mb-2">Department of Data Science and Software Innovation</p>
            <p className="text-gray-300 mb-4">Faculty of Science</p>
            <p className="text-gray-400">Ubon Ratchathani University</p>
            <p className="text-gray-300 mt-4">Relevant Coursework:</p>
            <ul className="text-gray-400 list-disc pl-5 mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>Machine Learning Algorithms</li>
              <li>Deep Neural Networks</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Time Series Analysis</li>
              <li>Statistical Modeling</li>
              <li>Data Visualization</li>
              <li>Big Data Technologies</li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-bold text-xl mb-3">Academic Achievements</h4>
              <ul className="text-gray-400 list-disc pl-5 space-y-2">
                <li>Research paper on NLP models for detecting suicidal behavior patterns in Thai text with 89% accuracy</li>
                <li>Presented findings at two university symposiums, receiving recognition for innovative methodology</li>
                <li>Developed data visualization dashboards to communicate research findings to non-technical stakeholders</li>
                <li>Collaborated with psychology department to integrate AI systems with clinical assessment tools</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-2 py-1 bg-gray-700 rounded-full">Python</span>
                <span className="text-xs px-2 py-1 bg-gray-700 rounded-full">BERT</span>
                <span className="text-xs px-2 py-1 bg-gray-700 rounded-full">Pandas</span>
                <span className="text-xs px-2 py-1 bg-gray-700 rounded-full">R</span>
                <span className="text-xs px-2 py-1 bg-gray-700 rounded-full">Matplotlib</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900" ref={projectsRef}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            animate={projectsControls}
          >
            <h3 className="text-xl font-medium text-gray-400 mb-3">My Work</h3>
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              Freelance Projects
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg">
              Specialized AI/ML solutions developed for real-world applications
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
            variants={staggerContainer}
            initial="hidden"
            animate={projectsControls}
          >
            {freelanceProjects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="group relative rounded-xl overflow-hidden h-full shadow-lg border border-white/10 hover:border-blue-500/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black z-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 opacity-0 group-hover:from-blue-500/5 group-hover:to-blue-500/0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
                  
                  {/* Top Accent Bar */}
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 w-full"></div>
                  
                  <div className="p-7 flex flex-col h-full relative z-10">
                    <div className="mb-2">
                      <span className="text-sm px-3 py-1 bg-blue-900/30 border border-blue-500/20 rounded-full text-blue-300 font-medium">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mt-3 mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{project.description}</p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                      <span className="text-gray-400 text-sm">AI/ML Project</span>
                      <motion.a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-gray-400 hover:text-white group-hover:text-blue-400 transition-all duration-300 relative"
                        whileHover={{ x: 5 }}
                      >
                        GitHub <ExternalLink className="ml-2 w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            animate={projectsControls}
          >
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              Self-Learning Projects
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg">
              Research and personal projects showcasing my interests in AI/ML
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate={projectsControls}
          >
            {selfLearningProjects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="group relative rounded-xl overflow-hidden h-full shadow-lg border border-white/10 hover:border-purple-500/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black z-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/0 opacity-0 group-hover:from-purple-500/5 group-hover:to-purple-500/0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
                  
                  {/* Top Accent Bar */}
                  <div className="h-1.5 bg-gradient-to-r from-purple-500 to-blue-600 w-full"></div>
                  
                  <div className="p-7 flex flex-col h-full relative z-10">
                    <div className="mb-2">
                      <span className="text-sm px-3 py-1 bg-purple-900/30 border border-purple-500/20 rounded-full text-purple-300 font-medium">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mt-3 mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{project.description}</p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                      <span className="text-gray-400 text-sm">Research Project</span>
                      <motion.a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-gray-400 hover:text-white group-hover:text-purple-400 transition-all duration-300 relative"
                        whileHover={{ x: 5 }}
                      >
                        GitHub <ExternalLink className="ml-2 w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={skillsRef}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={skillsControls}
          >
            <h3 className="text-xl font-medium text-gray-400 mb-2">My Expertise</h3>
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          </motion.div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center mb-6 gap-4">
              <span className={`px-3 py-1 rounded-full text-sm bg-green-900 text-green-100 flex items-center`}>
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>Expert
              </span>
              <span className={`px-3 py-1 rounded-full text-sm bg-blue-900 text-blue-100 flex items-center`}>
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>Advanced
              </span>
              <span className={`px-3 py-1 rounded-full text-sm bg-yellow-900 text-yellow-100 flex items-center`}>
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>Intermediate
              </span>
              <span className={`px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-100 flex items-center`}>
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>Beginner
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={skillsControls}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Code className="mr-2 text-blue-400" /> Data Science & AI
              </h3>
              <div className="space-y-4">
                {aiSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                  >
                    <div className="mb-4 p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/0 transition-all duration-500"></div>
                      <div className="flex justify-between">
                        <span className="font-medium relative z-10">{skill.name}</span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          skill.level === "Expert" ? "bg-green-900 text-green-100" : 
                          skill.level === "Advanced" ? "bg-blue-900 text-blue-100" : 
                          skill.level === "Intermediate" ? "bg-yellow-900 text-yellow-100" : 
                          "bg-gray-700 text-gray-100"
                        } relative z-10`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={skillsControls}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Briefcase className="mr-2 text-yellow-400" /> Web & Backend
              </h3>
              <div className="space-y-4">
                {otherDevSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                  >
                    <div className="mb-4 p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/10 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-yellow-500/0 transition-all duration-500"></div>
                      <div className="flex justify-between">
                        <span className="font-medium relative z-10">{skill.name}</span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          skill.level === "Expert" ? "bg-green-900 text-green-100" : 
                          skill.level === "Advanced" ? "bg-blue-900 text-blue-100" : 
                          skill.level === "Intermediate" ? "bg-yellow-900 text-yellow-100" : 
                          "bg-gray-700 text-gray-100"
                        } relative z-10`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={skillsControls}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Briefcase className="mr-2 text-purple-400" /> Mobile Development
              </h3>
              <div className="space-y-4">
                {mobileDevSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                  >
                    <div className="mb-4 p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/0 transition-all duration-500"></div>
                      <div className="flex justify-between">
                        <span className="font-medium relative z-10">{skill.name}</span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          skill.level === "Expert" ? "bg-green-900 text-green-100" : 
                          skill.level === "Advanced" ? "bg-blue-900 text-blue-100" : 
                          skill.level === "Intermediate" ? "bg-yellow-900 text-yellow-100" : 
                          "bg-gray-700 text-gray-100"
                        } relative z-10`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={skillsControls}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 border border-white/10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(75, 85, 99, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 1
                  }}
                >
                  {stat.count}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900" ref={contactRef}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={contactControls}
          >
            <h3 className="text-xl font-medium text-gray-400 mb-2">Get In Touch</h3>
            <h2 className="text-4xl font-bold relative inline-block">
              Contact Me
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={contactControls}
            >
              <motion.div 
                className="flex items-start mb-8 p-4 rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-blue-500/10" 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
              >
                <Mail className="w-10 h-10 mr-4 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-300">pholgridnikolai@gmail.com</p>
                  <p className="text-gray-500 mt-1">Send me an email anytime!</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start mb-8 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-purple-500/10" 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
              >
                <User className="w-10 h-10 mr-4 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Social</h3>
                  <div className="flex space-x-4 mt-2">
                    <motion.a 
                      href="https://github.com/pholgy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/pholgrid/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    </motion.a>
                    <motion.a 
                      href="https://facebook.com/PholgridAnongchai.5/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start p-4 rounded-lg border border-white/10 hover:border-green-500/30 transition-all duration-300 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-green-500/10" 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
              >
                <Award className="w-10 h-10 mr-4 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Open for Opportunities</h3>
                  <p className="text-gray-300">Currently available for freelance work and collaborations in AI/ML projects.</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={contactControls}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20"></div>
              <form className="space-y-4 bg-gray-900 p-6 rounded-lg border border-white/10 shadow-xl relative" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" 
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300" 
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300" 
                    placeholder="Project Inquiry" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300" 
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden group relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // In a real app, you would handle form submission to a backend
                    alert("Thanks for your message! I'll get back to you soon.");
                  }}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative">Send Message <Send className="ml-2 w-4 h-4 inline-block" /></span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="text-2xl font-bold mb-4 md:mb-0 relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">PHOLGRIT</span>
              <span className="text-gray-400">ANONGCHAI</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
            <p className="text-gray-500">© 2025 Pholgrit Anongchai. All rights reserved.</p>
          </div>
          
          <div className="mt-8 border-t border-white/5 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Navigation</h3>
                <ul className="space-y-2">
                  {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
                    <li key={item}>
                      <Link 
                        to={item.toLowerCase()} 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-80}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://github.com/pholgy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.linkedin.com/in/pholgrid/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:pholgridnikolai@gmail.com"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" /> Email
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">React</span>
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">Tailwind CSS</span>
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">Framer Motion</span>
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">Three.js</span>
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">React Three Fiber</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>Designed and built with ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;