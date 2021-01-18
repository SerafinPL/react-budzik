import React, {Component} from "react";
import "./guzik.css";





function Guzik(props) {
	return (
		<React.Fragment>
            <button onClick={props.funkcja} className={props.klasa}>{props.children}</button>
        </React.Fragment>
	)
} // GUZIK

export default Guzik;



