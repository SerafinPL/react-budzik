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
  		if (context.stopwatch === '00:00:00:00'){
  			context.setStartTimeSW(new Date().getTime());
  		} else {
  			const tg = Number(context.stopwatch.slice(0,2));
			const tm = Number(context.stopwatch.slice(3,5));
			const ts = Number(context.stopwatch.slice(6,8));
			const tss = Number(context.stopwatch.slice(9,11));

  			const stopWatchTime = new Date().getTime() -
  				( (tg * 3600 * 1000)  + 
  				(tm * 60 * 1000) + 
  				(ts * 1000) + 
  				(tss * 10) );
  			
  			context.setStartTimeSW(stopWatchTime);
  		}
  		
		context.changePlay(curr => !curr);

	}

	const toZero = () => {
		context.addStopwatch('00:00:00:00');
		context.changePlay(false);
		
		
	}

	return(
		<React.Fragment>
			<div className={classes.main}>
				<p>Stoper</p>
				<p id='Stopwatch'>{context.stopwatch}</p>
				
				<Button children={context.playState ? 'Stop' : 'Start'} classe="buttSet" func={startStop}/>
				<Button children='Zeruj' classe="buttSet" func={toZero} onMDown={toZero}/>
				<Button children='Zapisz czas' classe="buttSet" func={setter}/>
				
			</div>
			<Times elements={context.stopList} deleting={deleting}/>
		</React.Fragment>
	);
	
}

export default CountdownTimer;