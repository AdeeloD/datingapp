import React, { useState } from 'react';
import { Bell, Lock, Info, LogOut, Trash ,Globe,MapPin} from 'lucide-react';

const Settings = () => {
  const [location, setLocation] = useState(true);
  const [language, setLanguage] = useState('Hungarian');
  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'location') 
      setLocation(checked);
  };
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const handleLogOut = () => {
    // Handle logout action (e.g., clear user data, redirect to login)
    console.log("Logout...");
  };

  const handleDeleteAccount = () => {
    // Handle account deletion logic
    console.log("Delete profile...");
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="space-y-6">
        {/* Snooze mód */}
        
         {/* Nyelv */}
         <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center space-x-3">
            <Globe size={20} />
            <span className="font-semibold">Language</span>
          </div>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="border rounded p-2"
          >
            <option value="Hungarian">Hungarian</option>
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="Russian">Russian</option>
          </select>
        </div>

        {/* Értesítési beállítások */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center space-x-3">
            <Bell size={20} />
            <span className="font-semibold">Notification settings</span>
          </div>
          <button className="text-blue-500 hover:underline">Change</button>
        </div>
        
        {/* Helymeghatározás */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center space-x-3">
            <MapPin size={20} />
            <span className="font-semibold">Location</span>
          </div>
          <input
            type="checkbox"
            checked={location}
            onChange={handleSwitchChange}
            name="location"
            className="toggle-checkbox"
          />
        </div>

        {/* Biztonság és adatvédelem */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center space-x-3">
            <Lock size={20} />
            <span className="font-semibold">Security and Policy</span>
          </div>
          <button className="text-blue-500 hover:underline">Change</button>
        </div>

        {/* Kapcsolat és GYIK */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center space-x-3">
            <Info size={20} />
            <span className="font-semibold">Contact and FAQ</span>
          </div>
          <button className="text-blue-500 hover:underline">Change</button>
        </div>

        {/* Kijelentkezés */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center space-x-3">
            <LogOut size={20} />
            <span className="font-semibold">Logout</span>
          </div>
          <button 
            onClick={handleLogOut} 
            className="text-red-500 hover:underline"
          >
            Kijelentkezés
          </button>
        </div>

        {/* Fiók törlése */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Trash size={20} />
          </div>
          <button 
            onClick={handleDeleteAccount} 
            className="text-red-500 hover:underline"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
