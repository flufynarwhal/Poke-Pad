import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [pokemon, setPokemon] = useState(null)

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
      if (!response.ok) {
        throw new Error(`No pokemon found for ${query}`)
      }
      const data = await response.json();
      console.log(data)
      setPokemon(data)
    } catch (error) {
      console.error(error)
      setPokemon(null)      
    }
  }

  return (
    <>
    <SearchBar 
      onSearch={handleSearch}
    />
    {pokemon && (
      <div>
        <h1>{pokemon.name[0].toUpperCase()}{pokemon.name.slice(1)}</h1>
        <p>
          <strong style={{ fontWeight: 'bold' }}>Height: </strong> 
          <span>{pokemon.height >= 10 ? `${pokemon.height/10}m` : `${pokemon.height*10}cm`} </span>
        </p>
        <p>
          <strong>Weight: </strong> 
          <span>{pokemon.weight >= 10 ? `${pokemon.weight/10}kg` : `${pokemon.weight*100}g`}</span>
        </p>
        <p>
          <strong>Moves: </strong>
          {pokemon.moves.slice(0,4).map((move, index, array)=> (
              <a key={index}>
                {move.move.name}
                {index < array.length - 1 && ', '}
              </a>
            ))}
          
        </p>
        
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <button>Front</button>
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
        <button>Back</button>
        <button>Animation</button>

      </div>
    )}
    
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />

          <img src={reactLogo} className="logo react" alt="React logo" />

      </div>
    </>
  )
}

export default App
