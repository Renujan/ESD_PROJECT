import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Heart, FileText, MessageSquare, Briefcase, Presentation, Mail, PenTool, UserCheck, Brain } from "lucide-react";

export const ESDTopics = () => {
  const getIcon = (topicId: string) => {
    const iconMap = {
      'professional-skills': BookOpen,
      'employability-skills': Users,
      'values-beliefs': Heart,
      'cv-writing': FileText,
      'interview-manners': MessageSquare,
      'portfolio': Briefcase,
      'meeting-speaking': Presentation,
      'email-etiquette': Mail,
      'proposal-writing': PenTool,
      'team-leadership': UserCheck,
      'emotional-intelligence': Brain
    };
    const IconComponent = iconMap[topicId as keyof typeof iconMap] || BookOpen;
    return <IconComponent className="w-6 h-6" />;
  };

  const getTopicColor = (topicId: string) => {
    const colorMap = {
      'professional-skills': 'from-blue-500 to-blue-600',
      'employability-skills': 'from-green-500 to-green-600',
      'values-beliefs': 'from-pink-500 to-pink-600',
      'cv-writing': 'from-purple-500 to-purple-600',
      'interview-manners': 'from-orange-500 to-orange-600',
      'portfolio': 'from-indigo-500 to-indigo-600',
      'meeting-speaking': 'from-teal-500 to-teal-600',
      'email-etiquette': 'from-red-500 to-red-600',
      'proposal-writing': 'from-yellow-500 to-yellow-600',
      'team-leadership': 'from-cyan-500 to-cyan-600',
      'emotional-intelligence': 'from-violet-500 to-violet-600'
    };
    return colorMap[topicId as keyof typeof colorMap] || 'from-gray-500 to-gray-600';
  };

  const getTopicImage = (topicId: string) => {
    const imageMap = {
      'professional-skills': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'employability-skills': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'values-beliefs': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'cv-writing': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'interview-manners': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'portfolio': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'meeting-speaking': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'email-etiquette': 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'proposal-writing': 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'team-leadership': 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1200&h=600&fit=crop&crop=center&q=90&auto=format',
      'emotional-intelligence': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop&crop=center&q=90&auto=format'
    };
    return imageMap[topicId as keyof typeof imageMap] || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop&crop=center&q=90&auto=format';
  };

  const esdTopics = [
    {
      id: 'professional-skills',
      title: 'Professional Skills',
      shortDescription: 'Essential competencies like communication, problem-solving, and adaptability for workplace success.',
      theory: 'Professional skills encompass competencies like communication, problem-solving, and adaptability, essential for workplace success. They include emotional intelligence (EI) components: self-awareness, motivation, empathy, and social skills, which enhance performance and conflict resolution (TalentSmart, 2016). Focus on continuous learning, time management, and collaboration to meet organizational goals.',
      examples: [
        'Communication: Clearly explaining a project plan to a team, reducing misunderstandings.',
        'Problem-Solving: Resolving a client issue by proposing a new workflow, improving satisfaction by 20%.'
      ],
      questions: [
        {
          q: 'How do professional skills impact career growth?',
          a: 'Skills like communication and EI build trust and efficiency, leading to promotions.'
        },
        {
          q: 'How to improve professional skills?',
          a: 'Seek feedback and attend workshops, e.g., on time management.'
        }
      ]
    },
    {
      id: 'employability-skills',
      title: 'Employability Skills',
      shortDescription: 'Transferable abilities like teamwork, communication, and initiative that make candidates attractive to employers.',
      theory: 'Employability skills are transferable abilities like teamwork, communication, and initiative that make candidates attractive to employers. They ensure adaptability across roles and industries. Key skills include critical thinking, reliability, and digital literacy, often assessed during hiring.',
      examples: [
        'Teamwork: Collaborating on a marketing campaign, meeting deadlines.',
        'Initiative: Proposing a cost-saving process, adopted company-wide.'
      ],
      questions: [
        {
          q: 'Why are employability skills valued?',
          a: 'They show adaptability, like solving problems in new roles.'
        },
        {
          q: 'How to demonstrate employability skills?',
          a: 'Highlight examples in CV, e.g., led a team project.'
        }
      ]
    },
    {
      id: 'values-beliefs',
      title: 'Values, Beliefs, Attitudes, and Character',
      shortDescription: 'Core principles that shape workplace behavior, ethics, and decision-making.',
      theory: 'Values (e.g., integrity), beliefs (e.g., fairness), attitudes (e.g., positivity), and character (e.g., resilience) shape workplace behavior and ethics. They influence decision-making and relationships. Employers value alignment with organizational culture and ethical conduct.',
      examples: [
        'Integrity: Reporting a mistake to a supervisor, maintaining trust.',
        'Resilience: Overcoming a project setback by revising strategies.'
      ],
      questions: [
        {
          q: 'How do values impact work?',
          a: 'Integrity builds trust, e.g., honest reporting.'
        },
        {
          q: 'How to show positive attitude?',
          a: 'Stay solution-focused, e.g., proposing fixes during challenges.'
        }
      ]
    },
    {
      id: 'cv-writing',
      title: 'CV Writing',
      shortDescription: 'Creating effective 1-2 page documents that summarize qualifications to secure interviews.',
      theory: 'A CV is a 1-2 page document summarizing education, experience, skills, and achievements to secure interviews. It requires clear formatting, error-free content, and tailoring to job requirements. Emphasize quantifiable achievements and align with company values.',
      examples: [
        'Formatting: Arial 11pt, bullet points, headings (Education, Experience).',
        'Tailoring: For tech role, highlight Python project reducing load time by 20%.'
      ],
      questions: [
        {
          q: 'How to make a CV stand out?',
          a: 'Use quantified achievements, e.g., \'increased sales 15%,\' tailored to job.'
        },
        {
          q: 'What if I lack experience?',
          a: 'Focus on transferable skills, e.g., \'led university project.\''
        }
      ]
    },
    {
      id: 'interview-manners',
      title: 'Interview Manners',
      shortDescription: 'Professional behavior including punctuality, communication, and positive body language.',
      theory: 'Interview manners involve professional behavior, including punctuality, respectful communication, and positive body language (eye contact, firm handshake). Use the STAR method (Situation, Task, Action, Result) for answers. Dress appropriately, listen actively, and follow up with a thank-you email.',
      examples: [
        'Body Language: Upright posture, nodding to show engagement.',
        'STAR Answer: Situation: Missed deadline; Task: Reorganize; Action: Set check-ins; Result: Delivered early.'
      ],
      questions: [
        {
          q: 'Why are manners important in interviews?',
          a: 'They show professionalism, e.g., eye contact builds trust.'
        },
        {
          q: 'How to recover from a mistake?',
          a: 'Acknowledge calmly, e.g., \'I misspoke, let me clarify.\''
        }
      ]
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      shortDescription: 'Curated collection of work samples showcasing skills and achievements.',
      theory: 'A portfolio is a curated collection of work samples showcasing skills and achievements. It should be organized, relevant, and updated regularly, presented digitally or physically. Tailor to job roles, highlighting impact and context.',
      examples: [
        'Digital: Designer\'s website with UI/UX projects, 15% engagement boost.',
        'Physical: Architect\'s binder with blueprints, client testimonials.'
      ],
      questions: [
        {
          q: 'How to select portfolio pieces?',
          a: 'Choose recent, relevant work, e.g., project with 10% sales increase.'
        },
        {
          q: 'How often to update portfolio?',
          a: 'Every 6-12 months or after major projects.'
        }
      ]
    },
    {
      id: 'meeting-speaking',
      title: 'Meeting and Speaking Skills',
      shortDescription: 'Effective facilitation and public speaking with clear agendas and engaging delivery.',
      theory: 'Effective meeting facilitation and public speaking involve clear agendas, time management, and engaging delivery. Use active listening, concise speech, and visuals to enhance impact. Encourage participation and handle interruptions professionally.',
      examples: [
        'Meeting Agenda: Q2 Review: 10 min Q1 results, 30 min goals, 20 min tasks.',
        'Speaking: Using slides to explain sales data, increasing team clarity.'
      ],
      questions: [
        {
          q: 'How to keep meetings productive?',
          a: 'Set timed agenda, redirect off-topic points.'
        },
        {
          q: 'How to improve speaking skills?',
          a: 'Practice with feedback, e.g., record presentations.'
        }
      ]
    },
    {
      id: 'email-etiquette',
      title: 'Email Writing Etiquette',
      shortDescription: 'Professional email communication with clear subjects, formal tone, and proper structure.',
      theory: 'Professional emails require clear subject lines, formal greetings, concise content, and error-free writing. Include a signature and respond within 24-48 hours. Avoid slang, tailor tone, and use CC/BCC appropriately.',
      examples: [
        'Professional: Subject: Meeting Request; Dear Ms. Smith, Please confirm Tuesday 10 AM. Regards, John Doe, Manager.',
        'Poor: Subject: Hey; Yo, let\'s meet, John (lacks formality).'
      ],
      questions: [
        {
          q: 'What makes an email professional?',
          a: 'Clear subject, formal tone, signature.'
        },
        {
          q: 'Handle sensitive topics?',
          a: 'Request a call instead of emailing.'
        }
      ]
    },
    {
      id: 'proposal-writing',
      title: 'Proposal Writing',
      shortDescription: 'Structured documents outlining plans to address problems or opportunities.',
      theory: 'A proposal outlines a plan to address a problem or opportunity, including objectives, methods, timeline, and budget. It requires clear structure, persuasive language, and alignment with stakeholder needs. Proofread and tailor to the audience\'s priorities.',
      examples: [
        'Structure: Executive summary, problem statement, solution, timeline, costs.',
        'Proposal: Suggesting a new CRM system, projecting 25% efficiency gain.'
      ],
      questions: [
        {
          q: 'What makes a proposal persuasive?',
          a: 'Clear benefits, e.g., \'saves 10 hours weekly.\''
        },
        {
          q: 'How to tailor a proposal?',
          a: 'Align with client goals, e.g., emphasize cost savings.'
        }
      ]
    },
    {
      id: 'team-leadership',
      title: 'Team and Leadership',
      shortDescription: 'Collaboration, communication, and motivating others through clear goals and delegation.',
      theory: 'Effective teamwork and leadership involve collaboration, clear communication, and motivating others. Leaders set goals, delegate, and resolve conflicts, while team members contribute reliably. Use empathy and accountability to build trust.',
      examples: [
        'Leadership: Delegating tasks based on strengths, meeting deadlines.',
        'Teamwork: Brainstorming solutions, increasing project quality.'
      ],
      questions: [
        {
          q: 'How to lead a team effectively?',
          a: 'Set clear goals, e.g., \'complete phase 1 by Friday.\''
        },
        {
          q: 'How to resolve team conflicts?',
          a: 'Listen to both sides, propose compromise.'
        }
      ]
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence',
      shortDescription: 'Ability to recognize and manage emotions in oneself and others for workplace success.',
      theory: 'EI is the ability to recognize and manage emotions in oneself and others, with components: self-awareness, motivation, empathy, social skills. It predicts workplace success and aids conflict resolution (TalentSmart, 2016). Emotions, processed by the amygdala and prefrontal cortex, facilitate social interactions and decision-making.',
      examples: [
        'Empathy: Supporting a stressed colleague, improving teamwork.',
        'Self-Awareness: Recognizing frustration and pausing to refocus.'
      ],
      questions: [
        {
          q: 'How does EI help at work?',
          a: 'It resolves conflicts, e.g., mediating disputes.'
        },
        {
          q: 'How to develop EI?',
          a: 'Practice active listening, e.g., paraphrasing concerns.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Professional Skills Development
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Master essential workplace competencies with comprehensive coverage of key professional development topics.
            Each module includes theory, practical examples, and expert insights.
          </p>
        </div>

        <Tabs defaultValue="professional-skills" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full h-auto p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl">
            {esdTopics.map((topic) => (
              <TabsTrigger 
                key={topic.id} 
                value={topic.id}
                className="flex flex-col items-center gap-3 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-white data-[state=active]:to-gray-50 dark:data-[state=active]:from-slate-700 dark:data-[state=active]:to-slate-600 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 data-[state=active]:shadow-lg"
              >
                <div className={`p-3 rounded-full bg-gradient-to-br ${getTopicColor(topic.id)} text-white shadow-lg`}>
                  {getIcon(topic.id)}
                </div>
                <span className="text-center leading-tight text-slate-700 dark:text-slate-200">{topic.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {esdTopics.map((topic) => (
            <TabsContent key={topic.id} value={topic.id} className="mt-8">
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg overflow-hidden rounded-3xl">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={getTopicImage(topic.id)} 
                    alt={topic.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`} />
                  <div className={`absolute top-6 right-6 p-4 rounded-full bg-gradient-to-br ${getTopicColor(topic.id)} shadow-xl`}>
                    <div className="text-white">
                      {getIcon(topic.id)}
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-4xl font-bold mb-3 drop-shadow-lg">{topic.title}</h3>
                    <p className="text-xl text-white/90 drop-shadow-md leading-relaxed">{topic.shortDescription}</p>
                  </div>
                </div>
                
                <CardContent className="space-y-8 p-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700/50 dark:to-slate-600/50 rounded-2xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Theory & Overview
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{topic.theory}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700/50 dark:to-slate-600/50 rounded-2xl p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Practical Examples
                    </h4>
                    <div className="space-y-4">
                      {topic.examples.map((example, index) => (
                        <div key={index} className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-4 shadow-md border border-green-200/50 dark:border-green-700/50 hover:shadow-lg transition-shadow">
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-slate-700/50 dark:to-slate-600/50 rounded-2xl p-6 border-l-4 border-purple-500">
                    <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Common Questions & Expert Answers
                    </h4>
                    <div className="space-y-6">
                      {topic.questions.map((qa, index) => (
                        <div key={index} className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 shadow-md border border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg transition-all duration-300">
                          <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-2">
                              Question
                            </span>
                            <p className="text-slate-800 dark:text-slate-200 font-medium text-lg">{qa.q}</p>
                          </div>
                          <div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-2">
                              Answer
                            </span>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{qa.a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
