import React, {useState, useEffect, useContext} from "react";


import Button from "../Button/Button.js";
import Times from "../Times/Times.js";
import classes from './Stopwatch.module.css';

import FullContext from '../context/context';


const CountdownTimer = (props) => {
	
	const context = useContext(FullContext);

	//const [stopwatchState, setStopwatchState] = useState('00:00:00:00');
	const [playState, setPlayState] = useState(false);

	//const [stopList, setStopList] = useState([]);
	


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

		//setStopList(arrOfTimes);
		context.addStopLists(arrOfTimes);
		
	}


	const deleting = (keyring) => {

		let filtering = context.stopList.filter((item) => {
      		return (item.key !== keyring)
    	});

		//setStopList(filtering);
    	context.addStopLists(filtering);
  	}


  	const countingUp = () => {
  			
  		
  			const time = context.stopwatch;
  					// v Wyodrębniamy godziny minuty i sekundy v
			const tg = Number(time.slice(0,2));
			const tm = Number(time.slice(3,5));
			const ts = Number(time.slice(6,8));
			const tss = Number(time.slice(9,11));
			  				
			let tnss, tns, tnm, tng;
			// v Robimy counting
			if ( tss === 99 && ts === 59 && tm === 59 && tg === 23){
				tnss = 0;
				tns = 0;
				tnm = 0;
				tng = 0;
			} else if ( tss === 99 && ts === 59 && tm === 59 && tg < 23) {
				tnss = 0;
				tns = 0;
				tnm = 0;
				tng = tg + 1;
			} else if (tss === 99 && ts === 59 && tm < 59) {
				tnss = 0;
				tns = 0;
				tnm = tm + 1;
				tng = tg;
			} else if (tss === 99 && ts < 59) {
				tnss = 0;
				tns = ts + 1;
				tnm = tm;
				tng = tg;
			} else if (tss < 99) {
				tnss = tss  + 1;
				tns = ts;
				tnm = tm;
				tng = tg;
			}


			// ustawiamy powiększony stan
			let timer = "";

			if (tng < 10){
				timer = "0"; 
			} 
			timer += tng + ":";

			if (tnm < 10){
				timer += "0"; 
			} 
			timer += tnm + ":";

			if (tns < 10){
				timer += "0"; 
			} 
			timer += tns + ":";;
			if (tnss < 10){
				timer += "0"; 
			} 
			timer += tnss;
			context.addStopwatch(timer);
			//setStopwatchState(timer);
  	    	
  	}

  	useEffect(() => {
  		let interval;

  		if (context.playState) {
  			interval = setInterval(countingUp,10);
  		}
  		return () => {clearInterval(interval);}
  	});


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