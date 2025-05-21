import React, { useState } from 'react';
import './JamCreateForm.css';

const JamCreateForm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [spotifyJamUrl, setSpotifyJamUrl] = useState('');
  const [hostControls, setHostControls] = useState({
    playPause: true,
    skip: false,
    addToQueue: true,
    volumeControl: true,
  });

  const handleHostControlChange = (event) => {
    const { name, checked } = event.target;
    setHostControls(prevControls => ({
      ...prevControls,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      genre,
      description,
      spotifyJamUrl,
      hostControls,
      aiSuggestedGenre: "AI Suggestion (Not Implemented)", // Mock data
      aiMoodAnalysis: "AI Analysis (Not Implemented)", // Mock data
    };
    console.log('Jam Creation Form Data:', formData);
    // Here you would typically send the data to a backend or state management
  };

  return (
    <form onSubmit={handleSubmit} className="jam-create-form">
      <h2>Create a New Jam</h2>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="spotifyJamUrl">Spotify Jam URL:</label>
        <input
          type="url"
          id="spotifyJamUrl"
          value={spotifyJamUrl}
          onChange={(e) => setSpotifyJamUrl(e.target.value)}
          placeholder="https://open.spotify.com/socialsession/..."
        />
      </div>

      <fieldset className="form-group host-controls-group">
        <legend>Host Controls:</legend>
        <div>
          <input
            type="checkbox"
            id="playPause"
            name="playPause"
            checked={hostControls.playPause}
            onChange={handleHostControlChange}
          />
          <label htmlFor="playPause">Guests can Play/Pause</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="skip"
            name="skip"
            checked={hostControls.skip}
            onChange={handleHostControlChange}
          />
          <label htmlFor="skip">Guests can Skip</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="addToQueue"
            name="addToQueue"
            checked={hostControls.addToQueue}
            onChange={handleHostControlChange}
          />
          <label htmlFor="addToQueue">Guests can Add to Queue</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="volumeControl"
            name="volumeControl"
            checked={hostControls.volumeControl}
            onChange={handleHostControlChange}
          />
          <label htmlFor="volumeControl">Guests can Control Volume</label>
        </div>
      </fieldset>

      <div className="form-group ai-features">
        <h3>AI Enhancements (Mock)</h3>
        <div>
          <label htmlFor="aiSuggestedGenre">AI Suggested Genre:</label>
          <input type="text" id="aiSuggestedGenre" value="Electronic Dance Music" disabled />
        </div>
        <div>
          <label htmlFor="aiMoodAnalysis">AI Mood Analysis:</label>
          <input type="text" id="aiMoodAnalysis" value="Upbeat, Energetic" disabled />
        </div>
      </div>

      <button type="submit" className="submit-button">Create Jam</button>
    </form>
  );
};

export default JamCreateForm;
