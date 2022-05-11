import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  
  useEffect(() => {
    console.log(category);
    getGifs();

  }, []);

   const getGifs= async()=>{   
     
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7xZCv29kiZKp84v0HSk9DlpUqFoMhr4a&q=${category}&limit=5`;    
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };

    });
    setImages(gifs)
  }
  

  
  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>

        {/* {
          images.map(img => {
            return <GifGridItem
              key={img.id}
              {...img}></GifGridItem>
          })
        } */}

      </div>
    </>

  )
}
