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
  toggleFilter: function(e){
    if(e.target.type === 'checkbox' && e.target.checked){
      this.addToFilter(e.target.type, e.target.value);
    } else if(e.target.type === 'checkbox' && !e.target.checked){
      this.delFromFilter(e.target.type, e.target.value);
    } else if(e.target.value){
      this.addToFilter(e.target.type, e.target.value);
    }

    window.history.pushState('Filter', '', this.updateQuery(e.target.name, (e.target.checked) ? true : null));
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
    this.fireUpdate();
  },
  updateQuery: function(key, val, url){
    if(!url) url = window.location.href;
    let regEx = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi");
    let hash;
    console.log(regEx);
    console.log(val);

    if(regEx.test(url)){
      if(typeof val !== 'undefined' && val !== null){
        url = url.replace(regEx, '$1' + key + '=' + val + '$2$3');
          console.log(url);
        url = url.split('?');
        return (typeof url[1] !== 'undefined' && url[1] !== null) ? '?' + url[1] : './';
      } else{
        hash = url.split('#');
        url = hash[0].replace(regEx, '$1$3').replace(/(&|\?)$/, '');
        if(typeof hash[1] !== 'undefined' && hash[1] !== null){
          url += '#' + hash[1];
        }
        url = url.split('?');
        return (typeof url[1] !== 'undefined' && url[1] !== null) ? '?' + url[1] : './';
      }
    } else{
      if(typeof val !== 'undefined' && val !== null){
        let separator = url.indexOf('?') !== -1 ? '&' : '?';
        hash = url.split('#');
        url = hash[0] + separator + key + '=' + val;
        if(typeof hash[1] !== 'undefined' && hash[1] !== null){
          url += '#' + hash[1];
        }
        url = url.split('?');
        return (typeof url[1] !== 'undefined' && url[1] !== null) ? '?' + url[1] : './';
      }
      url = url.split('?');
      return (typeof url[1] !== 'undefined' && url[1] !== null) ? '?' + url[1] : './';
    }
  },
  fireUpdate: function(){
    this.trigger('change', this.filterBy);
  }
});

export default filterStore;
