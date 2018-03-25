import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

export default class PlayerList extends React.Component{

  render(){
    return this.props.players.map((player)=>{
      return <Player key={player._id} player={player} />
    });//end of map 
  };//end of render
};//end of PlayerList

PlayerList.propTypes = {
  players: PropTypes.array.isRequired

};
