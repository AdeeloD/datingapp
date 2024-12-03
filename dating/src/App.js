

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Profile from './screens/Profile';
import BottomNavigation from './components/TabNav';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="min-h-screen pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
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