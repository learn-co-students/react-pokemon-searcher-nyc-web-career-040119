import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  // FIND HP VALUE OUT OF ALL THE OTHER STATS
  findHp = (pokemon) => {
    return pokemon.stats.find(stat => stat.name === 'hp').value
  } // END FINDING

  render() {
    // console.log('Pokemon Collection Props', this.props)

    // RENDER POKEMON CARDS
    const renderCards = this.props.pokemons.map(pokemon => { return <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            pictureFront={pokemon.sprites.front}
            pictureBack={pokemon.sprites.back}
            hp={this.findHp(pokemon)}
            // hp={pokemon.stats[5].value}
            />
    }) // END RENDERING


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
