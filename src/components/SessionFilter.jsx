import React from 'react';
import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import FilterStore from '../reflux/filter-store.jsx';
import Gridicon from './Gridicon.jsx';
import Checkbox from './Checkbox.jsx';

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
  render: function(){
    return (
      <aside className='filter-sidebar'>
        <header className='filter-header'>
          <h3>Refine Your Sessions</h3>
          <h4 className={this.state.favSessionCount > 0 ? 'h4-active' : ''}><span>{this.state.favSessionCount} <Gridicon size='20' icon='star' /></span> FAVORITE SESSIONS</h4>
          <label htmlFor='favorites filter'>Favorites</label>
          <Checkbox className='favoritesCheck' value='favorites' name='favorites' onChange={Actions.toggleFilter} />
        </header>
        <section className='filter-options'>
          <h4>Job Role</h4>
          <label htmlFor='technician'>Technician</label>
          <Checkbox className='technicianCheck' value='Technician' name='technician' onChange={Actions.toggleFilter} /><br />
          <label htmlFor='opsManager'>Ops Manager</label>
          <Checkbox className='opsManagerCheck' value='Ops Manager' name='opsManager' onChange={Actions.toggleFilter} /><br />
          <label htmlFor='ownerExec'>Owner/Exec</label>
          <Checkbox className='ownerExecCheck' value='Owner/Exec' name='ownerExec' onChange={Actions.toggleFilter} />
        </section>
        <section className='filter-options'>
          <h4>Level</h4>
          <label htmlFor='level101'>101</label>
          <Checkbox className='level101Check' value='101' name='level101' onChange={Actions.toggleFilter} /><br />
          <label htmlFor='level201'>201</label>
          <Checkbox className='level201Check' value='201' name='level201' onChange={Actions.toggleFilter} /><br />
          <label htmlFor='levelGeek'>Geek</label>
          <Checkbox className='levelGeekCheck' value='geek' name='levelGeek' onChange={Actions.toggleFilter} />
        </section>
        <section className='filter-options'>
          <h4>Rounds</h4>
          <label htmlFor='round1'>Round 1</label>
          <Checkbox className='round1Check' value='Round 1' name='round1' onChange={Actions.toggleFilter} /><br />
          <label htmlFor='round2'>Round 2</label>
          <Checkbox className='round2Check' value='Round 2' name='round2' onChange={Actions.toggleFilter} /><br />
          <label htmlFor='round3'>Round 3</label>
          <Checkbox className='round3Check' value='Round 3' name='round3' onChange={Actions.toggleFilter} />
        </section>
        <section className='filter-options'>
          <h4>Type</h4>
          <label htmlFor='educationBreakout'>Education Breakout</label>
          <Checkbox className='educationCheck' value='Education Breakout' name='educationBreakout' onChange={Actions.toggleFilter} /><br />
          <label htmlFor='vendorBreakout'>Vendor Breakout</label>
          <Checkbox className='vendorCheck' value='Vendor Breakout' name='vendorBreakout' onChange={Actions.toggleFilter} /><br />
          <label htmlFor='handsOnLab'>Hands-On Lab</label>
          <Checkbox className='labCheck' value='Hands-On Lab' name='handsOnLab' onChange={Actions.toggleFilter} />
        </section>
        <section className='filter-options'>
          <h4>Speakers</h4>
          <select name='speaker' onChange={Actions.toggleFilter}>
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
