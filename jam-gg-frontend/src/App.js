import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import JamPost from './components/JamPost';
import JamCreateForm from './components/JamCreateForm';
import ChatRoom from './components/ChatRoom';
import UserProfilePage from './pages/UserProfilePage';
import JamDiscoverFeedPage from './pages/JamDiscoverFeedPage';
import HostInsightsPage from './pages/HostInsightsPage'; // Import HostInsightsPage

// Component for the main page layout
const MainPage = () => {
  const sampleJam = {
    title: "My Awesome Jam Session",
    genre: "Electronic",
    description: "Join us for a live electronic music jam session. All skill levels welcome!",
    hostControls: {
      playPause: true,
      skip: false,
      addToQueue: true,
      volumeControl: true,
    },
    spotifyJamUrl: "https://open.spotify.com/socialsession/xxxxxxxxxxxx", // Placeholder
    liveUserCount: 27, // Add liveUserCount here
  };

  return (
    <div className="main-content-flex">
      <div className="jam-section">
        <JamPost jam={sampleJam} />
        <hr />
        <JamCreateForm />
      </div>
      <div className="chat-section">
        <ChatRoom />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Jam.gg</h1>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/profile/sampleuser">Profile</Link>
            <Link to="/dashboard/insights">Host Insights</Link> {/* Add Host Insights link */}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/discover" element={<JamDiscoverFeedPage />} />
            <Route path="/profile/:username" element={<UserProfilePage />} />
            <Route path="/profile" element={<UserProfilePage />} /> {/* Fallback for /profile */}
            <Route path="/dashboard/insights" element={<HostInsightsPage />} /> {/* Add Host Insights route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
