// HARI'S KNOWLEDGE BASE
// This file contains all the information that the chatbot can access
// You can easily add, modify, or remove information here

export const knowledgeBase = {
    // Personal Information
    personal: {
        name: "Harshil",
        title: "Software Developer",
        summary: "A passionate software developer with expertise in full-stack development, modern web technologies, and creative problem-solving.",
        location: "Based in India",
        availability: "Open to new opportunities and collaborations",
        interests: ["Web Development", "Mobile Apps", "AI/ML", "Open Source", "Problem Solving"]
    },

    // Skills and Technologies
    skills: {
        frontend: [
            "React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript (ES6+)",
            "HTML5", "CSS3", "Sass/SCSS", "Tailwind CSS", "Bootstrap", "Material-UI"
        ],
        backend: [
            "Node.js", "Express.js", "Python", "Django", "FastAPI", "PHP", "Laravel",
            "Java", "Spring Boot", "C#", ".NET Core", "Go", "Ruby on Rails"
        ],
        databases: [
            "MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Firebase"
        ],
        cloud: [
            "AWS", "Azure", "Google Cloud Platform", "Heroku", "Vercel", "Netlify"
        ],
        tools: [
            "Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "VS Code", "Postman"
        ],
        mobile: [
            "React Native", "Flutter", "Ionic", "Native Android", "Native iOS"
        ]
    },

    // Projects
    projects: [
        {
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with React frontend and Node.js backend",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
            category: "Web Development",
            highlights: ["User authentication", "Payment integration", "Admin dashboard", "Responsive design"]
        },
        {
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates",
            technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
            category: "Web Development",
            highlights: ["Real-time collaboration", "Drag & drop interface", "Team management", "Progress tracking"]
        },
        {
            title: "AI Chatbot",
            description: "Intelligent chatbot using natural language processing",
            technologies: ["Python", "TensorFlow", "Flask", "NLTK"],
            category: "AI/ML",
            highlights: ["Natural language understanding", "Context awareness", "Multi-language support", "Learning capabilities"]
        }
    ],

    // Experience
    experience: [
        {
            role: "Senior Software Developer",
            company: "Tech Solutions Inc.",
            duration: "2022 - Present",
            description: "Leading development of enterprise web applications and mentoring junior developers",
            achievements: [
                "Reduced application load time by 40%",
                "Implemented CI/CD pipeline reducing deployment time by 60%",
                "Mentored 5 junior developers"
            ]
        },
        {
            role: "Full Stack Developer",
            company: "Digital Innovations",
            duration: "2020 - 2022",
            description: "Developed and maintained multiple client projects using modern web technologies",
            achievements: [
                "Delivered 15+ client projects on time",
                "Improved code quality with automated testing",
                "Collaborated with design and product teams"
            ]
        }
    ],

    // Education
    education: [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Technical University",
            year: "2020",
            description: "Specialized in software engineering and web technologies"
        },
        {
            degree: "Certification in Full Stack Development",
            institution: "Online Platform",
            year: "2021",
            description: "Advanced course covering modern web development technologies"
        }
    ],

    // Achievements and Certifications
    achievements: [
        {
            title: "Best Developer Award",
            organization: "Tech Conference 2023",
            description: "Recognized for innovative project solutions and technical excellence"
        },
        {
            title: "AWS Certified Developer",
            organization: "Amazon Web Services",
            description: "Professional certification in cloud development and deployment"
        },
        {
            title: "Open Source Contributor",
            organization: "GitHub",
            description: "Active contributor to various open source projects"
        }
    ],

    // Work Style and Approach
    workStyle: {
        methodology: "Agile/Scrum development with focus on user experience",
        strengths: [
            "Problem-solving and analytical thinking",
            "Quick learner and technology adoption",
            "Team collaboration and communication",
            "Attention to detail and code quality",
            "Project management and delivery"
        ],
        approach: "User-centric development with emphasis on clean, maintainable code and scalable architecture"
    },

    // Contact and Availability
    contact: {
        availability: "Available for full-time positions, freelance projects, and collaborations",
        responseTime: "Usually responds within 24 hours",
        preferredContact: "Email or LinkedIn for professional inquiries",
        openTo: [
            "Full-time software development roles",
            "Freelance projects",
            "Open source contributions",
            "Technical consulting",
            "Mentoring opportunities"
        ]
    }
};

// Helper function to get specific information
export const getKnowledgeSection = (section) => {
    return knowledgeBase[section] || null;
};

// Helper function to search knowledge base
export const searchKnowledge = (query) => {
    const searchTerm = query.toLowerCase();
    const results = [];

    Object.entries(knowledgeBase).forEach(([section, data]) => {
        if (typeof data === 'string' && data.toLowerCase().includes(searchTerm)) {
            results.push({ section, data });
        } else if (Array.isArray(data)) {
            data.forEach(item => {
                if (typeof item === 'string' && item.toLowerCase().includes(searchTerm)) {
                    results.push({ section, data: item });
                } else if (typeof item === 'object') {
                    Object.values(item).forEach(value => {
                        if (typeof value === 'string' && value.toLowerCase().includes(searchTerm)) {
                            results.push({ section, data: item });
                        }
                    });
                }
            });
        }
    });

    return results;
};

export default knowledgeBase;
