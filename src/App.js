import React, {useEffect, useState} from "react";

import {NavLink, Route, Switch, Redirect} from 'react-router-dom';

import Button from "./Button/Button.js";
import AlarmClock from "./AlarmClock/AlarmClock.js";
import CountdownTimerFunc from "./CountdownTimer/CountdownTimerFunc.js";
import Stopwatch from "./Stopwatch/Stopwatch.js";
import classes from './App.module.css';

import FullContext from './context/context';

import useTime from './ownHook/timeHook';



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
		console.log(timer);
		return timer;
	}

/*  COUNTING UP STOPWATCH */
	const countingUp = () => {
  		
		const StopWatchTime = new Date().getTime() - startTimeSW;
		//ustawiamy stan
		const tng = Number( new Date(StopWatchTime-3600000).getHours() );
		const tnm = Number( new Date(StopWatchTime).getMinutes() );		
		const tns = Number( new Date(StopWatchTime).getSeconds() );
		const tnss = Number( Math.floor(new Date(StopWatchTime).getMilliseconds() / 10) );		

		setStopwatch(timing(tng, tnm, tns, tnss));
 	}
  	useEffect(() => {
  		let interval4;
  		if (playState) {
  			interval4 = setInterval(countingUp,10);
  		}
  		return () => {clearInterval(interval4);}
  	},[stopwatch, playState]);

/*CLOCK */
  	const timer = () => {

	    //const dd = new Date();
	    const tng = Number( new Date().getHours() );
	    const tnm = Number( new Date().getMinutes() );
	    const tns = Number( new Date().getSeconds() );

	    setTime(timing(tng, tnm, tns));

	    //setTime(editTime);
  	}

  	useEffect(() => {
  		
    const interval = setInterval(timer,1000);
    
    return () => {	
    	clearInterval(interval);}
  	},[]);		
  		

/*  ALARM CHECK */

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
  		
  		const interval2 = setInterval(comparisonAlarm,500);
   		return () => {clearInterval(interval2);}
  		
  	 },[time]);


/*  COUNTING DOWN */
  	const countingDown = () => {
  		const times = [...countdowns];//...timerState];
  		let newTimes = [];
  		let deleted = null; // zmienna zaznacza czy kasujemy ten element
  		
		times.map((item, index) => { 
			
			// v Wyodrębniamy godziny minuty i sekundy v
			// let tg = Number(item.alarmClock.slice(0,2));
			// let tm = Number(item.alarmClock.slice(3,5));
			// let ts = Number(item.alarmClock.slice(6,8));
			  				
			// let tns, tnm, tng;
			// // v Robimy counting
			
			// if (ts > 0){
			// 	tns = ts-1
			// 	tnm = tm;
			// 	tng = tg;
			// } else if (ts === 0 && tm > 0 ){
			// 	tns = 59;
			// 	tnm = tm -1;
			// 	tng = tg;
			// } else if (ts === 0 && tm === 0 && tg > 0){
			// 	tns = 59;
			// 	tnm = 59;
			// 	tng = tg - 1;
			// } else if ( ts === 0 && tm === 0 && tg === 0){
			// 	// jeżeli doszlo do zera to muzyka i kasujemy wpis i zaznaczamy aby sie 
			// 	// nie wpisał na nowo
			// 	document.getElementById("audio").play();
			// 	window.alert('Minutnik odliczył do zera!!')
			// 	deleted = index;
			// }

			let tns, tnm, tng, baseTime;
			let timer = "";

			if (item.countdownTime <= new Date()) {
				document.getElementById("audio").play();
				window.alert('Minutnik odliczył do zera!!')
				deleted = index;
			} else {
				//tng = item.countdownTime.getHours();

				baseTime = new Date( item.countdownTime.getTime() - new Date().getTime() );
				
				tng = new Date(baseTime-3600000).getHours();
				tnm = new Date(baseTime).getMinutes();
				tns = new Date(baseTime).getSeconds();

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
					time: time,
					startTimeSW: startTimeSW,
					setStartTimeSW: setStartTimeSW


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