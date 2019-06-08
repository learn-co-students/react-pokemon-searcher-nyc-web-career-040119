import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  generatePokemonCard = () => {
    return this.props.pokemons.map(pokemon => (
        <PokemonCard
          pokeId={pokemon.id}
          key={pokemon.name}
          name={pokemon.name}
          hp={pokemon.hp}
          frontSprite={pokemon.sprites.front}
          backSprite={pokemon.sprites.back}

         />
      )
    )
  }
    generateSearchCard = () => {
      return this.props.results.map(result => (
        <PokemonCard
          pokeId={result.id}
          key={result.name}
          name={result.name}
          hp={result.hp}
          frontSprite={result.sprites.front}
          backSprite={result.sprites.back}

         />
       )
     )
  }
  render() {
    const resultsArrayLength = this.props.results.length
    return (

      <Card.Group itemsPerRow={6}>
      {(resultsArrayLength > 0)?(this.generateSearchCard()):(this.generatePokemonCard())}
      </Card.Group>
    )
  }
}

export default PokemonCollection
