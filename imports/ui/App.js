import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component{

  render(){
    return (
     <div>
	    <TitleBar title={this.props.title}/>
      <PlayerList players={this.props.players}/>
      <AddPlayer/>
	  </div>
    );
    
  };//end of render
};//end of App

App.propTypes = {
  players: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
