import React, {useState, useEffect} from "react";

import Clock from "../Clock/Clock.js";
import Display from "../Display/Display.js"
import Button from "../Button/Button.js";
import Times from "../Times/Times.js";
import classes from './AlarmClock.module.css';

const AlarmClock = (props) => {

	const [times, setTimes] = useState([]);


	// zmiana na strzałkową funkcje daje możliwość pomijania bindowania
	const setter = () => {
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


		let tablicaCzasow = [...times];

		tablicaCzasow.unshift({
			alarmClock : timer,
			key : Date.now()
		});

		setTimes(tablicaCzasow);

				

	} //setter


	const deleting = (keyring) => {

		let filter = times.filter((item) => {
      		return (item.key !== keyring)
    	});

    	
    	setTimes(filter);

  	} // deleting

  	const comparison = () => {
  		const newTimes = [...times]//this.state.times //document.getElementsByClassName("wpisy");
  		const currentTime = document.getElementById("clock").textContent;
  		
  		
  		newTimes.map(index => {

  			let t = index.alarmClock.slice(0,8);

  			if (t === currentTime){
  				document.getElementById("audio").play();
  				window.alert(currentTime);
  				//deleting(newTimes[i].key);
  			}
  			return null;
  		})
  			
  			
  		
  	} // comparison

  	useEffect(() => {
  		const interval = setInterval(comparison,1000);
  		return clearInterval(interval);
  	},[])

  


	
	return(
		<div className={classes.main}>
			<p>Budzik</p>
			<Clock/>
			<Display gardener="23" identy="hour"/>
			<Display gardener="59" identy="min"/>
			<Display gardener="59" identy="sec"/>
			<Button children="Ustaw" classe="buttSet" func={setter}/>
			<Times elements={times} deleting={deleting}/>
			<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>
		</div>

	);
	
}




  	


export default AlarmClock;