import React, {Component} from "react";
import "./guzik.css";


class Guzik extends Component {
	render() {
        return(
          <React.Fragment>
            <button onClick={this.props.funkcja} className={this.props.klasa}>{this.props.children}</button>
          </React.Fragment>
        );
      }
} //class Guzik


export default Guzik;

