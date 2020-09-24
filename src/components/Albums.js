import React from 'react';

export default function Albums (props) {        
    return (
    <div>
        <h1>Albums</h1>

        {props.albums.map( album => {
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