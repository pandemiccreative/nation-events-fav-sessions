import React from 'react';

let Session = React.createClass({
  getInitialState: function(){
    return {
      favorited: false,
      favText: 'Fav'
    };
  },
  componentWillMount: function(){
    
  },
  handleClick: function(e){
    e.preventDefault();
    if(this.state.favorited){
      this.setState({favorited: false, favText: 'Fav'});
    } else{
      this.setState({favorited: true, favText: 'unFav'});
    };
  },
  render: function(){
    return (
        <li className='session-item'>
          <div className='session'>
            <header className='session-header cf'>
              <section className='session-title'><h6>{this.props.sessionTitle}</h6></section>
              <section className='session-fav'><a onClick={this.handleClick} href='#'>{this.state.favText}</a></section>
            </header>
            <section className='session-details'>
              <ul>
                <li>
                  <p><span>Level:</span> {this.props.sessionLevel}</p>
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
        </li>
    );
  }
});

export default Session;
