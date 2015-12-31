import React from 'react';

let SessionFilter = React.createClass({
  render: function(){
    return (
      <aside className='filter-sidebar'>
        <h3>Refine Your Sessions</h3>
        <section className='filter-options'>
          <h4>Job Role</h4>
        </section>
        <section className='filter-options'>
          <h4>Level</h4>
        </section>
        <section className='filter-options'>
          <h4>Rounds</h4>
        </section>
        <section className='filter-options'>
          <h4>Type</h4>
        </section>
        <section className='filter-options'>
          <h4>Speakers</h4>
        </section>
      </aside>
    );
  }
});

export default SessionFilter;
