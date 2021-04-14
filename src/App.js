import React from "react";

import {NavLink, Route} from 'react-router-dom';

import Button from "./Button/Button.js";
import AlarmClock from "./AlarmClock/AlarmClock.js";
import CountdownTimer from "./CountdownTimer/CountdownTimer.js";
import CountdownTimerFunc from "./CountdownTimer/CountdownTimerFunc.js";
import classes from './App.module.css';

const App = () => {
  
 



	return(
			<React.Fragment>
				<nav className={classes.navi}>
					<NavLink to='/alarmclock' activeClassName={classes.active}>Budzik</NavLink>
					<NavLink to='/countdowntimer' activeClassName={classes.active}>Minutnik</NavLink>
					<Button children="Stoper" classe="buttSet" />
					<Button children="Odliczanie" classe="buttSet" />
				</nav>
				<Route path='/alarmclock' component={AlarmClock}/>
				<Route path='/countdowntimer' component={CountdownTimerFunc}/>
				
			</React.Fragment>
		);
}




export default App;