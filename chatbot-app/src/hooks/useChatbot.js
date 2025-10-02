import { useState } from 'react';
import { laptops } from '../data/laptops.js';

/**
 * Messages are stored in state and move as each question is answered
 * Conversation state tracks the flow: greeting → budget → screenSize → recommendation
 */

// Initial greeting message
const initialMessage = {
  id: 1,
  text: "Hey there! I'd love to help you find the perfect laptop. What do you mainly plan to use it for?\n\nYou can say things like: gaming, work, school, creative projects, or just general use",
  isBot: true,
  timestamp: new Date()
};

// Conversation state management
const initialConversationState = {
  step: 'greeting',
  budget: '',
  useCase: '',
  screenSize: '',
  preferences: []
};

export const useChatbot = () => {
  const [messages, setMessages] = useState([initialMessage]);
  const [conversationState, setConversationState] = useState(initialConversationState);

  // Function to add new message to chat
  const addMessage = (text, isBot) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Make sure to auto-scroll to bottom
    setTimeout(() => {
      const chatContainer = document.querySelector('.overflow-y-auto');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  };

  // Handle errors by staying on current step and asking the question again
  const handleCurrentStepError = () => {
    switch (conversationState.step) {
      case 'greeting':
        addMessage("Sorry, I didn't quite catch that. What do you mainly plan to use your laptop for?\n\nYou can say things like: gaming, work, school, creative projects, or just general use", true);
        break;
      case 'budget':
        addMessage("Sorry, I didn't catch that. Could you give me a rough idea of your budget?\n\nYou can say: under 500, around 1000, or over 1500", true);
        break;
      case 'screenSize':
        addMessage("I didn't catch that. What screen size sounds good to you?\n\nYou can say: 13 inch (small/portable), 15 inch (medium), or 17 inch (large)", true);
        break;
      case 'recommendation':
        addMessage("Sorry, I didn't catch that. Is there anything else you'd like to know about these laptops, or would you like to see other options?\n\nYou can say: more options, other laptops, different choices, or thank you", true);
        break;
    }
  };

  // Function to handle user input and generate bot response
  const handleBotResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();
    
    // Handle empty input
    if (!input || input.length < 2) {
      handleCurrentStepError();
      return;
    }

    const validKeywords = ['laptop', 'computer', 'work', 'gaming', 'budget', 'price', 'student', 
                          'business', 'creative', 'low', 'medium', 'high', 'cheap', 'premium', 
                          'more', 'other', 'different', 'thanks', 'thank', 'bye', 'office', 
                          'school', 'design', 'video', 'photo', 'game', '13', '15', '17', '16', 
                          'small', 'large', 'big', 'portable', 'compact', 'standard', 'inch', 'screen',
                          '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000',
                          '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000',
                          'under', 'over', 'around', 'mid', '$'];
    
    if (!validKeywords.some(keyword => input.includes(keyword))) {
      handleCurrentStepError();
      return;
    }

    // Switch to appropriate handler based on conversation step
    switch (conversationState.step) {
      case 'greeting':
        handleGreetingStep(input);
        break;
      case 'budget':
        handleBudgetStep(input);
        break;
      case 'screenSize':
        handleScreenSizeStep(input);
        break;
      case 'recommendation':
        handleRecommendationStep(input);
        break;
    }
  };

  // Handle use case selection
  const handleGreetingStep = (input) => {
    if (input.includes('gaming') || input.includes('game')) {
      setConversationState(prev => ({ ...prev, useCase: 'gaming', step: 'budget' }));
      addMessage("Nice! Gaming laptops are my specialty. You'll definitely want something with a good graphics card. What's your budget looking like?\n\nYou can say: under 500, around 1000, or over 1500", true);
    } 
    else if (input.includes('work') || input.includes('business') || input.includes('office')) {
      setConversationState(prev => ({ ...prev, useCase: 'work', step: 'budget' }));
      addMessage("Perfect! For work, you'll want something reliable and fast. What's your budget range?\n\nYou can say: under 500, around 1000, or over 1500", true);
    } 
    else if (input.includes('student') || input.includes('school') || input.includes('study')) {
      setConversationState(prev => ({ ...prev, useCase: 'student', step: 'budget' }));
      addMessage("Awesome! Students need something portable and affordable. What's your budget?\n\nYou can say: under 500, around 1000, or over 1500", true);
    } 
    else if (input.includes('creative') || input.includes('design') || input.includes('video') || input.includes('photo')) {
      setConversationState(prev => ({ ...prev, useCase: 'creative', step: 'budget' }));
      addMessage("Great! For creative work, you'll want a really good display and plenty of power. What's your budget?\n\nYou can say: under 500, around 1000, or over 1500", true);
    } 
    else {
      addMessage("I can help you find the perfect laptop for gaming, work, school, or creative projects. What sounds most like what you need?\n\nYou can say: gaming, work, school, creative projects, or just general use", true);
    }
  };

  // Handle budget selection
  const handleBudgetStep = (input) => {
    // Check for high budget indicators first (most specific)
    if (input.includes('high') || input.includes('premium') || input.includes('over') || 
        input.includes('1500') || input.includes('$1500') || input.includes('2000') ||
        input.includes('$2000') || input.includes('3000') || input.includes('$3000')) {
      setConversationState(prev => ({ ...prev, budget: 'high', step: 'screenSize' }));
      addMessage("Excellent! With that budget, you'll have some great options. What screen size do you prefer?\n\nYou can say: 13 inch (small/portable), 15 inch (medium), or 17 inch (large)", true);
    } 
    // Check for medium budget indicators
    else if (input.includes('medium') || input.includes('mid') || input.includes('1000') || 
             input.includes('$1000') || input.includes('800') || input.includes('900') ||
             input.includes('$800') || input.includes('$900') || input.includes('around')) {
      setConversationState(prev => ({ ...prev, budget: 'medium', step: 'screenSize' }));
      addMessage("Perfect! That's a great budget range. What screen size do you prefer?\n\nYou can say: 13 inch (small/portable), 15 inch (medium), or 17 inch (large)", true);
    } 
    // Check for low budget indicators last (most general)
    else if (input.includes('low') || input.includes('cheap') || input.includes('budget') || 
             input.includes('under') || input.includes('500') || input.includes('$500') ||
             input.includes('400') || input.includes('300') || input.includes('200') ||
             input.includes('100') || input.includes('$400') || input.includes('$300')) {
      setConversationState(prev => ({ ...prev, budget: 'low', step: 'screenSize' }));
      addMessage("Got it! Now, what screen size do you prefer? Smaller screens are more portable, larger ones are better for work.\n\nYou can say: 13 inch (small/portable), 15 inch (medium), or 17 inch (large)", true);
    } 
    else {
      addMessage("Could you give me an idea of your budget?\n\nYou can say: under 500, around 1000, or over 1500", true);
    }
  };

  // Handle screen size selection
  const handleScreenSizeStep = (input) => {
    if (input.includes('13') || input.includes('small') || input.includes('portable') || input.includes('compact')) {
      setConversationState(prev => ({ ...prev, screenSize: '13', step: 'recommendation' }));
      addMessage("Nice! 13-inch laptops are super portable and great for carrying around. Let me find the perfect one for you...", true);
      setTimeout(() => recommendLaptop(), 1000);
    } 
    else if (input.includes('15') || input.includes('medium') || input.includes('standard')) {
      setConversationState(prev => ({ ...prev, screenSize: '15', step: 'recommendation' }));
      addMessage("Perfect! 15-inch is the sweet spot - good screen size without being too heavy. Let me find the best option for you...", true);
      setTimeout(() => recommendLaptop(), 1000);
    } 
    else if (input.includes('17') || input.includes('16') || input.includes('large') || input.includes('big') || input.includes('big screen')) {
      setConversationState(prev => ({ ...prev, screenSize: '17', step: 'recommendation' }));
      addMessage("Awesome! Large screens are fantastic for gaming and creative work. Let me find the perfect one for you...", true);
      setTimeout(() => recommendLaptop(), 1000);
    } 
    else {
      addMessage("What screen size sounds good to you?\n\nYou can say: 13 inch (small/portable), 15 inch (medium), or 17 inch (large)", true);
    }
  };

  // Handle post-recommendation interactions
  const handleRecommendationStep = (input) => {
    if (input.includes('more') || input.includes('other') || input.includes('different')) {
      addMessage("Sure thing! Let me show you some other great options:", true);
      setTimeout(() => showAlternatives(), 1000);
    } 
    else if (input.includes('thanks') || input.includes('thank you') || input.includes('bye')) {
      addMessage("You're so welcome! I'm really glad I could help you find the perfect laptop. Feel free to come back if you have any more questions. Good luck with your purchase!", true);
    } 
    else {
      addMessage("Is there anything else you'd like to know about these laptops, or would you like to see other options?\n\nYou can say: more options, other laptops, different choices, or thank you", true);
    }
  };

  // Generate laptop recommendation based on user preferences
  const recommendLaptop = () => {
    const { budget, useCase, screenSize } = conversationState;
    
    // Filter laptops by budget and screen size
    let filteredLaptops = laptops.filter(laptop => {
      const budgetMatch = 
        (budget === 'low' && laptop.id.includes('budget')) ||
        (budget === 'medium' && laptop.id.includes('mid-range')) ||
        (budget === 'high' && (laptop.id.includes('gaming') || laptop.id.includes('premium')));
      
      return budgetMatch && laptop.screenSize === screenSize;
    });
    
    // Fallback to budget match if no screen size match
    if (filteredLaptops.length === 0) {
      filteredLaptops = laptops.filter(laptop => {
        return (budget === 'low' && laptop.id.includes('budget')) ||
               (budget === 'medium' && laptop.id.includes('mid-range')) ||
               (budget === 'high' && (laptop.id.includes('gaming') || laptop.id.includes('premium')));
      });
    }
    
    // Default recommendation if no matches
    if (filteredLaptops.length === 0) {
      filteredLaptops = [laptops[0]]; // Default to first laptop
    }
    
    const recommendedLaptop = filteredLaptops[0];

    // Format recommendation message
    const recommendationText = `Perfect! Based on what you told me, I think the **${recommendedLaptop.name}** (${recommendedLaptop.price}) would be a great fit for you.

**Specs:** ${recommendedLaptop.specs}
**Best for:** ${recommendedLaptop.bestFor}

What do you think? Would you like to see other options or learn more about this one?

You can say: more options, other laptops, different choices, or thank you`;

    addMessage(recommendationText, true);
  };

  // Show alternative laptop options
  const showAlternatives = () => {
    const { budget, screenSize } = conversationState;
    
    // Find alternatives in same budget range with different screen sizes
    const alternatives = laptops.filter(laptop => {
      const budgetMatch = 
        (budget === 'low' && laptop.id.includes('budget')) ||
        (budget === 'medium' && laptop.id.includes('mid-range')) ||
        (budget === 'high' && (laptop.id.includes('gaming') || laptop.id.includes('premium')));
      
      return budgetMatch && laptop.screenSize !== screenSize;
    });

    // Format alternatives message
    let alternativesText = "Here are some other great options in your budget range:\n\n";
    alternatives.forEach(laptop => {
      alternativesText += `**${laptop.name}** (${laptop.price})\n${laptop.specs}\nBest for: ${laptop.bestFor}\n\n`;
    });

    alternativesText += "\nWhat do you think? You can say: more options, other laptops, different choices, or thank you";
    addMessage(alternativesText, true);
  };

  // Reset chat to initial state
  const resetChat = () => {
    setMessages([initialMessage]);
    setConversationState({
      step: 'greeting',
      budget: '',
      useCase: '',
      screenSize: '',
      preferences: []
    });
  };

  // Return hook interface
  return {
    messages,
    conversationState,
    addMessage,
    handleBotResponse,
    resetChat
  };
};
