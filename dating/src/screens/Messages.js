import React from "react";
import MessageItem from "../components/MessageItem";

const Messages = () => {
  const messages = [
    { username: "Kimbo", message: "Hey! How are you?", timestamp: "2024-12-15 10:00" },
    { username: "Ame", message: "Hello! What's up?", timestamp: "2024-12-14 09:30" },
    { username: "June", message: "Are we meeting tonight?", timestamp: "2024-12-13 17:45" },
  ];

  return (
    <div className="min-h-screen bg-red-500 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Messages</h1>
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <MessageItem 
            key={index}
            username={msg.username}
            message={msg.message}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
