import HTTP from '../services/httpservice';
import Reflux from 'reflux';
import Actions from './actions.jsx';

let SessionStore = Reflux.createStore({
  listenables: [Actions],
  getSessions: function(){
    HTTP.get('/sessions')
    .then(function(json){
      this.sessionData = json;
      this.fireUpdate();
    }.bind(this));
  },
  fireUpdate: function(){
    this.trigger('change', this.sessionData);
  }
});

export default SessionStore;
