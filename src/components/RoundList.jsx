import React from 'react';
import Round from './Round.jsx';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import SessionStore from '../reflux/sessions-store.jsx';
import FilterStore from '../reflux/filter-store.jsx';

let RoundList = React.createClass({
  mixins: [
    Reflux.listenTo(SessionStore, 'onSessionChange'),
    Reflux.listenTo(FilterStore, 'onFilterChange')
  ],
  getInitialState: function(){
    return {
      sessionData: [],
      filterBy: {
        favorites: false,
        jobRole: [],
        level: [],
        round: [],
        type: [],
        speaker: [],
        session: []
      }
    };
  },
  componentWillMount: function(){
    Actions.getSessions(this.state.filterBy);
  },
  onSessionChange: function(event, data){
    this.setState({sessionData: data});
  },
  onFilterChange: function(event, data){
    this.setState({filterBy: data});
    Actions.getSessions(this.state.filterBy);
  },
  render: function(){
    var roundNodes = this.state.sessionData.map(function(round){
      if(this.state.filterBy.favorites){

        let filteredSessions = this.props.favSessions.map(function(sessionId){
          let sessIdCheck = round.sessions.map(function(session){
            if(session.id === sessionId){
              return true;
            } else{
              return false;
            }
          });

          if(sessIdCheck.indexOf(true) !== -1){
            return true;
          } else{
            return false;
          };
        });
        if(filteredSessions.indexOf(true) !== -1){
          return (<Round round={round.round} key={round.round} sessions={round.sessions} favSessions={this.props.favSessions} filterFavs={this.state.filterBy.favorites} />);
        }
      } else if(round.sessions.length > 0){
        return (<Round round={round.round} key={round.round} sessions={round.sessions} favSessions={this.props.favSessions} filterFavs={this.state.filterBy.favorites} />);
      }

    }.bind(this));
    return (
      <div className='round-list'>
        {roundNodes}
      </div>
    );
  }
});

export default RoundList;
