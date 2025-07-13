import React, { useEffect, useState } from "react";
import "./TypingText.css";

const TypingText = ({ text = "", speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="typing-text">
      {displayedText}
      {isTyping && <span className="cursor" />}
    </div>
  );
};

export default TypingText;
