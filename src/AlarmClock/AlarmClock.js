import React, {useContext} from "react";

import Clock from "../Clock/Clock.js";
import Display from "../Display/Display.js"
import Button from "../Button/Button.js";
import Times from "../Times/Times.js";
import classes from './AlarmClock.module.css';

import FullContext from '../context/context';

const AlarmClock = (props) => {
	const context = useContext(FullContext);
	
	const setter = () => {
		const g = document.getElementById("hour").textContent;
		const m = document.getElementById("min").textContent;
		const s = document.getElementById("sec").textContent;

		let timer = "";

		if (g < 10){
			timer = "0"; 
		} 
		timer += g + ":";

		if (m < 10){
			timer += "0"; 
		} 
		timer += m + ":";

		if (s < 10){
			timer += "0"; 
		} 
		timer += s;


		let tablicaCzasow = [...context.alarms];//...times];

		tablicaCzasow.unshift({
			alarmClock : timer,
			key : new Date().getTime()
		});

		context.addAlarms(tablicaCzasow);
				

	} //setter


	const deleting = (keyring) => {

		let filter = /*times*/context.alarms.filter((item) => {
      		return (item.key !== keyring)
    	});
   	
    	context.addAlarms(filter);

  	} // deleting

  		
	return(
	<React.Fragment>
		<div className={classes.main}>
			<p>Budzik</p>
			<Clock/>
			<Display gardener="23" identy="hour"/>
			<Display gardener="59" identy="min"/>
			<Display gardener="59" identy="sec"/>
			<Button children="Ustaw" classe="buttSet" func={setter}/>
		</div>
		<Times elements={context.alarms} deleting={deleting}/>
	</React.Fragment>
	);
	
}




  	


export default AlarmClock;