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
      return this.props.addPokemon(pokemon)

      // RESET THE FORM????
      this.setState({
        name: '',
        hp: '',
        frontUrl: '',
        backUrl: ''
      }) // END RESETTING THE FORM
    })

  } // END SUBMITTING THE FORM

  // CAPTURE NAME INPUT
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  } // END CAPTURING

  // CAPTURE HP INPUT
  handleChangeHp = (e) => {
    this.setState({
      hp: e.target.value
    })
  } // END CAPTURING

  // CAPTURE FRONT URL INPUT
  handleChangeFrontUrl = (e) => {
    this.setState({
      frontUrl: e.target.value
    })
  } // END CAPTURING

  // CAPTURE BACK URL INPUT
  handleChangeBackUrl = (e) => {
    this.setState({
      backUrl: e.target.value
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
              onChange={this.handleChangeName}
              />
            <Form.Input
              fluid label="hp"
              placeholder="hp"
              name="hp"
              onChange={this.handleChangeHp}/>
            <Form.Input
              fluid label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              onChange={this.handleChangeFrontUrl}/>
            <Form.Input
              fluid label="Back Image URL"
              placeholder="url"
              name="backUrl"
              onChange={this.handleChangeBackUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
