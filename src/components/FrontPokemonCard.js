import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'


class FrontPokemonCard extends Component {

  render(){
    return(
      <Card>
        <div onClick={this.props.handleToggleClick} id={this.props.pokeId}>
          <div className="image">
            <img src={this.props.frontSprite} alt="" />
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

export default FrontPokemonCard
