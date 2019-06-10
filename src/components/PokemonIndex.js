import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const PokeAPI = 'http://localhost:3000/pokemon'

const ShowPokemon = ({ cards }) => {
  return (
    <div>
      {
        cards.map(card => {
          return <PokemonCollection
            key={card.id}
            id={card.id}
            name={card.name}
            hp={card.stats.slice(-1)[0].value}
            front={card.sprites.front}
            back={card.sprites.back} />
        })
      }
    </div>
  )
}

class PokemonPage extends React.Component {
  state = {
    cards: [],
    searchTerm: '',
    showNoResults: false
  }

  componentDidMount() {
    fetch(PokeAPI)
      .then(r => r.json())
      .then(cards => {
        this.setState({ cards })
      })
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      showNoResults: false
    })
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter"){
      this.setState({
        showNoResults: true
      })
    }
  }

  addCard = (cardObj) => {
    return fetch(PokeAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(cardObj)
    })
    // after post, wait for response before setting state with new obj
      .then(r => {
        const cardCopy = [...this.state.cards]
        this.setState({
          cards: [...cardCopy, cardObj]
        })
      })
  }

  showCard = () => {
    const cardOnly = this.state.cards.filter(card => {
      return card.name === this.state.searchTerm
    })

    if (cardOnly.length > 0){
      return cardOnly.map(card => {
        return <PokemonCollection
          key={card.id}
          id={card.id}
          name={card.name}
          hp={card.stats.slice(-1)[0].value}
          front={card.sprites.front}
          back={card.sprites.back} />
      })
    } else {
      return (
        <div>
          Try again!
        </div>
      )
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={this.handleSearchChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.searchTerm}
          showNoResults={false} />
        <br />
        {this.state.showNoResults ? this.showCard() : <ShowPokemon cards={this.state.cards} />}

        <br />
        <PokemonForm
          addCard={this.addCard} />
      </div>
    )
  }
}

export default PokemonPage
