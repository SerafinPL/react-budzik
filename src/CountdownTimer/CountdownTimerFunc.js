import React, {useState, useEffect, useContext} from "react";


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
		timer += s;

		let arrOfTimes = [...context.countdowns];//...timerState];

		arrOfTimes.unshift({
			alarmClock : timer,
			key : Date.now()
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


  	const counting = () => {
  		const times = [...context.countdowns];//...timerState];
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
				window.alert('Odliczono do zera!!!')
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
  			context.addCountdowns(newTimes);
    	}
  	}

  	useEffect(() => {
		const interval = setInterval(counting,1000);
  		return () => {clearInterval(interval);}
  	})
	
	
	return(
			<div className={classes.main}>
				<p>Minutnik</p>
			<Display gardener="23" identy="hour"/>
			<Display gardener="59" identy="min"/>
			<Display gardener="59" identy="sec"/>
			<Button children="Ustaw" classe="buttSet" func={setter}/>
			<Times elements={context.countdowns} deleting={deleting}/>
			<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>
			</div>

	);
	
}

export default CountdownTimer;