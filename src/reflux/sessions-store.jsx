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
  // Filters the session list based on the filter parameters.
  filterSessions: function(data, filter){
    // Create an empty array to contain each Round as an object
    let rounds = [];

    // Parse through each round provided in the data parameter (JSON)
    data.map(function(round){
      // Checks if the Round Filter setting is set
      if(!_.isEmpty(filter.round)){
        // Checks if the current round being parsed is listed in the filter
        if(filter.round.indexOf(round.round.toLowerCase()) === -1){
          // If the current round is not selected in the filter escape the function
          return;
        }
      }

      // Import filter parameter to new container var
      let newFilter = filter;
      // Remove K/V pairs that contain a boolean (Removes Favorite Session Filter [Handeled elsewhere])
      newFilter = _.omit(newFilter, _.isBoolean);
      // Remove any K/V pairs with an empty V
      newFilter = _.omit(newFilter, _.isEmpty);
      // Remove the Round K/V pair (Handled above)
      newFilter = _.omit(newFilter, 'round');

      // Flattens the newFilter object into an array, removes K from K/V pairs
      newFilter = _.values(newFilter);
      // console.log(newFilter);

      // Stores session data for the round in a container var
      let sessions = round.sessions;
      // Creates an empty array to house the filtered sessions
      let filteredSessions = [];

      // Parses through each session in the round
      sessions.map(function(session){

        // Creates an array to contain a boolean for each filter value [True = Matches Filter]
        let filterResult = newFilter.map(function(vals){
          vals = vals.map(function(val){
            return val.toLowerCase();
          });
          // console.log(_.values(session));
          let sessVals = _.flatten(_.values(session), true);
          // console.log(sessVals);

          sessVals = sessVals.map(function(sessVal){
            return sessVal.toLowerCase();
          });

          let filterTypeResults = vals.map(function(val){
            if(sessVals.indexOf(val) !== -1){
              return true;
            } else{
              return false;
            }
          });

          if(filterTypeResults.indexOf(true) !== -1){
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
