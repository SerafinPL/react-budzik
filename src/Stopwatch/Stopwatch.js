import React, {useState, useEffect} from "react";


import Button from "../Button/Button.js";
import Times from "../Times/Times.js";
import classes from './Stopwatch.module.css';



//class CountdownTimer extends React.Component {
const CountdownTimer = (props) => {
	
	const [stopwatchState, setStopwatchState] = useState('00:00:00:00');
	const [playState, setPlayState] = useState(false);
	const [stopList, setStopList] = useState([]);
	
	const setter = () =>{
		const g =  Number(stopwatchState.slice(0,2));
		const m = Number(stopwatchState.slice(3,5));
		const s = Number(stopwatchState.slice(6,8));
		const ss = Number(stopwatchState.slice(9,11));
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

		let arrOfTimes = [...stopList];

		arrOfTimes.unshift({
			alarmClock : timer,
			key : new Date().getTime()
		});

		setStopList(arrOfTimes);
		
	}


	const deleting = (keyring) => {

		let filtering = stopList.filter((item) => {
      		return (item.key !== keyring)
    	});

		setStopList(filtering);
    	
  	}


  	const counting = () => {
  			
  		
  			const time = stopwatchState;
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
			
			setStopwatchState(timer);
  	    	
  	}

  	useEffect(() => {
  		let interval;

  		if (playState) {
  			interval = setInterval(counting,10);
  		}
  		return () => {clearInterval(interval);}
  	});


	const startStop = () => {
		setPlayState(curr => !curr);
		
	}
	
	return(

			<div className={classes.main}>
				<p>Stoper</p>
				<p id='Stopwatch'>{stopwatchState}</p>
				
				<Button children={playState ? 'Stop' : 'Start'} classe="buttSet" func={startStop}/>
				<Button children='Zapisz czas' classe="buttSet" func={setter}/>
				<Times elements={stopList} deleting={deleting}/>
			
			</div>

	);
	
}

export default CountdownTimer;