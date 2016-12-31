var React = require('react');
var Clock = require('Clock');

var Timer = () => {
  return (
    <div>
      <p>This is the timer.jsx component</p>
      <Clock totalSeconds={315}/>  
    </div>

  )
}

module.exports = Timer;
