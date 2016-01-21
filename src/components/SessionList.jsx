import React from 'react';
import Reflux from 'reflux';
import Session from './Session.jsx';
import Actions from '../reflux/actions.jsx';

let SessionList = React.createClass({
  render: function(){
    let sessionNodes = this.props.sessions.map(function(session){
      let favSetting = this.props.favSessions.indexOf(session.id);
      return (
        <Session
          sessionFav={(favSetting !== -1)}
          sessionTitle={session.title}
          sessionLevel={session.level}
          sessionType={session.type}
          sessionRoom={session.room}
          sessionKey={session.id}
          key={session.id}
          filterOut={((favSetting === -1) && (this.props.filterFavs))}
        />
      );
    }.bind(this))
    return (
      <ul>
        {sessionNodes}
      </ul>
    );
  }
});

export default SessionList;
