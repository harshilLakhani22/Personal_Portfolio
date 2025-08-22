import { NextResponse } from 'next/server';
import { knowledgeBase, searchKnowledge } from '@/utils/data/knowledge-base';

// This function creates a comprehensive knowledge base about you
function createKnowledgeBase() {
    return `
HARSHIL'S PORTFOLIO KNOWLEDGE BASE:

${JSON.stringify(knowledgeBase, null, 2)}

INSTRUCTIONS: You are an AI assistant for Harshil's portfolio website. Answer questions about Harshil's skills, experience, projects, education, and achievements based on the information above. Be helpful, professional, and accurate. If someone asks about something not covered in the data, politely say you don't have that information but suggest they check the portfolio or contact Harshil directly.
`;
}

// // Enhanced response generation with more context awareness
// function generateEnhancedResponse(userMessage, conversationHistory) {
//     const message = userMessage.toLowerCase();

//     // Skills related questions
//     if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
//         if (message.includes('frontend') || message.includes('front-end')) {
//             const frontendSkills = knowledgeBase.skills.frontend.slice(0, 6).join(', ');
//             return `Harshil has strong frontend development skills including ${frontendSkills} and more. He's proficient in modern frameworks like React, Next.js, and Vue.js, with expertise in responsive design and user experience optimization.`;
//         }
//         if (message.includes('backend') || message.includes('back-end')) {
//             const backendSkills = knowledgeBase.skills.backend.slice(0, 6).join(', ');
//             return `Harshil excels in backend development with technologies like ${backendSkills}. He has experience building APIs, databases, and server-side applications with a focus on scalability and performance.`;
//         }
//         if (message.includes('database') || message.includes('db')) {
//             const dbSkills = knowledgeBase.skills.databases.join(', ');
//             return `Harshil is proficient in various database technologies including ${dbSkills}. He has experience with both SQL and NoSQL databases, data modeling, and database optimization.`;
//         }
//         if (message.includes('cloud') || message.includes('aws') || message.includes('azure')) {
//             const cloudSkills = knowledgeBase.skills.cloud.join(', ');
//             return `Harshil has cloud computing expertise with platforms like ${cloudSkills}. He can help with cloud deployment, infrastructure management, and scalable application architecture.`;
//         }

//         const skillCategories = Object.keys(knowledgeBase.skills);
//         return `Harshil has expertise across ${skillCategories.length} main categories: ${skillCategories.join(', ')}. His technical skills span from frontend frameworks to backend technologies, cloud services, databases, and mobile development. He's always learning and staying updated with the latest technologies.`;
//     }

//     // Project related questions
//     if (message.includes('project') || message.includes('work') || message.includes('build')) {
//         if (message.includes('recent') || message.includes('latest')) {
//             const recentProjects = knowledgeBase.projects.slice(0, 3);
//             const projectList = recentProjects.map(p => p.title).join(', ');
//             return `Harshil's recent projects include ${projectList}. These showcase his skills in modern web development, AI/ML integration, and creative problem-solving abilities.`;
//         }
//         if (message.includes('web') || message.includes('website')) {
//             const webProjects = knowledgeBase.projects.filter(p => p.category === 'Web Development');
//             return `Harshil has built ${webProjects.length} web applications, including full-stack projects that demonstrate his end-to-end development capabilities. His projects focus on user experience, performance, and scalability.`;
//         }
//         if (message.includes('ai') || message.includes('machine learning')) {
//             const aiProjects = knowledgeBase.projects.filter(p => p.category === 'AI/ML');
//             return `Harshil has worked on ${aiProjects.length} AI/ML projects, including chatbots and natural language processing applications. He combines his software development skills with AI technologies to create intelligent solutions.`;
//         }

//         const projectCount = knowledgeBase.projects.length;
//         return `Harshil has worked on ${projectCount} diverse projects, including web applications, mobile apps, and AI solutions. His projects demonstrate expertise in modern technologies and creative problem-solving. Each project is designed with scalability and user experience in mind.`;
//     }

//     // Experience related questions
//     if (message.includes('experience') || message.includes('work history') || message.includes('job')) {
//         if (message.includes('years') || message.includes('how long')) {
//             return `Harshil has been developing software professionally since 2020, gaining experience across different technologies and project types. His portfolio showcases a variety of work that demonstrates his growth and expertise in the field.`;
//         }
//         if (message.includes('current') || message.includes('present')) {
//             const currentRole = knowledgeBase.experience[0];
//             return `Harshil is currently working as ${currentRole.role} at ${currentRole.company}, where he leads development of enterprise web applications and mentors junior developers. He's been in this role since ${currentRole.duration}.`;
//         }

//         const experienceCount = knowledgeBase.experience.length;
//         return `Harshil has ${experienceCount} years of professional experience in software development, working on various projects that showcase his technical skills and problem-solving abilities. He has experience in both startup and enterprise environments.`;
//     }

//     // Education related questions
//     if (message.includes('education') || message.includes('degree') || message.includes('university')) {
//         const education = knowledgeBase.education;
//         const degrees = education.map(edu => `${edu.degree} from ${edu.institution} (${edu.year})`).join(', ');
//         return `Harshil's educational background includes ${degrees}. His academic foundation combined with practical project experience makes him well-rounded in software development. He continues to learn through certifications and hands-on projects.`;
//     }

//     // Contact related questions
//     if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
//         return `You can reach out to Harshil through the contact form on this website, or check the contact section for more ways to get in touch. He's ${knowledgeBase.contact.availability.toLowerCase()} and usually responds within ${knowledgeBase.contact.responseTime.toLowerCase()}. He's always open to discussing opportunities and collaborations!`;
//     }

//     // Work style questions
//     if (message.includes('work style') || message.includes('approach') || message.includes('methodology')) {
//         return `Harshil follows ${knowledgeBase.workStyle.methodology}. His approach focuses on ${knowledgeBase.workStyle.approach}. Key strengths include ${knowledgeBase.workStyle.strengths.slice(0, 3).join(', ')}, and he emphasizes collaboration and continuous learning.`;
//     }

//     // General questions
//     if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
//         return `Hello! I'm here to help you learn more about Harshil. You can ask me about his skills, projects, experience, education, work style, or any other aspects of his professional background. What specific information are you looking for?`;
//     }

//     // Default response with suggestions
//     return `I'd be happy to help you learn more about Harshil! You can ask me about his skills, projects, work experience, education, work style, or any other aspects of his professional background. Some popular questions include "What are Harshil's skills?", "Tell me about his projects", "What's his work experience?", or "How does he approach development?". What specific information are you looking for?`;
// }

// Enhanced response generation for local fallback
function generateEnhancedResponse(userMessage, conversationHistory) {
    const msg = userMessage.toLowerCase();


    // Greeting
    if (/(hello|hi|hey)/.test(msg)) {
        return `Hi there! I’m Harshil’s portfolio assistant. You can ask me about his skills, projects, experience, education, or achievements. What would you like to know?`;
    }


    // About Harshil
    if (msg.includes('about') || msg.includes('yourself') || msg.includes('who is harshil')) {
        return `${knowledgeBase.personal.tagline} ${knowledgeBase.personal.summary}`;
    }


    // Skills
    if (msg.includes('skills') || msg.includes('technologies')) {
        const core = knowledgeBase.skills.core.join(', ');
        return `Harshil’s core skills include ${core}. He’s highly skilled in full-stack development, mobile apps, and problem-solving with strong communication skills.`;
    }


    // Projects
    if (msg.includes('projects') || msg.includes('work')) {
        const mainProjects = knowledgeBase.projects.slice(0, 2).map(p => `${p.title} (${p.link})`).join(', ');
        return `Harshil’s key projects are ${mainProjects}. He has also worked on others like NextGenLearn, Coonch Media, and YouTube with Twitter backend. Want details of a specific project?`;
    }


    if (msg.includes('organix')) {
        const p = knowledgeBase.projects.find(p => p.title === 'OrganiX2.0');
        return `${p.title}: ${p.description} Key highlights: ${p.highlights.join('; ')}. [View on GitHub](${p.link}).`;
    }


    if (msg.includes('calory') || msg.includes('calorys')) {
        const p = knowledgeBase.projects.find(p => p.title === 'Calorys AI');
        return `${p.title}: ${p.description} Built using ${p.technologies.join(', ')}. Highlights: ${p.highlights.join('; ')}. [Check it on App Store](${p.link}).`;
    }


    // Experience
    if (msg.includes('experience') || msg.includes('internship')) {
        const exp = knowledgeBase.experience[0];
        return `Harshil worked as ${exp.role} at ${exp.company} (${exp.duration}). He contributed to Flutter development (Calorys AI) and backend APIs for a college management system.`;
    }


    // Education
    if (msg.includes('education') || msg.includes('degree')) {
        const edu = knowledgeBase.education[0];
        return `Harshil completed ${edu.degree} at ${edu.institution} (${edu.year}), affiliated with ${edu.university}.`;
    }


    // Achievements
    if (msg.includes('achievement') || msg.includes('award') || msg.includes('hackathon')) {
        return `Some of Harshil’s achievements: SSIP Hackathon Winner, Maverick AI Challenge Finalist, solved 230+ DSA problems on LeetCode, and scored 7 Band in IELTS.`;
    }


    // Contact
    if (msg.includes('contact') || msg.includes('linkedin')) {
        return `You can connect with Harshil on LinkedIn: ${knowledgeBase.contact.linkedin}.`;
    }


    return `I can share details about Harshil’s skills, projects, experience, education, and achievements. What would you like to know?`;
}

// Function to call external LLM service (OpenAI, Anthropic, etc.)
async function callLLMService(userMessage, conversationHistory) {
    // Check if we have API keys configured
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

    if (openaiApiKey) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${openaiApiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: createKnowledgeBase()
                        },
                        ...conversationHistory.map(msg => ({
                            role: msg.type === 'user' ? 'user' : 'assistant',
                            content: msg.content
                        })),
                        {
                            role: 'user',
                            content: userMessage
                        }
                    ],
                    max_tokens: 500,
                    temperature: 0.7
                }),
            });

            if (response.ok) {
                const data = await response.json();
                return data.choices[0].message.content;
            }
        } catch (error) {
            console.error('OpenAI API error:', error);
        }
    }

    if (anthropicApiKey) {
        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${anthropicApiKey}`,
                    'Content-Type': 'application/json',
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: 'claude-3-sonnet-20240229',
                    max_tokens: 500,
                    messages: [
                        {
                            role: 'user',
                            content: `${createKnowledgeBase()}\n\nUser question: ${userMessage}`
                        }
                    ]
                }),
            });

            if (response.ok) {
                const data = await response.json();
                return data.content[0].text;
            }
        } catch (error) {
            console.error('Anthropic API error:', error);
        }
    }

    // Fallback to enhanced local response
    return null;
}

export async function POST(request) {
    try {
        const { message, conversationHistory } = await request.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        // Try to get response from LLM service first
        let response = await callLLMService(message, conversationHistory);

        // Fallback to enhanced local response if LLM fails
        if (!response) {
            response = generateEnhancedResponse(message, conversationHistory);
        }

        return NextResponse.json({
            response,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
