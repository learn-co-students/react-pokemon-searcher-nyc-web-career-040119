import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemons: []
    }
  }
  componentWillMount = () => {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(pokemonsObj => {
        this.setState({pokemons:[...pokemonsObj]})
      })
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonIndex
