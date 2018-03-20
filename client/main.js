import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';


const renderPlayer = (playerList) => {
  return playerList.map((player)=>{
    return (
      <p key={player._id}>
        Player {player.name} has {player.score} point(s)
        <button onClick={()=>{
          Players.update(player._id,{$inc : {score:1}});
        }}>+1</button>

        <button onClick={()=>{
          Players.update(player._id,{$inc : {score:-1}});
        }}>-1</button>

        <button onClick={()=> Players.remove({_id:player._id}) }>X</button>
      </p>
    ); //end of JSX 
  });//end of map

};//end of renderPlayer


const handlePlayer = (e) => {
  let playerName = e.target.playerName.value;
  e.preventDefault();
  console.log('Player Name = ', playerName);
  if(playerName){
    e.target.playerName.value = "";
    let player = {};
    player.name = playerName;
    player.score = 0;
    Players.insert(player);

  }

};//end of handlePlayer

Meteor.startup(()=>{

  Tracker.autorun(()=>{

    let players = Players.find().fetch();
    console.log('Players from DB', players);
    let jsx = (
	    <div>
	      <h1> Hello Meteor </h1>
	      <p> This is the second p </p>
	      {renderPlayer(players)}
	      <form onSubmit={handlePlayer}>
	        <input id='playerName' type='text' placeholder='Player Name'></input>
	        <button>Click Me</button>
	      </form>
	    </div>
	  );

    ReactDOM.render(jsx,document.getElementById('app'));

  });//end of Tracker.autorun


});//end of Meteor.startup
