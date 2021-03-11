import React, {Component} from "react";
import "./Button.css";



const Guzik = (props) => {
	return(
		<React.Fragment>
            <button onClick={props.funkcja} className={props.klasa}>{props.children}</button>
        </React.Fragment>
	)
}; // Guzik



export default Guzik;



