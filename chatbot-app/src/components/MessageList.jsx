import React from 'react';
import { MessageBubble } from './MessageBubble.jsx';

/**
  Container component for displaying chat messages
 */
export const MessageList = ({ messages }) => {
  return (
    // Scrollable container that takes remaining space and adds padding
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {/* Map through messages and render each as a MessageBubble */}
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
};
