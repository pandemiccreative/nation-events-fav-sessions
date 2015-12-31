import React from 'react';

let AppHeader = React.createClass({
  render: function(){
    return (
      <header className='app-header'>
        <h1>{this.props.appTitle}</h1>
      </header>
    );
  }
});

export default AppHeader;
