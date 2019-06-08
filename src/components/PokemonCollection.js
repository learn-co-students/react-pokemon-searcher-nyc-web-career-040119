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
  render() {
    return (

      <Card.Group itemsPerRow={6}>
        {this.generatePokemonCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
