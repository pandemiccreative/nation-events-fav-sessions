import React from 'react';
import AppHeader from './AppHeader.jsx';
import SessionFilter from './SessionFilter.jsx';
import SessionPagination from './SessionPagination.jsx';
import RoundList from './RoundList.jsx';

let App = React.createClass({
  getInitialState: function(){
    return {
      favedSessions: ['001', '002', '003']
    };
  },
  render: function(){
    let sessionData = require('../data/sessions.json');

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
          <RoundList sessionData={sessionData} />
        </main>
      </div>
    );
  }
});

export default App;
