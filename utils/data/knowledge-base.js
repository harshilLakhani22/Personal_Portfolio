// HARI'S KNOWLEDGE BASE
// This file contains all the information that the chatbot can access

// HARI'S UPDATED KNOWLEDGE BASE
// Friendly, recruiter-focused, and conversational content

export const knowledgeBase = {
    // Personal Info
    personal: {
        name: "Harshil Lakhani",
        tagline: "Hi, I’m Harshil! A passionate software developer who loves building impactful and scalable solutions.",
        summary: "I specialize in full-stack development, mobile apps, and AI solutions. Always curious, I love exploring new technologies, hackathons, and building products that make a real difference.",
        location: "Based in India",
        availability: "Open to exciting opportunities and collaborations",
        interests: [
            "Building web & mobile apps",
            "Exploring AI tools (LLMs, AI agents, Cursor, n8n)",
            "Hackathons",
            "Problem-solving and coding challenges"
        ]
    },

    // Top Skills
    skills: {
        core: ["MERN Stack", "Flutter", "DSA (230+ LeetCode problems in Java)", "Prompt Engineering", "Communication (IELTS 7 Band)"],
        frontend: ["React.js", "Next.js", "Flutter", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
        others: ["Postman", "Git & GitHub", "RESTful APIs", "State Management (GetX)"]
    },

    // Projects (Priority Order)
    projects: [
        {
            title: "OrganiX2.0",
            description: "An end-to-end supply chain system for farmers and fertilizer distribution authorities in Navsari District.",
            technologies: ["Node.js", "Express.js", "MongoDB", "Next.js", "React Native"],
            highlights: [
                "Designed apps for farmers and a hierarchical admin panel for suppliers",
                "Implemented land-based farmer verification and role-based access",
                "Built an admin system for verification, allocation, and distribution"
            ],
            link: "https://github.com/Grinders2-0/organix-new-backend"
        },
        {
            title: "Calorys AI",
            description: "AI-powered calorie tracking app with meal logging and personalized nutrition.",
            technologies: ["Flutter", "Node.js", "Express.js", "Firebase"],
            highlights: [
                "Developed a cross-platform Flutter app with responsive UI",
                "Implemented Firebase Authentication and Analytics",
                "Integrated REST APIs and GetX for state management"
            ],
            link: "https://apps.apple.com/us/app/calorys-ai-calorie-counter/id6502638992"
        },
        {
            title: "NextGenLearn",
            description: "A personalized e-learning system using machine learning for tailored content.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python"],
            highlights: [
                "Designed dependency tree model for learning paths",
                "JWT-secured UI for smooth and secure user access",
                "Integrated ML algorithms like Random Forest for recommendations"
            ],
            link: "https://github.com/Grinders2-0/maverick-education"
        },
        {
            title: "Coonch Media",
            description: "A social media platform with content purchase options.",
            technologies: ["Flutter", "Node.js", "MySQL"],
            highlights: [
                "Built with MVC architecture and GetX for state management",
                "Features user authentication, content posting, free & paid content",
                "Integrated API for user search, post filtering, and subscriptions"
            ],
            link: "https://apps.apple.com/in/app/coonch/id1610764736"
        },
        {
            title: "YouTube with Twitter Backend",
            description: "A backend project combining features of YouTube and Twitter.",
            technologies: ["Node.js", "Express.js", "MongoDB", "React (frontend in progress)", "Aggregation Pipeline"],
            highlights: [
                "Advanced backend design with MongoDB aggregation",
                "Implemented professional backend patterns and best practices"
            ],
            link: "https://github.com/harshilLakhani22/youtube-with-twitter"
        }
    ],

    // Experience
    experience: [
        {
            role: "Full-Stack Developer Intern",
            company: "CoderBabu Infotech",
            duration: "Jan 2025 - Apr 2025",
            description: "Worked as a Flutter developer on Calorys AI app and contributed to Node.js backend for a college management system.",
            achievements: [
                "Developed core features of Calorys AI using Flutter and GetX",
                "Integrated REST APIs and Firebase Authentication",
                "Worked on backend APIs and database design for college management system"
            ]
        }
    ],

    // Education
    education: [
        {
            degree: "B.E. in Computer Engineering",
            institution: "Shree Swami Atmanand Saraswati Institute of Technology",
            university: "Gujarat Technological University",
            year: "2021 - 2025"
        }
    ],

    // Achievements
    achievements: [
        { title: "SSIP Hackathon Winner", description: "Built OrganiX solution for farmers." },
        { title: "Maverick AI Challenge Hackathon Finalist", description: "Worked on AI-driven e-learning system (NextGenLearn)." },
        { title: "Solved 230+ DSA Problems on LeetCode", description: "Strong problem-solving skills in Java." },
        { title: "IELTS 7 Band Overall", description: "Excellent communication skills." },
        { title: "Co-Chief of Techno Community, SSASIT", description: "Led community initiatives and tech events." },
        { title: "Event Organizer for Digital Detective, Vaividhya’23", description: "Organized flagship techfest event." }
    ],

    // Contact
    contact: {
        linkedin: "https://www.linkedin.com/in/harshil-lakhani-21428a22b/",
        message: "You can connect with Harshil on LinkedIn or through the contact form on this website."
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
