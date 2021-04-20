import React from "react";
import "./Button.css";



const Button = (props) => {
	return(
		<React.Fragment>
            <button 
            	onClick={props.func} 
            	onMouseDown={props.onMDown} 
            	onMouseUp={props.onMUp} 
            	className={props.classe}
            >{props.children}</button>
        </React.Fragment>
	)
}; // Button



export default Button;



