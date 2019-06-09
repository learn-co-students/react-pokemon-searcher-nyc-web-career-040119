import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    currSearch: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(pokemons => this.setState({pokemons, currSearch: pokemons}))
  }

  pokemonSearch = e => {
    // I COULDN'T FIND A WAY TO GET e.persist() TO WORK WITH DEBOUNCE
    const pokeInput = document.querySelector("#pokemon-search-input").value
    if (pokeInput === "") {
      this.setState({currSearch: this.state.pokemons})
    } else if (pokeInput.substr(pokeInput.length - 2, 2) === "hp") {
      const filterPokes = this.state.pokemons.filter(poke => {
        const pokeHp = poke.stats.find(stat => stat.name === "hp")

        return parseInt(pokeInput.slice(0, pokeInput.length-2)) === pokeHp.value
      })

      this.setState({currSearch: filterPokes})
    } else {
      const pokeRegex = new RegExp(pokeInput, 'gi')
      const filterPokes = this.state.pokemons.filter(poke => {
        return poke.name.match(pokeRegex)
      })

      this.setState({currSearch: filterPokes})
    }
  }

  addToPokemons = pokemon => this.setState({
    pokemons: [...this.state.pokemons, pokemon]
  })

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search id="pokemon-search-input" onSearchChange={_.debounce(this.pokemonSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.currSearch}/>
        <br />
        <PokemonForm addToPokemons={this.addToPokemons}/>
      </div>
    )
  }
}

export default PokemonPage
