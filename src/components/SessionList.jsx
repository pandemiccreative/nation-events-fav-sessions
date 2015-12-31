import React from 'react';
import Session from './Session.jsx';

let SessionList = React.createClass({
  render: function(){
    let sessionNodes = this.props.sessions.map(function(session){
      return (
        <Session
          sessionTitle={session.title}
          sessionLevel={session.level}
          sessionType={session.type}
          sessionRoom={session.room}
          sessionKey={session.id}
          key={session.id}
        />
      );
    })
    return (
      <ul>
        {sessionNodes}
      </ul>
    );
  }
});

export default SessionList;
