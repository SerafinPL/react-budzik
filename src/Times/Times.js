
import React from "react";
import './Times.css';


const Times = (props)=> {
  

  const newItems = (element) => {
    return(
      <li className="item"
        key={element.key}>{element.alarmClock}
        <span onClick={() => deleteItems(element.key)}>X</span></li>
    );
  }

  const deleteItems = (key) => {
    props.deleting(key);
  }

  
      var Items = props.elements ;
      var listElements = Items.map(newItems);

      return(
        <ul className="list">
          {listElements}
        </ul>
      );
  
};

export default Times;
