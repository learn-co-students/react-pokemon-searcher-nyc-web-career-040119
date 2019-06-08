import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'


class BackPokemonCard extends Component {

  render(){
    return(
      <Card>
        <div onClick={this.props.handleToggleClick} id={this.props.pokeId}>
          <div className="image">
            <img src={this.props.backSprite} alt="" />
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

export default BackPokemonCard
