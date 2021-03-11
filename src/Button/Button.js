import React, {Component} from "react";
import "./Button.css";



const Button = (props) => {
	return(
		<React.Fragment>
            <button onClick={props.func} className={props.classe}>{props.children}</button>
        </React.Fragment>
	)
}; // Button



export default Button;



