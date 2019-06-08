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
      if (this.state.value.length < 1) return this.setState({results:[] ,value:""})
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)
      this.setState({
        results: _.filter(this.state.pokemons, isMatch),
      })
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
          onSearchChange={_.debounce(this.onSearchChange, 500, {showNoResults:false}
)}
        />
        <br />
        <PokemonCollection
          pokemons={this.state.pokemons}
          results={this.state.results}
          />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonIndex
