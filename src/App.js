import React from "react";

import {NavLink, Route} from 'react-router-dom';

import Button from "./Button/Button.js";
import AlarmClock from "./AlarmClock/AlarmClock.js";
import CountdownTimerFunc from "./CountdownTimer/CountdownTimerFunc.js";
import Stopwatch from "./Stopwatch/Stopwatch.js";
import classes from './App.module.css';

import FullContext from './context/context';

const App = () => {
   
	return(
			<React.Fragment>
				<nav className={classes.navi}>
					<NavLink to='/alarmclock' activeClassName={classes.active}>Budzik</NavLink>
					<NavLink to='/countdowntimer' activeClassName={classes.active}>Minutnik</NavLink>
					<NavLink to='/stopwatch' activeClassName={classes.active}>Stoper</NavLink>
					<Button children="Odliczanie" classe="buttSet" />
				</nav>
				<Route path='/alarmclock' component={AlarmClock}/>
				<Route path='/countdowntimer' component={CountdownTimerFunc}/>
				<Route path='/stopwatch' component={Stopwatch}/>

				
			</React.Fragment>
		);
}




export default App;