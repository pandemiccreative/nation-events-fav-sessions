let Fetch = require('whatwg-fetch');
let baseUrl = 'http://localhost:6060';

let service = {
  get: function(url){
    return fetch(baseUrl + url)
    .then(function(response){
      return response.json();
    });
  },
  put: function(url, session){
    return fetch(baseUrl + url, {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(session)
    }).then(function(response){
      return response;
    });
  }
};

module.exports = service;
