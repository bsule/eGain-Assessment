
import React, { useState } from 'react';
import { useChatbot } from './hooks/useChatbot.js';
import { ChatContainer } from './components/ChatContainer.jsx';

function App() {
  const [inputValue, setInputValue] = useState('');
  const { messages, addMessage, handleBotResponse, resetChat } = useChatbot();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addMessage(inputValue, false);
    handleBotResponse(inputValue);
    setInputValue('');
  };

  return (
    <ChatContainer
      messages={messages}
      inputValue={inputValue}
      onInputChange={setInputValue}
      onSubmit={handleSubmit}
      onReset={resetChat}
    />
  );
}

export default App;
