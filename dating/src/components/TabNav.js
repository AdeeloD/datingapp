import React from 'react';
import { Heart, Send, Settings, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const activeTab = 
      location.pathname === '/' 
    ? 'home' 
    : location.pathname === '/profile'
    ? 'profile'
    : location.pathname === '/messages'
    ? 'messages'
    :location.pathname==='/settings'
    ? 'settings'
    : '';

  const navItems = [
    { id: 'home', icon: Heart, label: 'Swipe', path: '/' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
    { id: 'messages', icon: Send, label: 'Messages', path: '/messages' },
    { id:'settings',icon:Settings,label: 'Settings', path:'/settings'}
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map(({ id, icon: Icon, label, path }) => (
          <button
            key={id}
            onClick={() => navigate(path)}
            className={`flex flex-col items-center pt-2 pb-1 px-3 rounded-lg transition-colors
              ${activeTab === id
                ? 'text-red-600 '
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <Icon className={`w-6 h-6 ${activeTab === id ? 'stroke-2' : 'stroke-1.5'}`} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
