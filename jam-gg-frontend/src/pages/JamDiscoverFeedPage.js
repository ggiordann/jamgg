import React from 'react';
import './JamDiscoverFeedPage.css';

const JamDiscoverFeedPage = () => {
  const mockJams = [
    { id: 1, title: "Late Night Coding Beats", genre: "Lo-Fi Hip Hop", hostName: "DevGuru", currentListeners: 42 },
    { id: 2, title: "Sunrise Yoga Flow", genre: "Ambient", hostName: "ZenMaster", currentListeners: 15 },
    { id: 3, title: "80s Retro Party", genre: "Synthwave", hostName: "RetroFan", currentListeners: 78 },
    { id: 4, title: "Acoustic Cafe Sessions", genre: "Folk", hostName: "SongBird", currentListeners: 22 },
    { id: 5, title: "Deep Focus (Techno)", genre: "Techno", hostName: "DJBinary", currentListeners: 50 },
  ];

  const handleJoinJamClick = (jamId, jamTitle) => {
    console.log(`Join Jam clicked for Jam ID: ${jamId} (Title: ${jamTitle})`);
    // Future: Implement actual join functionality
  };

  return (
    <div className="jam-discover-feed-page">
      <header className="discover-header">
        <h1>Discover New Jams</h1>
        <p className="ai-personalization-note">
          <em>Personalized recommendations by Jam AI (Coming Soon!)</em>
        </p>
      </header>

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
                onClick={() => handleJoinJamClick(jam.id, jam.title)} 
                className="join-jam-button"
              >
                Join Jam
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JamDiscoverFeedPage;
