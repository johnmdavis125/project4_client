import React from 'react';
import './App.css';
import Albums from './components/Albums.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav>
          <h4>Add an Album!</h4>
          <form>
            <label htmlFor="title">Album Title</label>
            <input type="text" id="title" />
            <label htmlFor="artist">Artist Name</label>
            <input type="text" id="artist" />
            <label htmlFor="genre">Genre</label>
            <input type="text" id="genre" />
            <label htmlFor="img_url">Album Cover url</label>
            <input type="text" id="img_url" />
          </form>
        </nav>
        <main>
          <Albums />
        </main>
        <aside></aside>
      </div>
      <footer />
    </div>
  );
}

export default App;
