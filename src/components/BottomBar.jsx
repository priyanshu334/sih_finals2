// BottomBar.js

import React from 'react';
import { FaHome, FaUserFriends, FaComments } from 'react-icons/fa';

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-500 text-white p-4 flex justify-around items-center">
      <div className="cursor-pointer">
        <FaHome size={24} />
        <p className="text-xs">Home</p>
      </div>
      <div className="cursor-pointer">
        <FaUserFriends size={24} />
        <p className="text-xs">Therapists</p>
      </div>
      <div className="cursor-pointer">
        <FaComments size={24} />
        <p className="text-xs">Chat</p>
      </div>
    </div>
  );
};

export default BottomBar;
