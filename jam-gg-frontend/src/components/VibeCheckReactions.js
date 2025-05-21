import React, { useState } from 'react';
import './VibeCheckReactions.css';

const VibeCheckReactions = () => {
  const availableReactions = ['👍', '❤️', '🔥', '🎉', '🤔'];
  
  // Mock state for current reaction counts
  const [reactionCounts, setReactionCounts] = useState({
    '👍': 5,
    '❤️': 3,
    '🔥': 10,
    '🎉': 2,
    '🤔': 1,
  });

  const handleReactionClick = (emoji) => {
    console.log(`Vibe Check: ${emoji} clicked`);
    // For now, we just log. In a real app, you might send this to a backend.
    // Optionally, you could increment the local mock count:
    // setReactionCounts(prevCounts => ({
    //  ...prevCounts,
    //  [emoji]: (prevCounts[emoji] || 0) + 1,
    // }));
  };

  return (
    <div className="vibe-check-reactions">
      <h4>Vibe Check!</h4>
      <div className="reaction-buttons">
        {availableReactions.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleReactionClick(emoji)}
            className="reaction-button"
            aria-label={`React with ${emoji}`}
          >
            {emoji}
          </button>
        ))}
      </div>
      <div className="current-vibe-display">
        <h5>Current Vibe:</h5>
        <ul>
          {Object.entries(reactionCounts).map(([emoji, count]) => (
            <li key={emoji}>
              <span className="emoji">{emoji}</span>: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VibeCheckReactions;
