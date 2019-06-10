import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <PokemonCard
          key={this.props.id}
          id={this.props.id}
          name={this.props.name}
          hp={this.props.hp}
          front={this.props.front}
          back={this.props.back} />
      </Card.Group>
    )
  }
}

export default PokemonCollection
