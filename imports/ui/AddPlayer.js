import React from 'react';
import {Players} from './../api/players';

const handlePlayer = (e) => {
  

};//end of handlePlayer



export default class AddPlayer extends React.Component {

  handlePlayer(e){
    
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if(playerName){
      e.target.playerName.value = "";
      let player = {};
      player.name = playerName;
      player.score = 0;
      Players.insert(player);
    }
  
  
  };//end of handlePlayer

  
  render(){
    return(
      <div>
	      <form onSubmit={this.handlePlayer.bind(this)}>
	        <input id='playerName' type='text' placeholder='Player Name'></input>
	        <button>Click Me</button>
	      </form>
      </div>
    );
  
  }//end of render


}//end of TitleBar
