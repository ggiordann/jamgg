import React from 'react';
import JamCreateForm from '../components/JamCreateForm';
import './CreateJamPage.css';

const CreateJamPage = () => {
  return (
    <div className="create-jam-page">
      <header className="create-jam-header">
        <h1>Create a New Jam</h1>
        <p>Fill out the details below to start your own jam session!</p>
      </header>
      <div className="form-container">
        <JamCreateForm />
      </div>
    </div>
  );
};

export default CreateJamPage;
