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
      value: ""
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

  handleNewPokeValues(newPokemonObj) {
    let newPokemon = newPokemonObj;
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }, body: JSON.stringify({
        "height": 4,
        "weight": 40,
        "id": 1,
        "name": newPokemon.name,
        "abilities": [
          "synchronize"
        ],
        "moves": [
          "pound",
          "mega-punch",
          "pay-day",
          "razor-wind",
          "whirlwind",
          "fly",
          "mega-kick",
          "horn-drill",
          "bubble-beam",
          "submission"
        ],
        "stats": [
          {
            "value": 100,
            "name": "speed"
          },
          {
            "value": 100,
            "name": "special-defense"
          },
          {
            "value": 100,
            "name": "special-attack"
          },
          {
            "value": 100,
            "name": "defense"
          },
          {
            "value": 100,
            "name": "attack"
          },
          {
            "value": newPokemon.hp,
            "name": "hp"
          }
        ],
        "types": [
          "psychic"
        ],
        "sprites": {
          "front": newPokemon.frontUrl,
          "back": newPokemon.backUrl
        }
      })
    })
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
          handleNewPokeValues={this.handleNewPokeValues}
         />
      </div>
    )
  }
}

export default PokemonIndex




// {
//   }
