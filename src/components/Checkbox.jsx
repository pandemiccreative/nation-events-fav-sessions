import React from 'react';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import FilterStore from '../reflux/filter-store.jsx';

let Checkbox = React.createClass({
  getInitialState: function(){
    return{
      checked: false
    }
  },
  componentDidMount: function(){
    let checked = this.checkQuery(this.props.name);
    if(checked){
      this.setState({checked: checked});
      this.props.onChange({target: document.querySelector('.' + this.props.className)});
    }
  },
  checkQuery: function(key){
    let url = window.location.href;
    url = url.split('?');
    if(typeof url[1] !== 'undefined' && url[1] !== null)
      url = url[1].split('&');

    url = url.map(function(query){
      query = query.split('=');
      return query[0];
    });
    if(url.indexOf(key) !== -1){
      return true;
    } else{
      return '';
    }
  },
  toggle: function(e){
    console.log(e)
    this.props.onChange(e);
    this.setState({checked: e.target.checked});
  },
  render: function(){
    console.log(this.state)
    return (
      <input className={this.props.className} checked={this.state.checked} type='checkbox' name={this.props.name} value={this.props.value} onChange={this.toggle} />
    );
  }
});

export default Checkbox;
