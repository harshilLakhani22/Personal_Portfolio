# How to Update Your Knowledge Base

## 📁 **File Location**

Your knowledge base is located at: `utils/data/knowledge-base.js`

## 🚀 **Easy Updates**

### **1. Adding New Skills**

```javascript
// In the skills section, add new technologies:
skills: {
  frontend: [
    "React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript (ES6+)",
    "HTML5", "CSS3", "Sass/SCSS", "Tailwind CSS", "Bootstrap", "Material-UI",
    "NEW_SKILL_HERE" // ← Add your new skill here
  ],
  // ... other skill categories
}
```

### **2. Adding New Projects**

```javascript
// In the projects array, add new project:
projects: [
  // ... existing projects
  {
    title: "Your New Project",
    description: "Description of what the project does",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Web Development", // or "AI/ML", "Mobile", etc.
    highlights: ["Key feature 1", "Key feature 2", "Key feature 3"],
  },
];
```

### **3. Adding New Experience**

```javascript
// In the experience array, add new role:
experience: [
  // ... existing experience
  {
    role: "Your New Role",
    company: "Company Name",
    duration: "2023 - Present",
    description: "What you do in this role",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
  },
];
```

### **4. Adding New Education**

```javascript
// In the education array, add new degree:
education: [
  // ... existing education
  {
    degree: "Your New Degree",
    institution: "Institution Name",
    year: "2023",
    description: "Description of the program",
  },
];
```

### **5. Adding New Achievements**

```javascript
// In the achievements array, add new achievement:
achievements: [
  // ... existing achievements
  {
    title: "Your New Achievement",
    organization: "Organization Name",
    description: "Description of the achievement",
  },
];
```

## 🎯 **What Happens After Updates**

1. **Save the file** - Changes are automatically applied
2. **Restart your dev server** if needed: `npm run dev`
3. **Test the chatbot** - Ask about the new information
4. **Deploy to Netlify** - Updates will be live on your portfolio

## 💡 **Pro Tips**

### **Keep Information Current**

- Update skills when you learn new technologies
- Add new projects as you complete them
- Update experience when you change roles
- Add new certifications and achievements

### **Be Specific**

- Use clear, professional language
- Include specific technologies and tools
- Mention quantifiable achievements (e.g., "Reduced load time by 40%")
- Keep descriptions concise but informative

### **Organize Well**

- Group related skills together
- Use consistent formatting
- Keep categories logical and easy to understand

## 🔍 **Testing Your Updates**

After making changes, test the chatbot with questions like:

- "What are Harshil's latest skills?"
- "Tell me about his recent projects"
- "What's his current experience?"
- "What new technologies does he know?"

## 📝 **Example Update**

```javascript
// Before
skills: {
  frontend: ["React.js", "Next.js", "Vue.js"];
}

// After
skills: {
  frontend: ["React.js", "Next.js", "Vue.js", "Svelte", "Solid.js"];
}
```

Now when someone asks "What frontend frameworks does Harshil know?", the chatbot will include Svelte and Solid.js!

## 🚨 **Important Notes**

- **No restart needed** for most changes
- **Changes are immediate** in development
- **Deploy to Netlify** to make updates live
- **Backup your data** before major changes
- **Test thoroughly** after significant updates

## 🆘 **Need Help?**

If you're unsure about how to add something:

1. Look at existing examples in the file
2. Follow the same format and structure
3. Test with the chatbot to make sure it works
4. Ask for help if you need it!

Your knowledge base is now much easier to update and maintain! 🎉
