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
  handleChange = (event, input) => {
    let targetState = event.target.name;
    let targetInput = input.value;
    switch(targetState){
      case "name":
      this.setState({name:targetInput})
        break;
      case "hp":
      this.setState({hp:targetInput})
        break;
      case "frontUrl":
      this.setState({frontUrl:targetInput})
        break;
      case "backUrl":
      this.setState({backUrl:targetInput})
        break;
      default:
      return;
    }
  }
  // handleSubmitPokemon = (event) => {
  //   const newPokemonObj = {
  //                         id:'1',
  //                         name: 'bulbasaur',
  //                         frontUrl: "https://www.pngfind.com/pngs/m/15-158192_bulbasaur-png-image-with-transparent-background-bulbasaur-sprite.png",
  //                         backUrl: "https://www.pngfind.com/pngs/m/15-158192_bulbasaur-png-image-with-transparent-background-bulbasaur-sprite.png"
  //                       }
  //   this.setState({
  //         name: '',
  //         hp: '',
  //         frontUrl: '',
  //         backUrl: ''})
  //         {this.props.handlePostPokemon, this.newPokemonObj}
  //
  // }
  render() {



    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmitPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
