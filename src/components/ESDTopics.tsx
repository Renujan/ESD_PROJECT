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
    return <IconComponent className="w-5 h-5" />;
  };

  const getTopicImage = (topicId: string) => {
    const imageMap = {
      'professional-skills': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop&crop=center&q=80',
      'employability-skills': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center&q=80',
      'values-beliefs': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop&crop=center&q=80',
      'cv-writing': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center&q=80',
      'interview-manners': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center&q=80',
      'portfolio': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&crop=center&q=80',
      'meeting-speaking': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=400&fit=crop&crop=center&q=80',
      'email-etiquette': 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=400&fit=crop&crop=center&q=80',
      'proposal-writing': 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=400&fit=crop&crop=center&q=80',
      'team-leadership': 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&h=400&fit=crop&crop=center&q=80',
      'emotional-intelligence': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop&crop=center&q=80'
    };
    return imageMap[topicId as keyof typeof imageMap] || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop&crop=center&q=80';
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
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Professional Skills Development Topics</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Explore comprehensive coverage of essential PS topics with theory, examples, and practical Q&As.
          Each topic is designed to enhance your professional development and workplace readiness.
        </p>
      </div>

      <Tabs defaultValue="professional-skills" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full h-auto p-1 bg-slate-100 dark:bg-slate-800">
          {esdTopics.map((topic) => (
            <TabsTrigger 
              key={topic.id} 
              value={topic.id}
              className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 text-xs font-medium"
            >
              {getIcon(topic.id)}
              <span className="text-center leading-tight">{topic.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {esdTopics.map((topic) => (
          <TabsContent key={topic.id} value={topic.id} className="mt-6">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={getTopicImage(topic.id)} 
                  alt={topic.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="text-white/90">
                      {getIcon(topic.id)}
                    </div>
                    <h3 className="text-2xl font-bold">{topic.title}</h3>
                  </div>
                  <p className="mt-2 text-white/90 text-lg">{topic.shortDescription}</p>
                </div>
              </div>
              
              <CardContent className="space-y-6 p-6">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3 text-lg">Theory & Overview</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{topic.theory}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3 text-lg">Examples</h4>
                  <ul className="space-y-3">
                    {topic.examples.map((example, index) => (
                      <li key={index} className="text-slate-600 dark:text-slate-300 pl-4 border-l-2 border-blue-200 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20 p-3 rounded-r">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4 text-lg">Common Questions & Answers</h4>
                  <div className="space-y-4">
                    {topic.questions.map((qa, index) => (
                      <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600">
                        <p className="font-medium text-slate-700 dark:text-slate-200 mb-2">
                          <span className="text-blue-600 dark:text-blue-400 font-bold">Q:</span> {qa.q}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="text-green-600 dark:text-green-400 font-bold">A:</span> {qa.a}
                        </p>
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
  );
};
