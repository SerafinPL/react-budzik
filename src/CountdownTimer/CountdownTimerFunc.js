import React, {useContext} from "react";


import Display from "../Display/Display.js"
import Button from "../Button/Button.js";
import Times from "../Times/Times.js";
import classes from './CountdownTimer.module.css';

import FullContext from '../context/context';



//class CountdownTimer extends React.Component {
const CountdownTimer = (props) => {
	
	const context = useContext(FullContext);

	//const [timerState, setTimerState] = useState([]);
	// zmiana na strzałkową funkcje daje możliwość pomijania bindowania
	const setter = () =>{
		const g = document.getElementById("hour").textContent;
		const m = document.getElementById("min").textContent;
		const s = document.getElementById("sec").textContent;

		const countdownStartTime = new Date( new Date().getTime() +
		  				( (g * 3600 * 1000)  + 
		  				(m * 60 * 1000) + 
		  				( (s * 1000 ) -1 )  ) );

  		const countdownLeft = new Date( countdownStartTime.getTime() - new Date().getTime() );	
  		
  		const tng = new Date(countdownLeft-3600000).getHours();
		const tnm = new Date(countdownLeft).getMinutes();		
		const tns = new Date(countdownLeft).getSeconds();

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


		let arrOfTimes = [...context.countdowns];//...timerState];

		arrOfTimes.unshift({
			countdownTime : countdownStartTime,
			alarmClock: timer,
			key : new Date().getTime()
		});
		context.addCountdowns(arrOfTimes);
		//setTimerState(arrOfTimes);
		
	}


	const deleting = (keyring) => {

		let filtering = /*timerState*/context.countdowns.filter((item) => {
      		return (item.key !== keyring)
    	});
		context.addCountdowns(filtering);
		//setTimerState(filtering);
    	
  	}



	return(
		<React.Fragment>
			<div className={classes.main}>
				<p>Minutnik</p>
				<Display gardener="23" identy="hour"/>
				<Display gardener="59" identy="min"/>
				<Display gardener="59" identy="sec"/>
				<Button children="Ustaw" classe="buttSet" func={setter}/>
			</div>
			<Times elements={context.countdowns} deleting={deleting}/>
		</React.Fragment>

	);
	
}

export default CountdownTimer;