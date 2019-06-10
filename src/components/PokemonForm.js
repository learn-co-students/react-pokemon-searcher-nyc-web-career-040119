import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const cardObj = {
      name: event.target.name.value,
      stats: [{
        value: event.target.hp.value,
        name: 'hp',
      }], // end stats
      sprites: {
        front: event.target.frontUrl.value,
        back: event.target.backUrl.value
      } // end sprites
    } // end cardObj
    this.props.addCard(cardObj)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name" />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp" />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl" />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
