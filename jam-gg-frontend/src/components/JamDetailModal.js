import React, { useState, useEffect } from 'react';
import './JamDetailModal.css';
import VibeCheckReactions from './VibeCheckReactions';

const JamDetailModal = ({ isOpen, onClose, jam }) => {
  const [currentLiveUsers, setCurrentLiveUsers] = useState(jam ? jam.liveUserCount : 0);

  useEffect(() => {
    if (!jam) return;

    setCurrentLiveUsers(jam.liveUserCount); // Initialize with passed jam's liveUserCount

    // Mock real-time update for live user count
    const interval = setInterval(() => {
      setCurrentLiveUsers(prevUsers => {
        const fluctuation = Math.floor(Math.random() * 3) - 1;
        const newCount = prevUsers + fluctuation;
        return newCount < 0 ? 0 : newCount;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [jam]); // Depend on jam object itself

  if (!isOpen || !jam) {
    return null; // Don't render if not open or no jam data
  }

  const { title, genre, description, hostControls, spotifyJamUrl } = jam;

  return (
    <div className={`jam-detail-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
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
          {hostControls ? (
            <ul>
              <li>Guests can Play/Pause: {hostControls.playPause ? 'Yes' : 'No'}</li>
              <li>Guests can Skip: {hostControls.skip ? 'Yes' : 'No'}</li>
              <li>Guests can Add to Queue: {hostControls.addToQueue ? 'Yes' : 'No'}</li>
              <li>Guests can Control Volume: {hostControls.volumeControl ? 'Yes' : 'No'}</li>
            </ul>
          ) : <p>Host controls information not available.</p>}
        </div>
        <VibeCheckReactions />
        <div className="spotify-jam">
          <h3>Spotify Jam:</h3>
          {spotifyJamUrl ? (
            <iframe
              src={spotifyJamUrl.replace("open.spotify.com/", "open.spotify.com/embed/")}
              width="100%" // Make it responsive
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
    </div>
  );
};

export default JamDetailModal;
