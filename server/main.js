import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // code to run on server at startup
  console.log ('Log from server/main.js');
  console.log (Players.find().fetch());
});
