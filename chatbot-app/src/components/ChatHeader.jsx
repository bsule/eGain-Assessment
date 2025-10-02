import React from 'react';

/**
  Header component for the chatbot interface
  Chatbot title, description, and a reset button.
 */
export const ChatHeader = ({ onReset }) => {
  return (
    // Header container
    <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
      {/* Left side: Title and description */}
      <div>
        <h1 className="text-xl font-bold">Laptop Assistant</h1>
        <p className="text-blue-100 text-sm">Helping you find the perfect laptop</p>
      </div>
      
      {/* Right side: Reset button */}
      <button
        onClick={onReset}
        className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm transition-colors"
      >
        Reset Chat
      </button>
    </div>
  );
};
