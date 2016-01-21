import React from 'react';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import FilterStore from '../reflux/filter-store.jsx';
import Gridicon from './Gridicon.jsx';

let SessionFilter = React.createClass({
  getInitialState: function(){
    return {
      favSessionCount: this.props.favSessions.length
    };
  },
  componentWillReceiveProps: function(nextProps){
    this.setState({
      favSessionCount: nextProps.favSessions.length
    })
  },
  toggleFilter: function(e){
    if(e.target.type === 'checkbox' && e.target.checked){
      Actions.addToFilter(e.target.type, e.target.value);
    } else if(e.target.type === 'checkbox' && !e.target.checked){
      Actions.delFromFilter(e.target.type, e.target.value);
    } else if(e.target.value){
      Actions.addToFilter(e.target.type, e.target.value);
    }

  },
  render: function(){
    return (
      <aside className='filter-sidebar'>
        <header className='filter-header'>
          <h3>Refine Your Sessions</h3>
          <h4 className={this.state.favSessionCount > 0 ? 'h4-active' : ''}><span>{this.state.favSessionCount} <Gridicon size='20' icon='star' /></span> FAVORITE SESSIONS</h4>
          <label htmlFor='favorites filter'>Favorites</label>
          <input type='checkbox' value='favorites' name='favorites filter' onChange={this.toggleFilter} />
        </header>
        <section className='filter-options'>
          <h4>Job Role</h4>
          <label htmlFor='Technician filter'>Technician</label>
          <input type='checkbox' value='Technician' name='Technician filter' onChange={this.toggleFilter} /><br />
          <label htmlFor='Ops Manager filter'>Ops Manager</label>
          <input type='checkbox' value='Ops Manager' name='Ops Manager filter' onChange={this.toggleFilter} /><br />
          <label htmlFor='Owner/Exec filter'>Owner/Exec</label>
          <input type='checkbox' value='Owner/Exec' name='Owner/Exec filter' onChange={this.toggleFilter} />
        </section>
        <section className='filter-options'>
          <h4>Level</h4>
          <label htmlFor='101 filter'>101</label>
          <input type='checkbox' value='101' name='101 filter' onChange={this.toggleFilter} /><br />
          <label htmlFor='201 filter'>201</label>
          <input type='checkbox' value='201' name='201 filter' onChange={this.toggleFilter} /><br />
          <label htmlFor='geek filter'>Geek</label>
          <input type='checkbox' value='geek' name='geek filter' onChange={this.toggleFilter} />
        </section>
        <section className='filter-options'>
          <h4>Rounds</h4>
          <label htmlFor='Round 1 filter'>Round 1</label>
          <input type='checkbox' value='Round 1' name='Round 1 filter' onChange={this.toggleFilter} /><br />
          <label htmlFor='Round 2 filter'>Round 2</label>
          <input type='checkbox' value='Round 2' name='Round 2 filter' onChange={this.toggleFilter} /><br />
          <label htmlFor='Round 3 filter'>Round 3</label>
          <input type='checkbox' value='Round 3' name='Round 3 filter' onChange={this.toggleFilter} />
        </section>
        <section className='filter-options'>
          <h4>Type</h4>
          <label htmlFor='Education Breakout filter'>Education Breakout</label>
          <input type='checkbox' value='Education Breakout' name='Education Breakout filter' onChange={this.toggleFilter} /><br />
          <label htmlFor='Vendor Breakout filter'>Vendor Breakout</label>
          <input type='checkbox' value='Vendor Breakout' name='Vendor Breakout filter' onChange={this.toggleFilter} /><br />
          <label htmlFor='Hands-On Lab filter'>Hands-On Lab</label>
          <input type='checkbox' value='Hands-On Lab' name='Hands-On Lab filter' onChange={this.toggleFilter} />
        </section>
        <section className='filter-options'>
          <h4>Speakers</h4>
          <select name='Speaker Filter' onChange={this.toggleFilter}>
            <option value=''>Select a Speaker</option>
            <option value='Justin Hurt'>Justin Hurt</option>
            <option value='Christina Keller'>Christina Keller</option>
            <option value='Lenin Isabel'>Lenin Isabel</option>
          </select>
        </section>
      </aside>
    );
  }
});

export default SessionFilter;
