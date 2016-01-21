import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';
import Actions from '../reflux/actions.jsx';
import FavSessionStore from '../reflux/fav-sessions-store.jsx';
import Gridicon from './Gridicon.jsx';

let Session = React.createClass({
  mixins: [Reflux.listenTo(FavSessionStore, 'onChange')],
  getInitialState: function(){
    return {
      favorited: false,
    };
  },
  componentWillMount: function(){
    if(this.props.sessionFav){
      this.setState({
        favorited: true,
      })
    }
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.sessionFav){
      this.setState({
        favorited: true,
      })
    } else{
      this.setState({
        favorited: false,
      })
    }
  },
  handleClick: function(e){
    e.preventDefault();
    if(this.state.favorited){
      Actions.delFromCookie('favSessions', this.props.sessionKey);
    } else{
      if(this.checkCookie('favSessions')){
        console.log('Found cookie!');
        Actions.addToCookie('favSessions', this.props.sessionKey);
      } else{
        Actions.createCookie('favSessions', this.props.sessionKey);
      }
    }
  },
  checkCookie: function(cname){
    let name = cname + '=';
    let ca = document.cookie.split(';');
    let cdata = '';
    ca.map(function(c){
      while(c.charAt(0) === ' ') c = c.substring(1);
      if(c.indexOf(name) === 0) cdata = c.substring(name.length, c.length);
    })
    return cdata;
  },
  onChange: function(){},
  render: function(){

    let sesLevel = this.props.sessionLevel;

    if(_.isArray(sesLevel)){
      sesLevel = sesLevel.join(', ');
    }

    return (
        <li className={'session-item' + ((this.props.filterOut) ? ' ' + 'filtered-out' : '')}>
          <a href='#'>
          <div className='session'>
            <header className='session-header cf'>
              <section className='session-title'><h6>{this.props.sessionTitle}</h6></section>
              <section className={'session-fav' + (this.state.favorited ? ' faved' : '')}><Gridicon size='20' icon='star' onClick={this.handleClick} /></section>
            </header>
            <section className='session-details'>
              <ul>
                <li>
                  <p><span>Level:</span> {sesLevel}</p>
                </li>
                <li>
                  <p><span>Type:</span> {this.props.sessionType}</p>
                </li>
                <li>
                  <p><span>Room:</span> {this.props.sessionRoom}</p>
                </li>
              </ul>
            </section>
          </div>
          </a>
        </li>
    );
  }
});

export default Session;
