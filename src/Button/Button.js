import React, {Component} from "react";
import "./Button.css";



const Guzik = (props) => {
	return(
		<React.Fragment>
            <button onClick={props.func} className={props.classe}>{props.children}</button>
        </React.Fragment>
	)
}; // Guzik



export default Guzik;



