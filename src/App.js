import React, {useEffect, useState} from "react";

import {NavLink, Route, Switch, Redirect} from 'react-router-dom';

import Button from "./Button/Button.js";
import AlarmClock from "./AlarmClock/AlarmClock.js";
import CountdownTimerFunc from "./CountdownTimer/CountdownTimerFunc.js";
import Stopwatch from "./Stopwatch/Stopwatch.js";
import classes from './App.module.css';

import FullContext from './context/context';

const App = () => {
   
   	const [time, setTime] = useState('');
	const [alarms, setAlatms] = useState([]);
	const [countdowns, setCountdowns] = useState([]);
	const [stopwatch, setStopwatch] = useState('00:00:00:00');
	const [stopList, setstopList] = useState([]);
	const [playState, setPlayState] = useState(false);

	const addAlarms = (value) => {
		setAlatms([...value]);
	}

	const addCountdowns = (value) => {
		setCountdowns([...value]);
	}

	const addStopwatch = (value) => {
		setStopwatch(value);
	}

	const addStopLists = (value) => {
		setstopList([...value]);
	}

	const changePlay = (value) => {
		setPlayState(value);
	}

	const countingUp = () => {
  			
			const stopwatching = stopwatch;
					// v Wyodrębniamy godziny minuty i sekundy v
		const tg = Number(stopwatching.slice(0,2));
		const tm = Number(stopwatching.slice(3,5));
		const ts = Number(stopwatching.slice(6,8));
		const tss = Number(stopwatching.slice(9,11));
		  				
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
		addStopwatch(timer);
		  	    	
  	}


  	useEffect(() => {
  		let interval;

  		if (playState) {
  			interval = setInterval(countingUp,10);
  		}
  		return () => {clearInterval(interval);}
  	});

  	const timer = () => {

	    const dd = new Date();

	    let editTime = '';
	    const hour = dd.getHours();
	    if (hour < 10) {
	      editTime += '0';
	    }
	    editTime = hour + ':';

	    const min = dd.getMinutes();
	    if (min < 10) {
	      editTime += '0';
	    }
	    editTime += min + ':';
	    const secondo = dd.getSeconds();
	    if (secondo < 10) {
	      editTime += '0';
	    }
	    editTime += secondo;

	    
	    setTime(editTime);
  	}

  useEffect(() => {

    const interval = setInterval(timer,1000);
    return () => {clearInterval(interval);}
  })

	return(
			<React.Fragment>
				<FullContext.Provider value={{
					addAlarms: addAlarms,
					addCountdowns: addCountdowns,
					addStopwatch: addStopwatch,
					addStopLists: addStopLists,

					changePlay: changePlay,
					alarms:  alarms,
					countdowns: countdowns,
					stopwatch: stopwatch,
					stopList: stopList,
					playState: playState,
					time: time

				}}>
					<nav className={classes.navi}>
						<NavLink to='/alarmclock' activeClassName={classes.active}>Budzik</NavLink>
						<NavLink to='/countdowntimer' activeClassName={classes.active}>Minutnik</NavLink>
						<NavLink to='/stopwatch' activeClassName={classes.active}>Stoper</NavLink>
						<Button children="Odliczanie" classe="buttSet" />
					</nav>
					<Switch>
						<Route path='/alarmclock' component={AlarmClock}/>
						<Route path='/countdowntimer' component={CountdownTimerFunc}/>
						<Route path='/stopwatch' component={Stopwatch}/>
						<Redirect to='/alarmclock' />
					</Switch>
				</FullContext.Provider>
			</React.Fragment>
		);
}




export default App;