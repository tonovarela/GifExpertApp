

import React, { useState } from 'react'


const GifExpertApp = () => {
     const  [categories,setCategories]=useState(['One punch','Samurai X','Dragon ball'])
     const handleAdd =()=>{                                            
          setCategories([...categories,'Hunter']);
     }
    return <>
        <h1>GitExpertApp</h1>
        <button onClick={handleAdd}>Agregar</button>
        <ol>
            { categories.map((category,i)=><li key={i}> {category}</li>) }
        </ol>
    </>
}
export default GifExpertApp;
