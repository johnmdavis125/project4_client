import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Albums from './components/Albums.js';

function App() {
  const [albums, setAlbums] = useState([])
  const [formInputs, updateFormInputs] = useState({
    title: '',
    artist: '',
    genre: '',
    // img_url: ''
})

const getAlbums = async () => {
  try{
      const response = await fetch('http://localhost:3000/albums')
      const data = await response.json()
      setAlbums(data)
      console.log(data)
  } catch(error){
      console.error(error)
  }
}
  useEffect(
    () => {
      (async function (){
              await getAlbums();
          }
      )()
  }, [])

  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, { 
      [event.target.id]: event.target.value })
    updateFormInputs(updatedFormInputs);
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3000/albums', formInputs
      );
      const createdAlbum = response.data
      await updateFormInputs({
        title: '',
        artist: '',
        genre: ''
        // img_url: ''
      })
      await setAlbums([createdAlbum, ...albums])
    }catch(error){
      console.error(error)
    }
    // console.log(formInputs)
  }

  return (
    <div className="App">
      <div className="container">
        <nav>
          <h4>Add an Album!</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Album Title</label>
            <input
            type="text"
            id="title"
            value={formInputs.title}
            onChange={handleChange} 
            />
            <label htmlFor="artist">Artist Name</label>
            <input
            type="text"
            id="artist"
            value={formInputs.artist}
            onChange={handleChange} />
            <label htmlFor="genre">Genre</label>
            <input
            type="text"
            id="genre"
            value={formInputs.genre}
            onChange={handleChange} />
            {/* <label htmlFor="img_url">Album Cover url</label>
            <input
            type="text"
            id="img_url"
            value={formInputs.img_url}
            onChange={handleChange} /> */}
            <input type="submit" className="submit" />
          </form>
        </nav>
        <main>
          <Albums albums={albums}/>
        </main>
        <aside></aside>
      </div>
      <footer />
    </div>
  );
}

export default App;
