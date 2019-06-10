import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  imgSwitch = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  hp = () => {
    return this.props.poke.stats.find(stat=>stat.name==="hp").value
  }

  render() {
    const { sprites, name } = this.props.poke
    return (
      <Card>
        <div onClick={this.imgSwitch}>
          <div className="image">
            <img src={this.state.clicked ? sprites.back : sprites.front} alt={name} />
          </div>
          <div className="content">
            <div className="header">{this.cap(name)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hp()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
