import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            {this.state.clicked ? <img src={this.props.back} alt="oh no!" /> : <img src={this.props.front} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
