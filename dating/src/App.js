

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Messages from './screens/Messages';
import BottomNavigation from './components/TabNav';
import Settings from './screens/Settings';


const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="min-h-screen pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
          <BottomNavigation />
        </div>
      </div>
    </BrowserRouter>
  )
}

function App() {
  return (
    <Navigation />
  );
}

export default App;