var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById("ingredients"));
ReactDOM.render(<ListManager title="People" />, document.getElementById("people"));
ReactDOM.render(<ListManager title="Music" headingColor = "#b31217" />, document.getElementById("music"));
