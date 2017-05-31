import React, {Component} from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

class PlayerList extends Component {

  renderPlayers() {

    if(this.props.players.length === 0) {
      return (
        <div className='item'>
          <p className='item__message'>Add your first Player to get start!</p>
        </div>
      );
    } else {
      return this.props.players.map( (player) => {
        return ( <Player key={player._id} player={player}/>
        )
      });
    }
  }

  render(){
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}

export default PlayerList;
