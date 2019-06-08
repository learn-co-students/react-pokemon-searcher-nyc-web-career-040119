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
      newPoke:[]
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

  handlePostPokemon = (newPokemonObj) => {
    // this.setState({newPoke:this.newPokemonObj})
  }
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
        <PokemonForm
          // handlePostPokemon={this.handlePostPokemon(this.newPokemonObj)}
         />
      </div>
    )
  }
}

export default PokemonIndex




// {"pokemon": [
//   {
//     "height": 10,
//     "weight": 130,
//     "id": 2,
//     "name": "ivysaur",
//     "abilities": ["overgrow", "chlorophyll"],
//     "moves": [],
//     "stats": [
//       {
//         "value": 80,
//         "name": "special-defense"
//       },
//       {
//         "value": 80,
//         "name": "special-attack"
//       },
//       {
//         "value": 63,
//         "name": "defense"
//       },
//       {
//         "value": 62,
//         "name": "attack"
//       },
//       {
//         "value": 60,
//         "name": "speed"
//       },
//       {
//         "value": 60,
//         "name": "hp"
//       }
//     ],
//     "types": ["grass", "poison"],
//     "sprites": {
//       "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//       "back":
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//     }
//   }
