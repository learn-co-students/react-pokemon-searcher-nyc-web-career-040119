import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch(API)
    .then(r=>r.json())
    .then(pokemon=>{
      this.setState({
        pokemon
      })
    })
  }

  searching = (e, { value }) => {
    // console.log(e.currentTarget.value);
    this.setState({
      searchTerm: value
    })
  }

  addPokemon = (poke) => {
    this.setState({
      pokemon: [...this.state.pokemon, poke]
    })
  }

  render() {
    // console.log("index", this.state.pokemons);
    const { pokemon } = this.state
    const filteredPoke =  this.state.pokemon.filter(p => {
      const set = this.state.searchTerm.toLowerCase()
      return (p.types.join(" ").includes(set) || p.name.includes(set))
    })
    // console.log(filteredPoke);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.searching,500)} showNoResults={false} />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <PokemonCollection pokemon={filteredPoke.length > 0 ? filteredPoke : pokemon}/>
      </div>
    )
  }
}

export default PokemonPage
