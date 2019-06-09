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
        pokemons: pokemons
      })
    })
  } // END FENTCHING


  // SEARCH POKEMON => NOT WORKING !
  handleSearchChange = (e, {value}) => {
    this.setState({
      search: value
    })
  } //END SEARCHING


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
          pokemons={this.state.pokemons}/>
        <br />
        <PokemonForm
          addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
