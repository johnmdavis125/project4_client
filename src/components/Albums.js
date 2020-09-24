import React, { useState, useEffect } from 'react';

export default function Albums (props) {
    const [albums, setAlbums] = useState([])

    const getAlbums = async () => {
        try {
            const response = await fetch('http://localhost:3000/albums')
            const data = await response.json()
            setAlbums(data)
            console.log(data)
        } catch(error){
            console.error(error)
        }
    }
        useEffect(() => {
            (async function (){
                    await getAlbums()
                }
            )()
        }, [])
        
    return (
    <div>
        <h1>Albums</h1>

        {albums.map( album => {
            return (
                <div key={album.id} className="album">
                    {/* <img src={album.img_url} /> */}
                    <h3>{ album.title }</h3>
                    <p>{ album.artist }</p>
                    <small>{ album.genre }</small>
                </div>
            )
        })}

    </div>
    )
};