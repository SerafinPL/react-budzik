import React, {Component} from "react";
import "./guzik.css";





function Guzik(props) {
	return (
		<React.Fragment>
            <button onClick={this.props.funkcja} className={this.props.klasa}>{this.props.children}</button>
        </React.Fragment>
	)
} // GUZIK

export default Guzik;



