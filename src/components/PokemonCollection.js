import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  eachPokemon = () => {
    return this.props.pokemon.map(poke=>{
      return <PokemonCard poke={poke} key={poke.name} />
    })
  }

  render() {
    console.log("collection", this.props);
    return (
      <Card.Group itemsPerRow={6}>
        {this.eachPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
