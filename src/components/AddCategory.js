import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({ setCategories}) => {
    const [inputValue, setInputValue] = useState('Varela');

    const handleInput =(e)=>{        
        setInputValue(e.target.value)
    }
    const handledSubmit=(e)=>{
        e.preventDefault();        
        if (inputValue.trim().length===0) return;
        
        setCategories(c=>[inputValue,...c])                
        setInputValue("");
    }
    return (
    
            <form onSubmit={handledSubmit} >
            <input 
               type="text"
               onChange={handleInput}
               value={inputValue}/>               
            </form>    
    )
    
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}
