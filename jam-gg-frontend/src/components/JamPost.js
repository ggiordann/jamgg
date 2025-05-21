import React, { useState, useEffect } from 'react';
import './JamPost.css';
import VibeCheckReactions from './VibeCheckReactions';

const JamPost = ({ jam }) => {
  if (!jam) {
    return <div className="jam-post">No jam data provided.</div>;
  }

  const { title, genre, description, hostControls, spotifyJamUrl, liveUserCount = 0 } = jam;
  const [currentLiveUsers, setCurrentLiveUsers] = useState(liveUserCount);

  useEffect(() => {
    // Mock real-time update for live user count
    const interval = setInterval(() => {
      setCurrentLiveUsers(prevUsers => {
        // Fluctuate by -1, 0, or 1
        const fluctuation = Math.floor(Math.random() * 3) - 1;
        const newCount = prevUsers + fluctuation;
        return newCount < 0 ? 0 : newCount; // Ensure count doesn't go below 0
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="jam-post">
      <div className="jam-post-header">
        <h2>{title}</h2>
        <div className="live-user-count">
          <span className="live-indicator">●</span> Live Listeners: {currentLiveUsers}
        </div>
      </div>
      <p className="genre">Genre: {genre}</p>
      <p className="description">{description}</p>
      <div className="host-controls">
        <h3>Host Controls:</h3>
        <ul>
          <li>Guests can Play/Pause: {hostControls && hostControls.playPause ? 'Yes' : 'No'}</li>
          <li>Guests can Skip: {hostControls && hostControls.skip ? 'Yes' : 'No'}</li>
          <li>Guests can Add to Queue: {hostControls && hostControls.addToQueue ? 'Yes' : 'No'}</li>
          <li>Guests can Control Volume: {hostControls && hostControls.volumeControl ? 'Yes' : 'No'}</li>
        </ul>
      </div>
      <VibeCheckReactions /> {/* Add the VibeCheckReactions component here */}
      <div className="spotify-jam">
        <h3>Spotify Jam URL:</h3>
        {spotifyJamUrl ? (
          <iframe
            src={spotifyJamUrl.replace("open.spotify.com/", "open.spotify.com/embed/")}
            width="300"
            height="380"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            title="Spotify Jam"
          ></iframe>
        ) : (
          <p>No Spotify Jam URL provided.</p>
        )}
      </div>
    </div>
  );
};

export default JamPost;
