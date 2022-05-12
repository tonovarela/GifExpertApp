

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch'])
    return <>
        <h1>GitExpertApp</h1>
        <AddCategory setCategories={setCategories}></AddCategory>
        <ol>
            {categories.map((category, i) =>
            <div>            
                <GifGrid  category={category}></GifGrid>
            </div>
            )}
        </ol>
    </>
}
export default GifExpertApp;
