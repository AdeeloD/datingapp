// import React from 'react';
// import { Home, Search, Star, MessageSquare, User } from 'lucide-react';

// const BottomNavigation = () => {
//   const [activeTab, setActiveTab] = React.useState('home');

//   const navItems = [
//     { id: 'home', icon: Home, label: 'Home' },
//     // { id: 'search', icon: Search, label: 'Search' },
//     // { id: 'favorites', icon: Star, label: 'Favorites' },
//     // { id: 'messages', icon: MessageSquare, label: 'Messages' },
//     { id: 'profile', icon: User, label: 'Profile' }
//   ];

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
//       <div className="max-w-md mx-auto flex justify-between items-center">
//         {navItems.map(({ id, icon: Icon, label }) => (
//           <button
//             key={id}
//             onClick={() => setActiveTab(id)}
//             className={`flex flex-col items-center pt-2 pb-1 px-3 rounded-lg transition-colors
//               ${activeTab === id 
//                 ? 'text-blue-500' 
//                 : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             <Icon className={`w-6 h-6 ${activeTab === id ? 'stroke-2' : 'stroke-1.5'}`} />
//             <span className="text-xs mt-1">{label}</span>
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default BottomNavigation;

import React from 'react';
import { Home, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname === '/' ? 'home' : 'profile';

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
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