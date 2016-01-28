var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App.js');
var hCard = require('./hCard.js');

//var hcard = new hCard();
//console.log(hcard);

ReactDOM.render(<App hcard={new hCard()} />, document.getElementById('app'));
