import React from 'react';

let SessionPagination = React.createClass({
  render: function(){
    return (
      <nav className='app-pagination'>
        <p>Showing x-xx of xxx</p>
        <ul>
          <li><a href='#'>1</a></li>
          <li><a href='#'>2</a></li>
          <li><a href='#'>3</a></li>
          <li><a href='#'>4</a></li>
          <li><a href='#'>5</a></li>
          <li><a href='#'>6</a></li>
          <li><a href='#'>7</a></li>
          <li><a href='#'>8</a></li>
          <li><a href='#'>9</a></li>
        </ul>
      </nav>
    );
  }
});

export default SessionPagination;
