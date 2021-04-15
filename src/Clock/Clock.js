import React, {useState, useEffect, useContext} from "react";

import "./Clock.css"
import FullContext from '../context/context';

const Clock = (props) => {

  const context = useContext(FullContext);


  const [time, setTime] = useState('');

  return(
      <div className="clock">
        <p id="clock">{context.time}</p>
      </div>
  );
 
}

export default Clock;
