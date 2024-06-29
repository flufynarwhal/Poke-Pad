import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSearch = () => {
        onSearch(query)
    }
   
    return (
        <div className='poke--search'>
            <input 
                type="text" 
                value={query}
                onChange={handleInputChange}
                placeholder='Search for a Pokémon'        
            />
            <button
                onClick={handleSearch}
                >Search
            </button>
        </div>
    )

}

export default SearchBar