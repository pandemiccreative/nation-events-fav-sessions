import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import SessionDetailFav from './components/SessionDetailFav.jsx';
import './less/core.less';

if(document.querySelector('.app')){
  ReactDOM.render(<App />, document.querySelector('.app'));
};

if(document.querySelector('.session-detail-fav')){
  ReactDOM.render(<SessionDetailFav />, document.querySelector('.session-detail-fav'));
};
