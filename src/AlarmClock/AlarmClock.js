import React, {useContext} from "react";

import Clock from "../Clock/Clock.js";
import Display from "../Display/Display.js"
import Button from "../Button/Button.js";
import Times from "../Times/Times.js";
import classes from './AlarmClock.module.css';

import FullContext from '../context/context';
import useTimeDisplay from '../ownHook/timeDisplayHook';

const AlarmClock = (props) => {
	const timeDisplay = useTimeDisplay();
	const context = useContext(FullContext);
	
	const setter = () => {
		const g = document.getElementById("hour").textContent;
		const m = document.getElementById("min").textContent;
		const s = document.getElementById("sec").textContent;

		let arrOfTimes = [...context.alarms];//...times];

		arrOfTimes.unshift({
			alarmClock : timeDisplay(g, m, s),
			key : new Date().getTime()
		});

		context.addAlarms(arrOfTimes);

	} //setter


	const deleting = keyring => {

		let filter = context.alarms.filter( item => item.key !== keyring );
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