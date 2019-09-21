import React from 'react'
import { Form } from 'semantic-ui-react'
// import PokemonCard from './PokemonCard.js'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  // SUBMIT THE FORM TO ADD A NEW POKEMON
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting the form', this.state)
    const name = this.state.name
    const hp = this.state.hp
    const frontUrl = this.state.frontUrl
    const backUrl = this.state.backUrl

    // SEND A POST REQUEST
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [{
          value: hp,
          name: "hp"
        }],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(response => response.json())
    .then(pokemon => {
      this.setState({
        name: '',
        hp: '',
        frontUrl: '',
        backUrl: ''
      })
      return this.props.addPokemon(pokemon)
    })

  } // END SUBMITTING THE FORM


  // CAPTURE ALL THE INPUT
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  } // END CAPTURING


  render() {
    // console.log('Pokemon Form State', this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid label="Name"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              />
            <Form.Input
              fluid label="hp"
              placeholder="hp"
              name="hp"
              onChange={this.handleChange}
              value={this.state.hp}
              />
            <Form.Input
              fluid label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              onChange={this.handleChange}
              value={this.state.frontUrl}
              />
            <Form.Input
              fluid label="Back Image URL"
              placeholder="url"
              name="backUrl"
              onChange={this.handleChange}
              value={this.state.backUrl}
              />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
