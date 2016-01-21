import Reflux from 'reflux';
import Actions from './actions.jsx';

let FavSessionStore = Reflux.createStore({
  listenables: [Actions],
  createCookie: function(cname, cvalue, expd){
    let expires = '';
    if(expd){
      let d = new Date();
      d.setTime(d.getTime() + (expd*24*60*60*1000));
      expires = 'expires='+d.toUTCString();
    };
    document.cookie = cname + '=' + cvalue + ';' + expires;
    console.log(document.cookie);
    this.announceCookie('favSessions');
  },
  getCookie: function(cname){
    let name = cname + '=';
    let ca = document.cookie.split(';');
    let cdata = '';
    ca.map(function(c){
      while(c.charAt(0) === ' ') c = c.substring(1);
      if(c.indexOf(name) === 0){
        cdata = c.substring(name.length, c.length)
      }
    }.bind(this));
    return(cdata);
  },
  announceCookie: function(cname){
    let favSessions = this.getCookie(cname);
    if(favSessions){
      this.favSessions = favSessions.split(',');
    } else{
      this.favSessions = [];
    }
    this.fireUpdate();
  },
  addToCookie: function(cName, newVal){
    let currC = this.getCookie(cName);
    let cData = currC.split(',');
    cData.push(newVal);
    let fVal = cData;
    this.createCookie('favSessions', fVal);
  },
  delFromCookie: function(cName, delVal){
    let currC = this.getCookie(cName);
    let cData = currC.split(',');
    let vIndex = cData.indexOf(delVal);
    if(vIndex != -1){
      cData.splice(vIndex, 1);
    }
    this.createCookie('favSessions', cData);
  },
  fireUpdate: function(){
    this.trigger('change', this.favSessions);
  }
});

export default FavSessionStore;
