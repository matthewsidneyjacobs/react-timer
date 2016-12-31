var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () =>{
  return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">ReactTimer</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active-link">CountDown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="http://www.google.com" target="_blank">Sid</a></li>
          </ul>
        </div>
      </div>
  );
};


module.exports = Nav;