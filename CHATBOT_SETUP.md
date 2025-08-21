# Chatbot Integration Setup Guide

## Overview

This chatbot integration provides a floating chat widget that can answer questions about Harshil's portfolio using AI-powered responses. It supports both local intelligent responses and external LLM services.

## Features

- 🚀 Floating chat widget in bottom-right corner
- 💬 Real-time chat interface with typing indicators
- 🧠 Smart responses based on portfolio data
- 🔄 Conversation persistence (localStorage)
- 🌐 Integration with OpenAI/Anthropic APIs
- 📱 Responsive design with smooth animations
- 🎨 Beautiful UI with gradient themes

## Setup Instructions

### 1. Basic Setup (Local Responses Only)

The chatbot will work immediately with intelligent local responses based on your portfolio data. No additional setup required.

### 2. Enhanced Setup with LLM Services

#### Option A: OpenAI Integration

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Add to your environment variables:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```

#### Option B: Anthropic (Claude) Integration

1. Get an API key from [Anthropic](https://console.anthropic.com/)
2. Add to your environment variables:
   ```bash
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

### 3. Netlify Deployment

1. Add environment variables in Netlify dashboard:
   - Go to Site settings > Environment variables
   - Add your API keys (if using LLM services)
2. Deploy your site

### 4. Customizing Responses

The chatbot automatically uses data from these files:

- `utils/data/personal-data.js` - Personal information
- `utils/data/skills.js` - Skills and technologies
- `utils/data/projects-blog.js` - Project details
- `utils/data/experience.js` - Work experience
- `utils/data/educations.js` - Education background
- `utils/data/achievement-data.js` - Achievements

To add more information about yourself, simply update these data files.

## How It Works

### 1. Local Intelligence

- Keyword-based response generation
- Context-aware answers about skills, projects, experience
- Fallback responses for unknown questions

### 2. LLM Integration (Optional)

- Sends conversation context to AI service
- Provides more natural and detailed responses
- Falls back to local responses if API fails

### 3. User Experience

- Chat widget appears on all pages
- Click to open/close chat interface
- Message history persists during session
- Clear chat option available
- Responsive design for all devices

## Customization Options

### Styling

- Colors: Modify the gradient classes in `ChatWidget.jsx`
- Size: Adjust width/height in the chat interface
- Position: Change the `bottom-6 right-6` classes

### Behavior

- Initial message: Modify the welcome message
- Response delay: Adjust the typing simulation timing
- History persistence: Modify localStorage behavior

### Data Sources

- Add new data files to `utils/data/`
- Import and include in the knowledge base
- Update response generation logic

## Troubleshooting

### Chat not appearing

- Check if `ChatWidget` is imported in `layout-client.jsx`
- Verify no JavaScript errors in browser console

### API responses not working

- Check environment variables are set correctly
- Verify API keys are valid and have credits
- Check network requests in browser dev tools

### Styling issues

- Ensure Tailwind CSS is properly configured
- Check for CSS conflicts with existing styles

## Cost Considerations

### Local Responses

- ✅ Free forever
- ✅ No API limits
- ✅ Instant responses
- ❌ Limited to predefined patterns

### LLM Services

- 💰 Pay per API call
- 🚀 More natural responses
- 🌐 Better conversation flow
- ⚠️ Requires API key management

## Security Notes

- API keys are stored server-side only
- No sensitive data is exposed to the client
- Chat history is stored locally in user's browser
- All API calls go through your server endpoints

## Future Enhancements

- [ ] Voice input/output
- [ ] File sharing capabilities
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Custom training data upload

## Support

For issues or questions about the chatbot integration, check:

1. Browser console for JavaScript errors
2. Network tab for API call failures
3. Environment variable configuration
4. Data file structure and content
