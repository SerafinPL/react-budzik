import React, {Component} from "react";

import "./Clock.css"

class Clock extends Component {
  constructor(props) {
    super(props);

    //this.timer = this.timer.bind(this);

    this.state = {
      time: ""
    }
  }



  timer = () => {

    const dd = new Date();

    let editTime = '';
    const hour = dd.getHours();
    if (hour < 10) {
      editTime += '0';
    }
    editTime = hour + ':';

    const min = dd.getMinutes();
    if (min < 10) {
      editTime += '0';
    }
    editTime += min + ':';
    const secondo = dd.getSeconds();
    if (secondo < 10) {
      editTime += '0';
    }
    editTime += secondo;

    
    this.setState({
      time: editTime
    });
    

  }
  
  componentDidMount() {
    
    this.interval = setInterval(this.timer,1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render(){
    return(
      <div className="clock">
        <p id="clock">{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
