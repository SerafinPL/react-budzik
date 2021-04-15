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
// StopWatch //
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
  		let interval4;

  		if (playState) {
  			interval4 = setInterval(countingUp,1);
  		}
  		return () => {clearInterval(interval4);}
  	});

//CLOCK //
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

  const comparisonAlarm = () => {
  		
  		const newTimes = [...alarms];//...times]//this.state.times //document.getElementsByClassName("wpisy");
  		const currentTime = time;//document.getElementById("clock").textContent;
  		
  		
  		newTimes.map(index => {

  			let t = index.alarmClock.slice(0,8);
  			
  			if (t === currentTime){
  				document.getElementById("audio").play();
  				window.alert('Budzik ustawiono na: ' + currentTime);
  				//deleting(newTimes[i].key);
  			}
  			return null;
  		})
  	} // comparison


  	useEffect(() => {
  		
    const interval = setInterval(timer,1000);
    ;
    return () => {	
    	clearInterval(interval);}
  	},[]);		
  		
  	

  	useEffect(() => {
  		
  		const interval2 = setInterval(comparisonAlarm,500);
   		return () => {clearInterval(interval2);}
  		// eslint-disable-next-line
  	 },[time]);


  	const countingDown = () => {
  		const times = [...countdowns];//...timerState];
  		let newTimes = [];
  		let deleted = null; // zmienna zaznacza czy kasujemy ten element
  		
		times.map((item, index) => { 
		
			// v Wyodrębniamy godziny minuty i sekundy v
			let tg = Number(item.alarmClock.slice(0,2));
			let tm = Number(item.alarmClock.slice(3,5));
			let ts = Number(item.alarmClock.slice(6,8));
			  				
			let tns, tnm, tng;
			// v Robimy counting
			
			if (ts > 0){
				tns = ts-1
				tnm = tm;
				tng = tg;
			} else if (ts === 0 && tm > 0 ){
				tns = 59;
				tnm = tm -1;
				tng = tg;
			} else if (ts === 0 && tm === 0 && tg > 0){
				tns = 59;
				tnm = 59;
				tng = tg - 1;
			} else if ( ts === 0 && tm === 0 && tg === 0){
				// jeżeli doszlo do zera to muzyka i kasujemy wpis i zaznaczamy aby sie 
				// nie wpisał na nowo
				document.getElementById("audio").play();
				window.alert('Minutnik odliczył do zera!!')
				deleted = index;
			}

			// ustawiamy pomniejszony stan
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
			timer += tns;
			
			if (index !== deleted){ // sprawdzamy czy wpis nie jest skaowany żeby nie wszedl 
								  // na nowo
				newTimes.push( {  // ustaiwamy nowa tablice z pozostałych
					alarmClock : timer,
					key : item.key
				});
			}
	
	return null;
	}); // times.map
  			
  		if (newTimes !== undefined){ // blokada przed uzupełnianiem pusych tablic
  			//setTimerState(newTimes);
  			addCountdowns(newTimes);
    	}
  	}

  	useEffect(() => {
		const interval3 = setInterval(countingDown,1000);
  		return () => {clearInterval(interval3);}
  	},[countdowns]);

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
				<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>

			</React.Fragment>
		);
}




export default App;