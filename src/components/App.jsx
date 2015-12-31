import React from 'react';
import Reflux from 'reflux';
import AppHeader from './AppHeader.jsx';
import SessionFilter from './SessionFilter.jsx';
import SessionPagination from './SessionPagination.jsx';
import RoundList from './RoundList.jsx';
import Actions from '../reflux/actions.jsx';
import FavSessionStore from '../reflux/fav-sessions-store.jsx';

let App = React.createClass({
  mixins: [Reflux.listenTo(FavSessionStore, 'onChange')],
  getInitialState: function(){
    return {
      favedSessions: []
    };
  },
  componentWillMount: function(){
    Actions.getFavSessions();
  },
  onChange: function(event, data){
    this.setState({favedSessions: data});
  },
  render: function(){

    let favedSessionNodes = this.state.favedSessions.map(function(session){
      return (<li key={session}>{session}</li>);
    })

    return (
      <div className='container cf'>
        <AppHeader appTitle='Sessions' />
        <p>Currently faved sessions:</p>
        <ul className='favedSessions'>{favedSessionNodes}</ul>
        <SessionFilter />
        <main className='app-sessions'>
          <SessionPagination />
          <RoundList />
        </main>
      </div>
    );
  }
});

export default App;
