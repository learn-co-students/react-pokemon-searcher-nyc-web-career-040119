import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  // when clicked card should toggle between frontImg&backImg
  //set boolean value(default value) inside state, create onClick event to update setState
  state={
    isFrontShowing: true
  }

  toggleImg = (e) =>{
    // console.log(e.target)
    this.setState({
      isFrontShowing: !this.state.isFrontShowing
    })
  }

  render() {

    return (
      <Card onClick={this.toggleImg}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.isFrontShowing? this.props.frontImg : this.props.backImg} />
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
