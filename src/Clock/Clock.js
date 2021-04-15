import React, {useState, useEffect} from "react";

import "./Clock.css"

const Clock = (props) => {

  const [time, setStime] = useState('');

  const timer = () => {

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

    
    setStime(editTime);

  }

  useEffect(() => {
    const interval = setInterval(timer,1000);
    return () => {clearInterval(interval);}
  })
  

    return(
      <div className="clock">
        <p id="clock">{time}</p>
      </div>
    );
 
}

export default Clock;
