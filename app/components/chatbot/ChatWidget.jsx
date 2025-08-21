'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend, FiMinimize2, FiRefreshCw } from 'react-icons/fi';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your AI assistant. I can tell you all about Harshil's skills, experience, projects, and more. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Helper function to format timestamp
  const formatTimestamp = (timestamp) => {
    try {
      const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
      return '';
    }
  };

  // Load conversation from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chat-messages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Convert string timestamps back to Date objects
        const messagesWithDates = parsed.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        
        // Only load if messages are from today
        const today = new Date().toDateString();
        const lastMessageDate = new Date(messagesWithDates[messagesWithDates.length - 1]?.timestamp).toDateString();
        if (today === lastMessageDate) {
          setMessages(messagesWithDates);
        }
      } catch (e) {
        console.error('Failed to load chat history:', e);
      }
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 1) { // Don't save just the initial message
      localStorage.setItem('chat-messages', JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        type: 'bot',
        content: "Hi! I'm your AI assistant. I can tell you all about Harshil's skills, experience, projects, and more. What would you like to know?",
        timestamp: new Date()
      }
    ]);
    localStorage.removeItem('chat-messages');
    setError(null);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue.trim(),
          conversationHistory: messages.slice(-5) // Send last 5 messages for context
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Simulate typing delay for better UX
        setTimeout(() => {
          const botMessage = {
            id: Date.now() + 1,
            type: 'bot',
            content: data.response,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        }, 1000);
        
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      setError('Sorry, I\'m having trouble connecting right now. Please try again later.');
      setIsTyping(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="chat-widget-button bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl"
          aria-label="Open chat"
        >
          <FiMessageCircle size={24} />
        </button>
      </div>

      {/* Chat Interface - Made taller */}
      {isOpen && (
        <div className="chat-interface fixed bottom-24 right-6 z-40 w-[28rem] h-[38rem] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col slide-in-from-bottom-2">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Chat with Harshil's Assistant</h3>
              {/* <p className="text-sm opacity-90">Ask me about Harshil!</p> */}
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <FiRefreshCw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Minimize chat"
                title="Minimize"
              >
                <FiMinimize2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close chat"
                title="Close"
              >
                <FiX size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message-item flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Error Message */}
            {error && (
              <div className="message-item flex justify-start fade-in">
                <div className="bg-red-50 text-red-800 border border-red-200 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="message-item flex justify-start fade-in">
                <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Harshil..."
                className="chat-input flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder-gray-500 caret-black"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="chat-button px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <FiSend size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
