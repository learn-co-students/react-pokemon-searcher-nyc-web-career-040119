import React from 'react'
import FrontPokemonCard from './FrontPokemonCard'
import BackPokemonCard from './BackPokemonCard'



class PokemonCard extends React.Component {
  state = {
    isShowing: true
  }
  handleToggleClick = (e) => {
    this.setState({isShowing: !this.state.isShowing})
  }
  render() {
    return (
      (this.state.isShowing) ? (
        <div>
      <FrontPokemonCard
        pokeId={this.props.id}
        name={this.props.name}
        hp={this.props.hp}
        frontSprite={this.props.frontSprite}
        handleToggleClick={this.handleToggleClick}
       /></div>) : (
       <div><BackPokemonCard
        pokeId={this.props.id}
        name={this.props.name}
        hp={this.props.hp}
        backSprite={this.props.backSprite}
        handleToggleClick={this.handleToggleClick}
       /></div>
     )

    )
  }
}

export default PokemonCard
