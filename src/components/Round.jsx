import React from 'react';
import SessionList from './SessionList.jsx';

let Round = React.createClass({
  render: function(){
    return (
      <section className='session-round'>
        <header className='round-header'>
          <h2>Round {this.props.round}</h2>
        </header>
        <SessionList filterFavs={this.props.filterFavs} sessions={this.props.sessions} favSessions={this.props.favSessions} />
      </section>
    );
  }
});

export default Round;
