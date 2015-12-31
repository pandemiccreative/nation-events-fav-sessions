import React from 'react';
import Round from './Round.jsx';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import SessionStore from '../reflux/sessions-store.jsx';

let RoundList = React.createClass({
  mixins: [Reflux.listenTo(SessionStore, 'onChange')],
  getInitialState: function(){
    return {
      sessionData: []
    };
  },
  componentWillMount: function(){
    Actions.getSessions();
  },
  onChange: function(event, data){
    this.setState({sessionData: data});
  },
  render: function(){
    var roundNodes = this.state.sessionData.map(function(round){
      return (<Round round={round.round} key={round.round} sessions={round.sessions} />);
    });
    return (
      <div className='round-list'>
        {roundNodes}
      </div>
    );
  }
});

export default RoundList;
