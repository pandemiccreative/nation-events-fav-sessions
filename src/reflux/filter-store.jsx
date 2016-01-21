import Reflux from 'reflux';
import Actions from './actions.jsx';

let filterStore = Reflux.createStore({
  listenables: [Actions],
  filterBy: {
    favorites: false,
    jobRole: [],
    level: [],
    round: [],
    type: [],
    speaker: [],
    session: []
  },
  addToFilter: function(type, filter){
    switch(filter.toLowerCase()){
      case 'favorites':
        this.filterBy.favorites = true;
        break;
      case '101':
      case '201':
      case 'geek':
        this.filterBy.level.push(filter.toLowerCase());
        break;
      case 'technician':
      case 'ops manager':
      case 'owner/exec':
        this.filterBy.jobRole.push(filter.toLowerCase());
        break;
      case 'round 1':
      case 'round 2':
      case 'round 3':
        this.filterBy.round.push(filter.toLowerCase());
        break;
      case 'education breakout':
      case 'vendor breakout':
      case 'hands-on lab':
        this.filterBy.type.push(filter.toLowerCase());
        break;
      default:
        break;
    }
    console.log(this.filterBy);
    this.fireUpdate();
  },
  delFromFilter: function(type, filter){
    switch(filter.toLowerCase()){
      case 'favorites':
        this.filterBy.favorites = false;
        break;
      case '101':
      case '201':
      case 'geek':
        let levIndex = this.filterBy.level.indexOf(filter.toLowerCase());
        if(levIndex !== -1){
          this.filterBy.level.splice(levIndex, 1);
        }
        break;
      case 'technician':
      case 'ops manager':
      case 'owner/exec':
        let jobIndex = this.filterBy.jobRole.indexOf(filter.toLowerCase());
        if(jobIndex !== -1){
          this.filterBy.jobRole.splice(jobIndex, 1);
        }
        break;
      case 'round 1':
      case 'round 2':
      case 'round 3':
        let roundIndex = this.filterBy.round.indexOf(filter.toLowerCase());
        if(roundIndex !== -1){
          this.filterBy.round.splice(roundIndex, 1);
        }
        break;
      case 'education breakout':
      case 'vendor breakout':
      case 'hands-on lab':
        let typeIndex = this.filterBy.type.indexOf(filter.toLowerCase());
        if(typeIndex !== -1){
          this.filterBy.type.splice(typeIndex, 1);
        }
        break;
      default:
        break;
    }
    console.log(this.filterBy);
    this.fireUpdate();
  },
  fireUpdate: function(){
    this.trigger('change', this.filterBy);
  }
});

export default filterStore;
