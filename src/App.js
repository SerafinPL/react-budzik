import React, {useState} from "react";

import {NavLink, Route, Switch, Redirect} from 'react-router-dom';

import Button from "./Button/Button.js";
import AlarmClock from "./AlarmClock/AlarmClock.js";
import CountdownTimerFunc from "./CountdownTimer/CountdownTimerFunc.js";
import Stopwatch from "./Stopwatch/Stopwatch.js";
import classes from './App.module.css';

import FullContext from './context/context';

const App = () => {
   
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
					playState: playState

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