import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const typingTextRef = useRef<HTMLParagraphElement>(null);
  const fullText = "Expertly crafted CV, customised Cover Letter, optimised LinkedIn Profile, and Portfolio Website designed to get you noticed globally.";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let currentIndex = 0;
    let restartTimeout: NodeJS.Timeout;
    
    // Function to handle typing animation
    const handleTyping = () => {
      if (isTyping) {
        // Typing forward
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          // When typing is complete, wait 5 seconds before resetting
          clearInterval(typingInterval);
          
          restartTimeout = setTimeout(() => {
            currentIndex = 0;
            setDisplayText("");
            
            // Start typing again after a brief pause
            typingInterval = setInterval(handleTyping, 50);
          }, 5000); // Wait 5 seconds before restarting
        }
      }
    };
    
    // Start the typing animation
    typingInterval = setInterval(handleTyping, 50);
    
    // Cleanup function
    return () => {
      clearInterval(typingInterval);
      clearTimeout(restartTimeout);
    };
  }, [isTyping, fullText]);

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
          Elevate Your Career with a{" "}
          <span className="text-red-600">Winning Resume!</span>
        </h1>

        <div className="max-w-xl text-lg md:text-xl mb-8 min-h-[80px]">
          <p ref={typingTextRef} className="text-gray-800">
            {displayText}
            <span className="typing-cursor inline-block ml-1 w-[2px] h-5 bg-red-600 animate-pulse"></span>
          </p>
        </div>

        <a
          href="https://wa.me/254706874794" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white font-montserrat font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors"
        >
          Start Your Journey Today!
        </a>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <a href="https://wa.me/254706874794" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.imgur.com/NLjjHMk.png"
            alt="Professional resume services"
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </a>
      </div>
    </div>
  );
}
