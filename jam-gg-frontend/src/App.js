import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import JamPost from './components/JamPost';
import JamCreateForm from './components/JamCreateForm';
import ChatRoom from './components/ChatRoom';
import UserProfilePage from './pages/UserProfilePage';
import JamDiscoverFeedPage from './pages/JamDiscoverFeedPage';
import HostInsightsPage from './pages/HostInsightsPage'; // Import HostInsightsPage
import CreateJamPage from './pages/CreateJamPage'; // Import CreateJamPage

function App() {
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  useEffect(() => {
    document.body.className = theme + '-mode'; // Will add 'dark-mode' or 'light-mode'
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Jam.gg</h1>
          <nav className="main-nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/discover">Discover</NavLink>
            <NavLink to="/profile/sampleuser">Profile</NavLink>
            <NavLink to="/dashboard/insights">Host Insights</NavLink> {/* Add Host Insights link */}
          </nav>
          <button onClick={toggleTheme} className="theme-toggle-button">
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<UserProfilePage />} />
            <Route path="/discover" element={<JamDiscoverFeedPage />} />
            <Route path="/profile/:username" element={<UserProfilePage />} />
            <Route path="/profile" element={<UserProfilePage />} /> {/* Fallback for /profile */}
            <Route path="/dashboard/insights" element={<HostInsightsPage />} /> {/* Add Host Insights route */}
            <Route path="/create-jam" element={<CreateJamPage />} /> {/* Add Create Jam route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
