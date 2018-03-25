import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import App from './../imports/ui/App';


Meteor.startup(()=>{

  Tracker.autorun(()=>{

    let players = Players.find({},{sort:{score: -1}}).fetch();
    let title = '!!!  This is Hello Score App  !!!';
    ReactDOM.render(<App title={title} players={players}/>,document.getElementById('app'));

  });//end of Tracker.autorun


});//end of Meteor.startup
