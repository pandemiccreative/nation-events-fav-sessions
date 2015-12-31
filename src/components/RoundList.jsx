import React from 'react';
import Round from './Round.jsx';

let RoundList = React.createClass({
  render: function(){
    var roundNodes = this.props.sessionData.map(function(round){
      return (<Round round={round.round} key={round.round} sessions={round.sessions} />);
    });
    console.log(roundNodes);
    return (
      <div className='round-list'>
        {roundNodes}
      </div>
    );
  }
});

export default RoundList;
