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

  // FIND HP VALUE OUT OF ALL THE OTHER STATS
  findHp = () => {
    return this.props.poke.stats.find(stat => stat.name === 'hp').value
  } // END FINDING

  render() {
    // console.log('Pokemon Card Props', this.props)
    const {name, sprites} = this.props.poke

    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            { this.state.cardPicture ? (
              <img src={sprites.front} alt={name} />
            ) : (
              <img src={sprites.back} alt={name} />
            ) }

          </div>
          <div className="content">
            <div className="header">{name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
