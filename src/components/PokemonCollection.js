import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  //pass name,pics & hp(why not pass id maybe use it) to card component
  // find hp inside pokemon.stats array name === 'hp' and get .value

  render() {
    return (
      <Card.Group itemsPerRow={6}>
{this.props.pokemons.map(pokemon=>{
  const hp=pokemon.stats.find(stat=> stat.name === 'hp').value
    return <PokemonCard
    id={pokemon.id}
    name={pokemon.name}
    frontImg={pokemon.sprites.front}
    backImg={pokemon.sprites.back}
    hp={hp}
    />})

}
      </Card.Group>
    )
  }
}

export default PokemonCollection
