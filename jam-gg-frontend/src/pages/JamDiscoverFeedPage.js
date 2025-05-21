import React, { useState } from 'react';
import './JamDiscoverFeedPage.css';
import JamDetailModal from '../components/JamDetailModal'; // Import the modal
import PlusButton from '../components/PlusButton'; // Import PlusButton

const JamDiscoverFeedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJam, setSelectedJam] = useState(null);

  // Mock Jams now include more details needed by JamDetailModal, like those in JamPost
  const mockJams = [
    { 
      id: 1, 
      title: "Late Night Coding Beats", 
      genre: "Lo-Fi Hip Hop", 
      hostName: "DevGuru", 
      currentListeners: 42,
      description: "Chill beats to code/study to. All welcome!",
      hostControls: { playPause: true, skip: false, addToQueue: true, volumeControl: false },
      spotifyJamUrl: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M", // Example URL
      liveUserCount: 42 // For JamDetailModal
    },
    { 
      id: 2, 
      title: "Sunrise Yoga Flow", 
      genre: "Ambient", 
      hostName: "ZenMaster", 
      currentListeners: 15,
      description: "Peaceful ambient soundscapes for your morning yoga.",
      hostControls: { playPause: false, skip: false, addToQueue: false, volumeControl: false },
      spotifyJamUrl: "https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa", // Example URL
      liveUserCount: 15 
    },
    { 
      id: 3, 
      title: "80s Retro Party", 
      genre: "Synthwave", 
      hostName: "RetroFan", 
      currentListeners: 78,
      description: "Dust off your leg warmers for some synthwave classics!",
      hostControls: { playPause: true, skip: true, addToQueue: true, volumeControl: true },
      spotifyJamUrl: "https://open.spotify.com/playlist/37i9dQZF1DXdLEN7aqioXM", // Example URL
      liveUserCount: 78
    },
    { 
      id: 4, 
      title: "Acoustic Cafe Sessions", 
      genre: "Folk", 
      hostName: "SongBird", 
      currentListeners: 22,
      description: "Unwind with some soothing acoustic melodies.",
      hostControls: { playPause: true, skip: false, addToQueue: false, volumeControl: true },
      spotifyJamUrl: "https://open.spotify.com/playlist/37i9dQZF1DX0YxoavgsqgB", // Example URL
      liveUserCount: 22
    },
    { 
      id: 5, 
      title: "Deep Focus (Techno)", 
      genre: "Techno", 
      hostName: "DJBinary", 
      currentListeners: 50,
      description: "Intense techno for deep work sessions.",
      hostControls: { playPause: true, skip: true, addToQueue: true, volumeControl: true },
      spotifyJamUrl: "https://open.spotify.com/playlist/37i9dQZF1DX6J5NfMJS675", // Example URL
      liveUserCount: 50
    },
  ];

  const handleJoinJamClick = (jam) => {
    setSelectedJam(jam);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJam(null);
  };

  return (
    <div className="jam-discover-feed-page">
      <header className="discover-header">
        <h1>Discover New Jams</h1>
        <p className="ai-personalization-note">
          <em>Personalized recommendations by Jam AI (Coming Soon!)</em>
        </p>
      </header>

      <div className="discover-actions"> {/* Container for the PlusButton */}
        <PlusButton to="/create-jam" />
      </div>

      <div className="jam-list">
        {mockJams.map((jam) => (
          <div key={jam.id} className="jam-card">
            <div className="jam-card-header">
              <h2 className="jam-title">{jam.title}</h2>
              <span className="jam-genre">{jam.genre}</span>
            </div>
            <div className="jam-card-body">
              <p className="host-info">Hosted by: <span className="host-name">{jam.hostName}</span></p>
              <p className="listener-count">{jam.currentListeners} listeners currently jamming</p>
            </div>
            <div className="jam-card-footer">
              <button 
                onClick={() => handleJoinJamClick(jam)} // Pass the whole jam object
                className="join-jam-button"
              >
                Join Jam
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedJam && (
        <JamDetailModal
          isOpen={isModalOpen}
          onClose={closeModal}
          jam={selectedJam}
        />
      )}
    </div>
  );
};

export default JamDiscoverFeedPage;
