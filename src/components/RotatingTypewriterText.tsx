'use client';

import { useState, useEffect, useMemo } from 'react';

const RotatingTypewriterText = () => {
  const phrases = useMemo(() => [
    'Business Growth',
    'Real Results', 
    'Client Conversions'
  ], []);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      // Typing phase
      if (currentCharIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        }, 150); // Typing speed - 150ms per character
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait a bit then start erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000); // Wait 3 seconds before erasing
        
        return () => clearTimeout(timeout);
      }
    } else {
      // Erasing phase
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        }, 100); // Erasing speed - 100ms per character
        
        return () => clearTimeout(timeout);
      } else {
        // Finished erasing, move to next phrase
        setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [currentPhraseIndex, isTyping, currentCharIndex, phrases]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 gradient-text-animated typewriter-rotating-text">
      {displayText}
    </span>
  );
};

export default RotatingTypewriterText;
