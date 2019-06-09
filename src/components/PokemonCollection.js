import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    console.log('Pokemon Collection Props', this.props)

    const renderCards = this.props.pokemons.map(pokemon => { return <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            picture={pokemon.sprites.front}
            hp={pokemon.stats[5].value} />
    })

    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
        { renderCards }
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
