import React, {useContext} from "react";

import "./Clock.css"
import FullContext from '../context/context';

const Clock = (props) => {

  const context = useContext(FullContext);
  console.log(context.time);
  return(
      <div className="clock">
        <p id="clock">{context.time}</p>
      </div>
  );
 
}

export default Clock;
