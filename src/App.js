import React, {useEffect, useState, useCallback} from "react";

import {NavLink, Route, Switch, Redirect} from 'react-router-dom';

import AlarmClock from "./AlarmClock/AlarmClock.js";
import CountdownTimerFunc from "./CountdownTimer/CountdownTimerFunc.js";
import Stopwatch from "./Stopwatch/Stopwatch.js";
import CountOut from './countOutDays/countOutDays';

import classes from './App.module.css';

import FullContext from './context/context';

import useTimeDisplay from './ownHook/timeDisplayHook';


const App = () => {
   	// czas aktualny
   	const [time, setTime] = useState('');
   	//lista alarmów
	const [alarms, setAlatms] = useState([]);
	//lista minutników
	const [countdowns, setCountdowns] = useState([]);
	// aktualny stan stopera
	const [stopwatch, setStopwatch] = useState('00:00:00:00');
	// lista odmierzonych czasów stopera
	const [stopList, setstopList] = useState([]);
	// stan on/off stopera
	const [playState, setPlayState] = useState(false);
	// czas początkowy dla stopera
	const [startTimeSW, setStartTimeSW] = useState(0);

	const addAlarms = (value) => { setAlatms([...value]); };
	const addCountdowns = (value) => { setCountdowns([...value]); };
	const addStopwatch = (value) => { setStopwatch(value); };
	const addStopLists = (value) => { setstopList([...value]); };
	const changePlay = (value) => { setPlayState(value); };

	const timeDisplay = useTimeDisplay();

	const timing = (g, m, s, ss) => {
		let timer = '';
		if (ss || ss === 0) {

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

		} else {
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
		}
		return timer;
	}

/*  COUNTING UP STOPWATCH */
	const countingUp = useCallback(() => {
  		
		const StopWatchTime = new Date().getTime() - startTimeSW;
		//ustawiamy stan
		const tng = Number( new Date(StopWatchTime-3600000).getHours() );
		const tnm = Number( new Date(StopWatchTime).getMinutes() );		
		const tns = Number( new Date(StopWatchTime).getSeconds() );
		const tnss = Number( Math.floor(new Date(StopWatchTime).getMilliseconds() / 10) );		

		setStopwatch(timeDisplay(tng, tnm, tns, tnss));
 	} ,[startTimeSW]);
  	useEffect(() => {
  		let interval4;
  		if (playState) {
  			interval4 = setInterval(countingUp,10);
  		}
  		return () => {clearInterval(interval4);}
  	},[stopwatch, playState, countingUp]);

/*CLOCK */
  	const timer = useCallback(() => {

	    const tng = Number( new Date().getHours() );
	    const tnm = Number( new Date().getMinutes() );
	    const tns = Number( new Date().getSeconds() );

	    setTime(timeDisplay(tng, tnm, tns));
  	} ,[] );

  	useEffect(() => {
  		
    const interval = setInterval(timer,1000);
    
    return () => {	
    	clearInterval(interval);}
  	},[timer]);		
  		

/*  ALARM CHECK */

  const comparisonAlarm = useCallback(() => {
  		
  		const newTimes = [...alarms];//...times]//this.state.times //document.getElementsByClassName("wpisy");
  		  		
  		newTimes.map(index => {

  			let t = index.alarmClock.slice(0,8);
  			
  			if (t === time){
  				document.getElementById("audio").play();
  				window.alert('Budzik ustawiono na: ' + time);
  			}
  			return null;
  		})
  	} ,[alarms, time])// comparison

  	useEffect(() => {
  		
  		const interval2 = setInterval(comparisonAlarm,500);
   		return () => {clearInterval(interval2);}
  		
  	 },[time, comparisonAlarm]);


/*  COUNTING DOWN */
  	const countingDown = useCallback(() => {
  		const times = [...countdowns];//...timerState];
  		let newTimes = [];
  		let deleted = null; // zmienna zaznacza czy kasujemy ten element
  		
		times.map((item, index) => { 
			let tns, tnm, tng;
			let timer = "";

			if (item.countdownTime <= new Date()) {
				document.getElementById("audio").play();
				window.alert('Minutnik odliczył do zera!!')
				deleted = index;
			} else {
				const baseTime = new Date( (item.countdownTime.getTime()+1000) - new Date().getTime() );
				
				tng = new Date(baseTime-3600000).getHours();
				tnm = new Date(baseTime).getMinutes();
				tns = new Date(baseTime).getSeconds();
				timer = timeDisplay(tng, tnm, tns);
			};

			// ustawiamy pomniejszony stan
			if (index !== deleted){ // sprawdzamy czy wpis nie jest skaowany żeby nie wszedl 
								  // na nowo
				newTimes.push( {  // ustaiwamy nowa tablice z pozostałych
					countdownTime : item.countdownTime,
					alarmClock: timer,
					key : item.key
				});
			}
	
			return null;
		}); // times.map
  			
  		if (newTimes !== undefined){ // blokada przed uzupełnianiem pusych tablic
  			setCountdowns(newTimes);
    	}
  	} ,[countdowns]);

  	useEffect(() => {
		const interval3 = setInterval(countingDown,1000);
		return () => {clearInterval(interval3);}
  	},[countdowns, countingDown]);

	return(
			<React.Fragment>
				<FullContext.Provider value={{
					//to clock 
					addAlarms: addAlarms,
					alarms:  alarms,
					time: time,

					//to countDown
					addCountdowns: addCountdowns,
					countdowns: countdowns,

					//to stopwatch
					addStopwatch: addStopwatch,
					addStopLists: addStopLists,
					changePlay: changePlay,
					playState: playState,
					stopwatch: stopwatch,
					stopList: stopList,
					startTimeSW: startTimeSW,
					setStartTimeSW: setStartTimeSW,

					// to all
					timing: timing
				}}>
					<nav className={classes.navi}>
						<NavLink to='/alarmclock' activeClassName={classes.active}>Budzik</NavLink>
						<NavLink to='/countdowntimer' activeClassName={classes.active}>Minutnik</NavLink>
						<NavLink to='/stopwatch' activeClassName={classes.active}>Stoper</NavLink>
						<NavLink to='/countoutdays' activeClassName={classes.active}>Odliczanie Dni</NavLink>
						
					</nav>
					<Switch>
						<Route path='/alarmclock' component={AlarmClock}/>
						<Route path='/countdowntimer' component={CountdownTimerFunc}/>
						<Route path='/stopwatch' component={Stopwatch}/>
						<Route path='/countoutdays' component={CountOut}/>
						<Redirect to='/alarmclock' />
					</Switch>
				</FullContext.Provider>
				<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>

			</React.Fragment>
		);
}

export default App;