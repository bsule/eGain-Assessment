import React from 'react';

/**
  Message bubble component
 */
export const MessageBubble = ({ message }) => {
  return (
    // Container that positions the bubble left (bot) or right (user)
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
      {/* Message bubble with conditional styling */}
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          message.isBot
            ? 'bg-gray-200 text-gray-800'  // bot messages: gray background
            : 'bg-blue-600 text-white'     // user messages: blue background
        }`}
      >
        {/* Message content with preserved line breaks */}
        <p className="text-sm whitespace-pre-line">{message.text}</p>
        
        {/* Timestamp with reduced opacity */}
        <p className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};
