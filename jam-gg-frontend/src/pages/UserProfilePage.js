import React from 'react';
import './UserProfilePage.css';
import PlusButton from '../components/PlusButton'; // Import PlusButton

const UserProfilePage = () => {
  // Mock data
  const userData = {
    username: "SampleUser",
    profilePictureUrl: "https://via.placeholder.com/150", // Placeholder image URL
    favoriteGenres: ["Lo-Fi", "Indie Pop", "Synthwave", "Chillhop"],
    spotifyProfileUrl: "https://open.spotify.com/user/exampleuser", // Placeholder Spotify profile
  };

  const hostedJams = [
    { id: 1, title: "Chill Beats to Study To - Vol. 10" },
    { id: 2, title: "Indie Acoustic Night" },
    { id: 3, title: "Retro Synthwave Vibes" },
  ];

  const joinedJams = [
    { id: 101, title: "Late Night Lo-Fi Cafe" },
    { id: 102, title: "Electronic Explorers Radio" },
    { id: 103, title: "Global Groove Collective" },
  ];

  const handleEditProfileClick = () => {
    console.log("Edit Profile clicked for user:", userData.username);
    // Future: Implement actual profile editing functionality (e.g., open a modal or navigate to an edit page)
  };

  return (
    <div className="user-profile-page">
      <header className="profile-header">
        <div className="profile-picture-container">
          <img src={userData.profilePictureUrl} alt={`${userData.username}'s profile`} className="profile-picture" />
        </div>
        <div className="user-info-summary">
          <h1>{userData.username}</h1>
          <a href={userData.spotifyProfileUrl} target="_blank" rel="noopener noreferrer" className="spotify-profile-link">
            Spotify Profile
          </a>
        </div>
        <button onClick={handleEditProfileClick} className="edit-profile-button">
          Edit Profile
        </button>
      </header>

      <div className="profile-actions"> {/* Container for the PlusButton */}
        <PlusButton to="/create-jam" />
      </div>

      <section className="profile-details">
        <div className="favorite-genres card">
          <h2>Favorite Genres</h2>
          <ul>
            {userData.favoriteGenres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>

        <div className="hosted-jams card">
          <h2>Hosted Jams</h2>
          <ul>
            {hostedJams.map((jam) => (
              <li key={jam.id}>{jam.title}</li>
            ))}
          </ul>
          {hostedJams.length === 0 && <p>No jams hosted yet.</p>}
        </div>

        <div className="joined-jams card">
          <h2>Frequently Joined Jams</h2>
          <ul>
            {joinedJams.map((jam) => (
              <li key={jam.id}>{jam.title}</li>
            ))}
          </ul>
          {joinedJams.length === 0 && <p>No jams joined recently.</p>}
        </div>
      </section>
    </div>
  );
};

export default UserProfilePage;
