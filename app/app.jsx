var React = require('react');
var ReactDOM = require('react-dom');

//using es6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//here it is in es5
//var Route = require('react-router').Route; and so on

var Main = require('Main');


//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      
    </Route>
  </Router>,
  document.getElementById('app')
);
