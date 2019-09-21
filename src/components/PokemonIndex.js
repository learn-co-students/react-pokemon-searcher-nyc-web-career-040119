import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  // set sate and componentDidMount do fetch all pokemons
  // pass fetched pokemons down to collection component
  state = {
    pokemons: [],
    searchInput: ''
  }

  componentDidMount(){
     fetch(API)
     .then(res => res.json())
     .then(pokemons => this.setState({
       pokemons: pokemons
     })
    )
  }

updateSearchInput=(e)=>{
  // console.log(e.target.value)
  this.setState({
    searchInput: e.target.value
  })
}

// the pokemon to add: the state from the form
// pass callback so that can grab newPokemon from callback(only way get sth. from child)
addPokemon=(newPokemon)=>{
  // should add the newPokemon to this.state.pokemons(setState)
  this.setState({
    pokemons: [...this.state.pokemons, newPokemon]
  })
}

  render() {
    // console.log(this.state.pokemons)
    // save filter to a variable (indexOf('')=>0 return all pokemons)
    const filteredPokemon=this.state.pokemons.filter(pokemon=>{
    return  pokemon.name
      .toLowerCase()
      .indexOf(this.state.searchInput.toLowerCase()) !== -1
    })
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onSearchChange={this.updateSearchInput} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={filteredPokemon} />
      </div>
    )
  }
}

export default PokemonPage
