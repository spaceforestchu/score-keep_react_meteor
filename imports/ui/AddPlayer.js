import React, {Component } from 'react';
import { Players } from './../api/players';

class AddPlayer extends Component{

  constructor(props){
    super(props);

    handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    let playerName = e.target.playerName.value;

    if (playerName.length) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render(){
    return (
      <div className='item'>
        <form  className='form' onSubmit={handleSubmit}>
          <input className='form__input' type='text' name='playerName' placeholder='Player name'/>
          <button className='button'>Add Player</button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;
