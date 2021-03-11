
import React, {Component} from "react";
import './Times.css';


class Times extends Component {
  constructor(props) {
    super(props);

    //this.newItems = this.newItems.bind(this);
    //this.deleteItems = this.deleteItems.bind(this);
  }

  newItems = (element) => {
    return(
      <li className="item"
        key={element.key}>{element.alarmClock}
        <span onClick={() => this.deleteItems(element.key)}>X</span></li>
    );
  }

  deleteItems = (key) => {
    this.props.deleting(key);
  }

  render() {
      var Items = this.props.elements ;
      var listElements = Items.map(this.newItems);

      return(
        <ul className="list">
          {listElements}
        </ul>
      );
  }
};

export default Times;
