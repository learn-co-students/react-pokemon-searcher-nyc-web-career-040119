import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cardPicture: true
    }
  }

  // UPDATE THE STATE ON CLICK
  handleClick = (e) => {
    this.setState({
      cardPicture: !this.state.cardPicture
    })
  } // END UPDATING


  render() {
    // console.log('Pokemon Card Props', this.props)

    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            { this.state.cardPicture ? (
              <img src={this.props.pictureFront} alt="oh no!" />
            ) : (
              <img src={this.props.pictureBack} alt="oh no!" />
            ) }

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
