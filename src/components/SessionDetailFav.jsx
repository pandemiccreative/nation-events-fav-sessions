import React from 'react';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import FavSessionStore from '../reflux/fav-sessions-store.jsx';
import Gridicon from './Gridicon.jsx';

let SessionDetailFav = React.createClass({
  mixins: [Reflux.listenTo(FavSessionStore, 'onChange')],
  getInitialState: function(){
    return {
      favorited: false,
      favSessions: []
    };
  },
  componentWillMount: function(){
    Actions.announceCookie('favSessions');
  },
  onChange: function(event, data){
    this.setState({favSessions: data});
  },
  handleClick: function(){
    console.log('clicked!')
  },
  render: function(){
    return (
      <h4>Favorite Session <Gridicon size='20' icon='star' onClick={this.handleClick} /></h4>
    );
  }
});

export default SessionDetailFav;
