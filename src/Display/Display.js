import React, {useState} from "react";


import Button from "../Button/Button";
import Window from "../Window/Window";
import classes from './Display.module.css'



const Display = (props) => {
	
	const [value, setValue] = useState(0)

	const upgrade = () => {
		if (value < props.gardener){
			setValue(curr => curr + 1);
			
		} else {
			setValue(0);
		}
	}

	const downgrade = () => {
		if (value === 0){

			setValue(props.gardener);

		} else {
			setValue(curr => curr - 1);
		}

		
	}

	return(
		<React.Fragment>
			<div className={classes.block}>
				<Button children="+" classe="buttMini" func={upgrade}/>
				<Window ident={props.identy} content={value}/>
				<Button children="-" classe="buttMini" func={downgrade}/>
			</div>
		</React.Fragment>
	);
}


export default Display;