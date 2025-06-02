
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Mail, Phone, Github, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { ESDTopics } from "@/components/ESDTopics";

const Index = () => {
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">ESD Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#cv" className="text-slate-600 hover:text-blue-600 transition-colors">CV</a>
              <a href="#esd-topics" className="text-slate-600 hover:text-blue-600 transition-colors">ESD Topics</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="cv">CV & Experience</TabsTrigger>
            <TabsTrigger value="esd-topics">ESD Topics</TabsTrigger>
          </TabsList>

          {/* About Section */}
          <TabsContent value="about" id="about">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={personalInfo.profileImage} alt={personalInfo.name} />
                      <AvatarFallback>RR</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl text-slate-800">{personalInfo.name}</CardTitle>
                      <CardDescription className="text-lg">{personalInfo.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-600">{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-600">{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Github className="w-4 h-4 text-blue-600" />
                      <a href={personalInfo.github} className="text-blue-600 hover:underline">GitHub Profile</a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                      <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">LinkedIn Profile</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-slate-700">{personalInfo.degree}</h3>
                    <p className="text-slate-600">{personalInfo.university}</p>
                    <p className="text-sm text-slate-500">Expected Graduation: {personalInfo.expectedGraduation}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((framework, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((db, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800">
                        {db}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* CV Section */}
          <TabsContent value="cv" id="cv">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 flex items-center justify-between">
                    My Curriculum Vitae
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    View my complete professional profile and download my CV
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-slate-50">
                    <img 
                      src="/lovable-uploads/e6ae7112-1f8c-478e-a65f-36b1e9341b78.png" 
                      alt="Roshan Renujan CV"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {projects.map((project, index) => (
                        <div key={index} className="border-l-4 border-l-blue-300 pl-4">
                          <h3 className="font-semibold text-slate-700">{project.title}</h3>
                          <p className="text-sm text-slate-500 mb-2">{project.duration}</p>
                          <p className="text-slate-600">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* ESD Topics Section */}
          <TabsContent value="esd-topics" id="esd-topics">
            <ESDTopics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
