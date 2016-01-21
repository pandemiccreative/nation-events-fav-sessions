import React from 'react';
import Reflux from 'reflux';
import AppHeader from './AppHeader.jsx';
import SessionFilter from './SessionFilter.jsx';
import SessionPagination from './SessionPagination.jsx';
import RoundList from './RoundList.jsx';
import Actions from '../reflux/actions.jsx';
import FavSessionStore from '../reflux/fav-sessions-store.jsx';

let App = React.createClass({
  mixins: [
    Reflux.listenTo(FavSessionStore, 'onFavChange')
  ],
  getInitialState: function(){
    return {
      favSessions: []
    };
  },
  componentWillMount: function(){
    Actions.announceCookie('favSessions');
  },
  onFavChange: function(event, data){
    this.setState({favSessions: data});
  },
  render: function(){
    let favedSessionNodes = this.state.favSessions.map(function(session){
      return <li key={session}>{session}</li>;
    })

    return (
      <div className='container cf'>
        <AppHeader appTitle='Sessions' />
        <div style={{height:40}}>
          <p>Currently faved sessions:</p>
          <ul className='favedSessions'>{favedSessionNodes}</ul>
        </div>
        <SessionFilter favSessions={this.state.favSessions} />
        <main className='app-sessions'>
          <SessionPagination />
          <RoundList favSessions={this.state.favSessions} />
        </main>
      </div>
    );
  }
});

export default App;
