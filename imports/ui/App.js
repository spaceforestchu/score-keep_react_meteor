import React, {Component} from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';


class App extends Component {
  render () {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle='Hamster Created'/>
        <div className='wrapper'>
         <PlayerList players={this.props.players}/>
         <AddPlayer />
        </div>
      </div>
    )
  }
}

PlayerList.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.array.isRequired
}

export default App;
