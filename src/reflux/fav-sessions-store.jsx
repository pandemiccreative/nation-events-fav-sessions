import HTTP from '../services/httpservice';
import Reflux from 'reflux';
import Actions from './actions.jsx';

let FavSessionStore = Reflux.createStore({
  listenables: [Actions],
  getFavSessions: function(){
    HTTP.get('/favedSessions')
    .then(function(json){
      this.favedSessions = json;
      this.fireUpdate();
    }.bind(this));
  },
  postFavSession: function(){},
  fireUpdate: function(){
    this.trigger('change', this.favedSessions);
  }
});

export default FavSessionStore;
