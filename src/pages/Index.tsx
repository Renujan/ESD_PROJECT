
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Download, Mail, Phone, Github, Linkedin, Moon, Sun, Menu, X, ChevronUp, MapPin, Calendar, Heart } from "lucide-react";
import { ESDTopics } from "@/components/ESDTopics";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'cv', 'esd-topics'];
      const scrollPosition = window.scrollY + 100;

      setShowScrollTop(window.scrollY > 300);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/e6ae7112-1f8c-478e-a65f-36b1e9341b78.png';
    link.download = 'Roshan_Renujan_CV.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const personalInfo = {
    name: "ROSHAN RENUJAN",
    email: "roshanrenujan2000@gmail.com",
    phone: "0768074228",
    github: "https://github.com/Renujan",
    linkedin: "https://www.linkedin.com/in/roshan-renujan",
    title: "Software Engineering Student",
    university: "Northern University",
    degree: "Bachelor's Degree in Computer Science and Software Engineering",
    expectedGraduation: "2025",
    profileImage: "/lovable-uploads/d38347ba-8c8f-43dc-b62b-2a3c356906cb.png"
  };

  const skills = {
    technical: ["Java", "C++", "HTML/CSS", "JavaScript", "PHP", "SQL"],
    frameworks: ["Bootstrap", "Django"],
    databases: ["MySQL", "SQL"],
    tools: ["R Studio", "NetBeans", "Eclipse", "Android Studio", "Visual Studio", "Xampp", "Figma", "Micromedia", "SQL Server Management Studio", "Dev C++"]
  };

  const projects = [
    {
      title: "Salon System (E-commerce)",
      duration: "1st year 2nd semester | July 2024",
      description: "Developed a user-friendly website for a salon, incorporating pages such as Home, Types of Haircuts, Contact us, and About us. Enable users to do book hairdresser online, with backend functionality using PHP and SQL."
    },
    {
      title: "Java Swing Application (Group Project)",
      duration: "1st year 2nd semester | June 2024",
      description: "Managed customer orders for tea repairs, repainting, and parts. Developed SHIP SHARE project using Java Swing and SQL."
    },
    {
      title: "Android Application (Group Project)",
      duration: "2nd year 1st semester | Nov 2024",
      description: "An Android app using Java, Firebase, and REST API, delivering AI-powered features with real-time data sync and smooth user interaction. Built a user-friendly UI with RecyclerView and Fragments, and integrated Firebase for authentication and storage."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-700/20 transition-all duration-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ESD Portfolio
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`relative px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${
                  activeSection === 'about' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                About
                {activeSection === 'about' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('cv')}
                className={`relative px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${
                  activeSection === 'cv' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                CV
                {activeSection === 'cv' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('esd-topics')}
                className={`relative px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${
                  activeSection === 'esd-topics' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                ESD Topics
                {activeSection === 'esd-topics' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                )}
              </button>
              
              {/* Enhanced Theme Toggle */}
              <div className="flex items-center space-x-3 bg-slate-100 dark:bg-slate-800 rounded-full p-2">
                <Sun className="w-4 h-4 text-yellow-500" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="w-4 h-4 text-blue-500" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 rounded-full p-2">
                <Sun className="w-4 h-4 text-yellow-500" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="w-4 h-4 text-blue-500" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left py-3 px-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('cv')}
                  className="text-left py-3 px-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all"
                >
                  CV
                </button>
                <button
                  onClick={() => scrollToSection('esd-topics')}
                  className="text-left py-3 px-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all"
                >
                  ESD Topics
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 dark:from-blue-400/5 dark:to-indigo-400/5"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <Avatar className="w-40 h-40 mx-auto mb-8 ring-4 ring-blue-200 dark:ring-blue-800 shadow-2xl">
            <AvatarImage 
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
              className="object-cover object-center"
            />
            <AvatarFallback className="text-3xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white">RR</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            {personalInfo.title} specializing in modern web development and software engineering
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('cv')}
              className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300"
            >
              View CV
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border-l-4 border-l-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-100">Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Phone className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <a href={`tel:${personalInfo.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Github className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">GitHub Profile</a>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Linkedin className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">LinkedIn Profile</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-100">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 text-lg">{personalInfo.degree}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{personalInfo.university}</p>
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-3 py-1 rounded-full">
                    <span className="text-sm text-blue-800 dark:text-blue-200">Expected Graduation: {personalInfo.expectedGraduation}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 hover:scale-105 transition-transform">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((framework, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 hover:scale-105 transition-transform">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Tools & Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[...skills.databases, ...skills.tools.slice(0, 6)].map((item, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 hover:scale-105 transition-transform">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Curriculum Vitae
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <Card className="shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl text-slate-800 dark:text-slate-100 flex items-center justify-between">
                  My Professional Profile
                  <Button 
                    onClick={downloadCV}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
                  Complete overview of my education, skills, and experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-xl p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 shadow-inner">
                  <img 
                    src="/lovable-uploads/e6ae7112-1f8c-478e-a65f-36b1e9341b78.png" 
                    alt="Roshan Renujan CV"
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-100">Featured Projects</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Showcase of my development work and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8">
                  {projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-l-gradient-to-b from-blue-500 to-indigo-500 pl-6 hover:pl-8 transition-all duration-300">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h3 className="font-bold text-xl text-slate-700 dark:text-slate-200 mb-2">{project.title}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">{project.duration}</p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ESD Topics Section */}
      <section id="esd-topics" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              ESD Topics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 max-w-3xl mx-auto">
              Explore comprehensive insights into Employability Skills Development topics that enhance professional growth and career success.
            </p>
          </div>
          <ESDTopics />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <h3 className="text-xl font-bold text-white">Roshan Renujan</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Software Engineering Student passionate about creating innovative solutions and continuous learning.
              </p>
              <div className="flex space-x-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">
                    About Me
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('cv')} className="text-slate-300 hover:text-white transition-colors">
                    My CV
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('esd-topics')} className="text-slate-300 hover:text-white transition-colors">
                    ESD Topics
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-white transition-colors">
                    {personalInfo.email}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-white transition-colors">
                    {personalInfo.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300">Sri Lanka</span>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Education</h4>
              <div className="space-y-2">
                <p className="text-slate-300 font-medium">Northern University</p>
                <p className="text-slate-400 text-sm">Computer Science & Software Engineering</p>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>Expected: 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 Roshan Renujan. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-slate-400 text-sm mt-4 md:mt-0">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>for ESD Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-fade-in"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
