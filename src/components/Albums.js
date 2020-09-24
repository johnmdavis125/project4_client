import React, { useState, useEffect } from 'react';

export default function Albums (props) {
    const getAlbums = async () => {
        try {
            const response = await fetch('http://localhost:3000/albums')
            const data = await response.json()
            console.log(data)
        } catch(error){
            console.error(error)
        }
    }
        useEffect(() => {
            (
                async function (){
                    await getAlbums()
                }
            )()
        }, [])
        
    return (
        <h1>Albums</h1>
    )
};