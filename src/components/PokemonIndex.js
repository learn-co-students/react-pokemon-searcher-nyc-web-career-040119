import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemons: [],
      search: ''
    }
  }

  // FETCH POKEMON DATA
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemons => {
      this.setState({
        pokemons
      })
    })
  } // END FENTCHING


  // GET THE INPUT AND UPDATE THE SEARCH STATE
  handleSearchChange = (e, {value}) => {
    // console.log(value)
    this.setState({
      search: value
    })
  } //END UPDATING


  // ADD THE NEWLY CREATED POKEMON AND UPDATE THE STATE
  addPokemon = (newPokemon) => {
    let newPokemons = [...this.state.pokemons]
    newPokemons.push(newPokemon)
    this.setState({
      pokemons: newPokemons
    })
  } // END UPDATING

  render() {
    // console.log('Pokemon Page State', this.state)
    // console.log('Pokemon Page Props', this.props)

    const filteredPokemon = this.state.pokemons.filter(pokemon => { return pokemon.name.includes(this.state.search.toLowerCase()) })

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
          />
        <br />
        <PokemonCollection
          pokemons={this.state.search !== '' ? filteredPokemon :this.state.pokemons}/>
        <br />
        <PokemonForm
          addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
