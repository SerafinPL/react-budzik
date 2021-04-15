import React, {useContext} from "react";


import Button from "../Button/Button.js";
import Times from "../Times/Times.js";
import classes from './Stopwatch.module.css';

import FullContext from '../context/context';


const CountdownTimer = (props) => {
	
	const context = useContext(FullContext);

	const setter = () =>{
		const g =  Number(context.stopwatch.slice(0,2));
		const m = Number(context.stopwatch.slice(3,5));
		const s = Number(context.stopwatch.slice(6,8));
		const ss = Number(context.stopwatch.slice(9,11));
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
		timer += s + ":";
		if (ss < 10){
			timer += "0"; 
		} 
		timer += ss;

		let arrOfTimes = [...context.stopList];//...stopList];

		arrOfTimes.unshift({
			alarmClock : timer,
			key : new Date().getTime()
		});

		context.addStopLists(arrOfTimes);
		
	}


	const deleting = (keyring) => {

		let filtering = context.stopList.filter((item) => {
      		return (item.key !== keyring)
    	});

		context.addStopLists(filtering);
  	}


  	const startStop = () => {
		context.changePlay(curr => !curr);
	}

	const toZero = () => {
		
		context.addStopwatch('00:00:00:00');
		context.changePlay(false);
	}

	return(

			<div className={classes.main}>
				<p>Stoper</p>
				<p id='Stopwatch'>{context.stopwatch}</p>
				
				<Button children={context.playState ? 'Stop' : 'Start'} classe="buttSet" func={startStop}/>
				<Button children='Zeruj' classe="buttSet" func={toZero}/>
				<Button children='Zapisz czas' classe="buttSet" func={setter}/>
				<Times elements={context.stopList} deleting={deleting}/>
			
			</div>

	);
	
}

export default CountdownTimer;