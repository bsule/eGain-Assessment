import React from 'react';

/**
  Input form component for sending messages
 */
export const ChatInput = ({ value, onChange, onSubmit }) => {
  return (
    // Form container with top border and padding
    <form onSubmit={onSubmit} className="p-4 border-t">
      {/* Flex container for input and button */}
      <div className="flex space-x-2">
        {/* Text input field */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        {/* Send button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Send
        </button>
      </div>
    </form>
  );
};
