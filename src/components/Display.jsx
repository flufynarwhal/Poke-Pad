import React from 'react'

export default function Display() {
    return (
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
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
              <button>Front</button>
              <button>Back</button>
              <button>Animation</button>
      
            </div>
          )}
    )
}