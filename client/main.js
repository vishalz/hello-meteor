import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';


const renderPlayer = (playerList) => {
  return playerList.map((player)=>{
    return <Player key={player._id} player={player} />
  });//end of map

};//end of renderPlayer



Meteor.startup(()=>{

  Tracker.autorun(()=>{

    let players = Players.find().fetch();
    let title = 'This is my Big Title !!!';
    let subtitle = 'This is my subtitle ***';
    let jsx = (
	    <div>
	      <TitleBar title={title} subtitle={subtitle}/>
	      {renderPlayer(players)}
        <AddPlayer score={100}/>
	    </div>
	  );

    ReactDOM.render(jsx,document.getElementById('app'));

  });//end of Tracker.autorun


});//end of Meteor.startup
