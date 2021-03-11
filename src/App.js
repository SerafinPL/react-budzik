import React, {Component} from "react";

import {NavLink, Route} from 'react-router-dom';

import Button from "./Button/Button.js";
import AlarmClock from "./AlarmClock/AlarmClock.js";
import CountdownTimer from "./CountdownTimer/CountdownTimer.js";
import classes from './App.module.css';

class App extends Component {
  
 

render() {

	return(
	<React.Fragment>
		<nav className={classes.navi}>
			<NavLink to='/alarmclock' activeClassName={classes.active}>Budzik</NavLink>
			<NavLink to='/countdowntimer' activeClassName={classes.active}>Minutnik</NavLink>
			
			<Button children="Stoper" classe="buttSet" />
			<Button children="Odliczanie" classe="buttSet" />
		</nav>
		<Route path='/alarmclock' component={AlarmClock}/>
		<Route path='/countdowntimer' component={CountdownTimer}/>
	</React.Fragment>
		)
}
}



export default App;