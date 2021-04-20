import React, {useState, useEffect} from "react";


import Button from "../Button/Button";
import Window from "../Window/Window";
import classes from './Display.module.css'



const Display = (props) => {
	
	const [value, setValue] = useState(0);
	const [pressedUp, setPressedUp] = useState(false);
	const [pressedDown, setPressedDown] = useState(false);

	const upgrade = () => {
		if (value < props.gardener){
			setValue(curr => curr + 1);
		} else {
			setValue(0);
		}
	};

	const downgrade = () => {
		if (value <= 0){
			setValue(props.gardener);
		} else {
			setValue(curr => curr - 1);
		}
	};





	useEffect(() => {
			let interval;
			if (pressedUp) {
				interval = setInterval(() => {
					console.log('UUP');
					upgrade();
				},100);
			}
			if (pressedDown) {
				interval = setInterval(() => {
					console.log('DOWN');
					downgrade();
				},100);
			}
		
		return () => {
			
			clearInterval(interval);
			
		}
	},[pressedUp, pressedDown, value]);

	return(
		<React.Fragment>
			<div className={classes.block}>
				<Button children="+" 
						classe="buttMini" 
						func={upgrade} 
						onMDown={() => setPressedUp(true)} 
						onMUp={() => setPressedUp(false)}
				/>
				<Window ident={props.identy} content={value}/>
				<Button children="-" 
						classe="buttMini" 
						func={downgrade} 
						onMDown={() => setPressedDown(true)} 
						onMUp={() => setPressedDown(false)}
				/>
			</div>
		</React.Fragment>
	);
}


export default Display;