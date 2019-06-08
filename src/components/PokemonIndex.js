import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemons: [],
      results:[],
      value: "",

    }
  }
  componentWillMount = () => {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(pokemonsObj => {
        this.setState({pokemons:[...pokemonsObj]})
      })
  }

  onSearchChange = (event, input) => {
    console.log(input.value)
    this.setState({value:input.value})
    setTimeout(() => {
      if (this.state.value.length < 1) {
      return this.setState({results:[],value:""})
    } else {
      console.log(this.state.pokemons);
      //filter by name then return all pokemon that start with value
    }

    }, 300)
  }
  //   _.debounce((input) => console.log("Hi",), 500)
  // }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={this.onSearchChange}
        />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonIndex
