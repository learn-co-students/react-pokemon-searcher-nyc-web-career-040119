import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    showingFront: true
  }

  handleClick = () => this.setState({showingFront: !this.state.showingFront})

  render() {
    // {height, weight, id, name, abilities, moves, stats, types, sprites}
    const {id, name, stats, sprites} = this.props.pokemon
    const hpStat = stats.find(stat => stat.name === "hp")

    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            {
              this.state.showingFront ?
              <img src={sprites.front} alt={name + " front"} /> :
              <img src={sprites.back} alt={name + " back"} />
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpStat.value}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
