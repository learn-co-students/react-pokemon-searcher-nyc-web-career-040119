import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  // RENDER POKEMON CARDS => BEST PRACTICE!
  renderCards = () => {
    return this.props.pokemons.map(pokemon => {
      return <PokemonCard poke={pokemon} key={pokemon.id}/>
    })
  } // END RENDERING



  render() {
    // console.log('Pokemon Collection Props', this.props)

    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
        { /* renderCards */}
        {this.renderCards()}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
