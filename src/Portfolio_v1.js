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
      description: "Implemented a RAG system using LLM fine-tuned with LoRA and QLoRA optimization techniques to answer questions about Thai traffic regulations."
    },
    { 
      title: "Failure Analysis of Composite Materials in Aerospace Structures", 
      category: "Machine Learning", 
      description: "Utilized CTGAN-based machine learning approaches to analyze and predict failures in composite materials used in aerospace structures."
    },
    { 
      title: "Regression Analysis of Soil Carbon Sequestration", 
      category: "Data Science", 
      description: "Conducted regression analysis on hyperspectral image data to measure and predict soil carbon sequestration rates."
    },
    { 
      title: "Twitter Influencer Detection", 
      category: "Graph-based ML", 
      description: "Developed a graph-based machine learning system to detect and analyze influencers on Twitter based on network interactions."
    }
  ];

  const selfLearningProjects = [
    { 
      title: "Predicting Suicidal Behavior in Thai Text", 
      category: "NLP & Deep Learning", 
      description: "Applied NLP-based machine learning, deep learning, and BERT models to identify and predict suicidal behavior patterns in Thai text."
    },
    { 
      title: "Transformer-based Approaches for Multi-dependency Dataset Analysis", 
      category: "Research Study", 
      description: "Conducted a research study exploring transformer-based approaches for analyzing datasets with multiple dependencies."
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
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Pholgrit Anongchai
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-300"
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
          </motion.h2>
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
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              duration={700}
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition cursor-pointer"
            >
              View Projects
            </Link>
            <button className="px-8 py-3 border border-white rounded-full font-semibold hover:bg-white/10 transition">
              Download CV
            </button>
          </motion.div>
          <motion.div 
            className="flex space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <a href="https://github.com/pholgy" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/pholgrid/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="mailto:pholgridnikolai@gmail.com">
              <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/pholgrid.anongchai.5/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </a>
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
              className="w-full md:w-1/2 h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutControls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
            >
              <span className="text-gray-400 text-lg">Profile Image</span>
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
              <h2 className="text-4xl font-bold mb-6">AI/ML Specialist & Developer</h2>
              <p className="text-gray-300 mb-4">
                I'm a passionate AI/ML engineer with over 3 years of freelance experience, specializing in Artificial Intelligence and Large Language Models (LLMs). My work spans across computer vision, forecasting, regression analysis, and natural language processing.
              </p>
              <p className="text-gray-300 mb-6">
                With a strong foundation in both AI research and practical implementation, I develop innovative solutions that tackle complex problems across various domains.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-bold">Name</h4>
                  <p className="text-gray-400">Pholgrit Anongchai</p>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">pholgridnikolai@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold">Education</h4>
                  <p className="text-gray-400">Bachelor's in Data Science</p>
                </div>
                <div>
                  <h4 className="font-bold">Availability</h4>
                  <p className="text-gray-400">Available for freelance</p>
                </div>
              </div>
              <a 
                href="mailto:pholgridnikolai@gmail.com" 
                className="px-6 py-3 border border-white rounded font-medium hover:bg-white hover:text-black transition inline-block"
              >
                Contact Me
              </a>
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
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={projectsControls}
          >
            <h3 className="text-xl font-medium text-gray-400 mb-2">My Work</h3>
            <h2 className="text-4xl font-bold mb-6">Freelance Projects</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Specialized AI/ML solutions developed for real-world applications
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={projectsControls}
          >
            {freelanceProjects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div
                  className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition border border-white/10 h-full"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-gray-400">Project Image</span>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-gray-400">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a href="#projects" className="inline-flex items-center font-medium hover:text-gray-300">
                      View Details <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={projectsControls}
          >
            <h2 className="text-4xl font-bold mb-6">Self-Learning Projects</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Research and personal projects showcasing my interests in AI/ML
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={projectsControls}
          >
            {selfLearningProjects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div
                  className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition border border-white/10 h-full"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-gray-400">Project Image</span>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-gray-400">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a href="#projects" className="inline-flex items-center font-medium hover:text-gray-300">
                      View Details <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
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
                <Code className="mr-2" /> Data Science & AI
              </h3>
              <div className="space-y-4">
                {aiSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        skill.level === "Expert" ? "bg-green-900 text-green-100" : 
                        skill.level === "Advanced" ? "bg-blue-900 text-blue-100" : 
                        skill.level === "Intermediate" ? "bg-yellow-900 text-yellow-100" : 
                        "bg-gray-700 text-gray-100"
                      }`}>
                        {skill.level}
                      </span>
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
                <Briefcase className="mr-2" /> Web & Backend
              </h3>
              <div className="space-y-4">
                {otherDevSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex justify-between mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        skill.level === "Expert" ? "bg-green-900 text-green-100" : 
                        skill.level === "Advanced" ? "bg-blue-900 text-blue-100" : 
                        skill.level === "Intermediate" ? "bg-yellow-900 text-yellow-100" : 
                        "bg-gray-700 text-gray-100"
                      }`}>
                        {skill.level}
                      </span>
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
                <Briefcase className="mr-2" /> Mobile Development
              </h3>
              <div className="space-y-4">
                {mobileDevSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    <div className="flex justify-between mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        skill.level === "Expert" ? "bg-green-900 text-green-100" : 
                        skill.level === "Advanced" ? "bg-blue-900 text-blue-100" : 
                        skill.level === "Intermediate" ? "bg-yellow-900 text-yellow-100" : 
                        "bg-gray-700 text-gray-100"
                      }`}>
                        {skill.level}
                      </span>
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
                  className="text-3xl md:text-4xl font-bold mb-2"
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
            <h2 className="text-4xl font-bold">Contact Me</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={contactControls}
            >
              <motion.div className="flex items-start mb-8" variants={fadeInUp}>
                <Mail className="w-10 h-10 mr-4 text-gray-300 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-400">pholgridnikolai@gmail.com</p>
                  <p className="text-gray-500 mt-1">Send me an email anytime!</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start mb-8" variants={fadeInUp}>
                <User className="w-10 h-10 mr-4 text-gray-300 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Social</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://github.com/pholgy" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/pholgrid/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    </a>
                    <a href="https://facebook.com/PholgridAnongchai.5/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div className="flex items-start" variants={fadeInUp}>
                <Award className="w-10 h-10 mr-4 text-gray-300 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Open for Opportunities</h3>
                  <p className="text-gray-400">Currently available for freelance work and collaborations in AI/ML projects.</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={contactControls}
              transition={{ delay: 0.3 }}
            >
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-1 focus:ring-white focus:border-white outline-none" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-1 focus:ring-white focus:border-white outline-none" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-1 focus:ring-white focus:border-white outline-none" 
                    placeholder="Project Inquiry" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-1 focus:ring-white focus:border-white outline-none" 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
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
            <div className="text-2xl font-bold mb-4 md:mb-0">PHOLGRIT<span className="text-gray-400">ANONGCHAI</span></div>
            <p className="text-gray-500">© 2025 Pholgrit Anongchai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;