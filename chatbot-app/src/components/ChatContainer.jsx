import React from 'react';
import { ChatHeader } from './ChatHeader.jsx';
import { MessageList } from './MessageList.jsx';
import { ChatInput } from './ChatInput.jsx';

/**
  Main container component for the chatbot interface
 */
export const ChatContainer = ({ messages, inputValue, onInputChange, onSubmit, onReset }) => {
  return (
    // Main container with full screen height and centered layout
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Chat window with fixed dimensions and shadow */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl h-[600px] flex flex-col">
        {/* Header section with title and reset button */}
        <ChatHeader onReset={onReset} />
        
        {/* Scrollable message list area */}
        <MessageList messages={messages} />
        
        {/* Input form at the bottom */}
        <ChatInput
          value={inputValue}
          onChange={onInputChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};
