import React from "react";

const MessageItem = ({ username, message, timestamp }) => {
  return (
    <div className="flex items-start justify-between p-4 border-b border-gray-200 bg-white rounded-lg transition-all duration-200">
      <div className="flex flex-col space-y-2">
        <h2 className="font-semibold text-lg text-gray-800">{username}
        <p className="text-gray-800">{message}</p>
        </h2>
      </div>
      <span className="text-sm text-gray-500">{timestamp}</span>
    </div>
  );
};

export default MessageItem;
