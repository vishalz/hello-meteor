import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';


const renderPlayer = function(playerList){
  
  return playerList.map((player)=>{
    return <p key={player._id}>Player {player.name} has {player.score} point(s)</p> ;
  });

};//end of renderPlayer


const handlePlayer = function(e){
  let playerName = e.target.playerName.value;
  console.log('Player Name = ', playerName);
  if(playerName){
    e.target.playerName.value = "";
    let player = {};
    player.name = playerName;
    player.score = 0;
    Players.insert(player);
  
  } 
  
  e.preventDefault();



};//end of handlePlayer

Meteor.startup(()=>{
 
  Tracker.autorun(()=>{
	  
    let players = Players.find().fetch();
    console.log('Players from DB', players);
    let jsx = (
	    <div>
	      <p> Hello Vishal </p>
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
