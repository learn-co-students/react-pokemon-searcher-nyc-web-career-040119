import React from 'react'
import { Form } from 'semantic-ui-react'

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
  handleSubmitPokemon = (event) => {
    this.setState({name: event.target.name.value})
    this.setState({hp: event.target.hp.value})
    this.setState({frontUrl: event.target.frontUrl.value})
    this.setState({backUrl: event.target.backUrl.value})
    const newPokemonObj = {
      name: this.state.name,
      hp: this.state.hp,
      frontUrl: this.state.frontUrl,
      backUrl: this.state.backUrl
    }
    return this.props.handleNewPokeValues(newPokemonObj)
  }

  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmitPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name"/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp"/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl"/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl"/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
