import React from 'react';
import SessionList from './SessionList.jsx';

let Round = React.createClass({
  render: function(){
    return (
      <section className='session-round'>
        <header className='round-header'>
          <h2>Round {this.props.round}</h2>
        </header>
        <SessionList sessions={this.props.sessions} />
      </section>
    );
  }
});

export default Round;
