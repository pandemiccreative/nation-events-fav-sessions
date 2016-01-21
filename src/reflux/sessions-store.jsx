import HTTP from '../services/httpservice';
import Reflux from 'reflux';
import Actions from './actions.jsx';
import _ from 'lodash';

let SessionStore = Reflux.createStore({
  listenables: [Actions],
  getSessions: function(filter){
    HTTP.get('/sessions')
    .then(function(json){
      this.sessionData = json;
      this.filterSessions(json, filter);
    }.bind(this));
  },
  filterSessions: function(data, filter){
    let rounds = [];

    data.map(function(round){

      if(!_.isEmpty(filter.round)){
        // console.log(filter.round.indexOf(round.round.toLowerCase()));
        if(filter.round.indexOf(round.round.toLowerCase()) === -1){
          return;
        }
      }

      let newFilter = filter;
      newFilter = _.omit(newFilter, _.isBoolean);
      newFilter = _.omit(newFilter, _.isEmpty);
      newFilter = _.omit(newFilter, 'round');

      // let sessions = round.sessions;
      // let filteredSessions = _.filter(sessions, function(session){
      //   let result = false;
      //   _.forIn(newFilter, function(value, key){
      //     let sessionVals = _.map(_.flatten(_.values(session)), _.method('toLowerCase'));
      //     if(_.includes(sessionVals, _(value).toString())){
      //       result = true;
      //     }
      //   });
      //   return result;
      // });
      //
      // round.sessions = (filteredSessions.length > 0) ? filteredSessions : round.sessions;



      // let sessions = round.sessions;
      // let filteredSessions = _.filter(sessions, function(session){
      //   let results = [];
      //   _.forIn(newFilter, function(value, key){
      //     console.log(value)
      //     if(_.isArray(value)){
      //
      //     }
      //     _.map('101', function(val){
      //       console.log(val)
      //     })
      //     let sessionVals = _.map(_.flatten(_.values(session)), _.method('toLowerCase'));
      //     let result = (_.includes(sessionVals, _(value).toString())) ? true : false;
      //     // console.log(result);
      //     // results.push(result);
      //   });
      //   // console.log(results);
      //   return results;
      // });
      // round.sessions = (filteredSessions.length > 0) ? filteredSessions : round.sessions;

      newFilter = _.flatten(_.values(newFilter), true);
      let sessions = round.sessions;
      let filteredSessions = [];

      sessions.map(function(session){
        let filterResult = newFilter.map(function(val){
          let sessVals = _.flatten(_.values(session), true);

          sessVals = sessVals.map(function(val){
            return val.toLowerCase();
          });

          if(sessVals.indexOf(val) !== -1){
            return true;
          } else{
            return false;
          };
        });
        if(filterResult.indexOf(false) === -1){
          filteredSessions.push(session);
        };
      });
      round.sessions = filteredSessions;
      rounds.push(round);
    });

    this.sessionData = rounds;
    this.fireUpdate();
  },
  fireUpdate: function(){
    this.trigger('change', this.sessionData);
  }
});

export default SessionStore;
