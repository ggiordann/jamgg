import React, { useState, useEffect } from 'react';
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { user: "Alice", text: "Hey everyone! Ready to jam?", timestamp: "10:00 AM" },
    { user: "Bob", text: "Yeah! What genre are we thinking?", timestamp: "10:01 AM" },
    { user: "CurrentUser", text: "I'm thinking some lo-fi hip hop.", timestamp: "10:02 AM" },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messageDisplayRef = React.useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messageDisplayRef.current) {
      messageDisplayRef.current.scrollTop = messageDisplayRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const now = new Date();
    const newMessageObj = {
      user: "CurrentUser", // Hardcoded for now
      text: newMessage.trim(),
      timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prevMessages => [...prevMessages, newMessageObj]);
    setNewMessage('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent newline in input
      handleSendMessage();
    }
  };

  return (
    <div className="chat-room">
      <h3>Live Chat</h3>
      <div className="messages-display" ref={messageDisplayRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === 'CurrentUser' ? 'current-user-message' : 'other-user-message'}`}>
            <span className="message-user">{msg.user}: </span>
            <span className="message-text">{msg.text}</span>
            <span className="message-timestamp">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="message-input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
