import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    console.log('Pokemon Collection Props', this.props)

    const renderCards = this.props.pokemons.map(pokemon => { return <Card.Group>
            <PokemonCard
              key={pokemon.id}
              itemsPerRow={6}
              name={pokemon.name}
              picture={pokemon.sprites.front}
              hp={pokemon.stats[5].value} />
          </Card.Group>
    })

    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        { renderCards }
      </div>
    )
  }
}

export default PokemonCollection
