import React, {Component} from "react";
import "./guzik.css";



const Guzik = (props) => {
	return(
		<React.Fragment>
            <button onClick={props.funkcja} className={props.klasa}>{props.children}</button>
        </React.Fragment>
	)
}; // Guzik



export default Guzik;



