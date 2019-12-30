import React from 'react';
import './Search.css';

interface Props {
    handleChange: any,
    placeholder: string
}

const Search = (props : Props) => {

    console.log(props);

    return(
        <>
          <input 
            className = "search"
            type = "search" 
            placeholder = { props.placeholder } 
            onChange = { props.handleChange }
          />
        </>
    )

}

export default Search;