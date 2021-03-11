import React from "react";

import Clock from "../Clock/Clock.js";
import Display from "./Display.js"
import Button from "../Button/Button.js";
import Times from "../Times/Times.js";

class Budzik extends React.Component {
	constructor(props){
		super(props);

		//this.ustawianie = this.ustawianie.bind(this);
		//this.kasowanie = this.kasowanie.bind(this);
		

		this.state = {
			times : []
		}
	}

	// zmiana na strzałkową funkcje daje możliwość pomijania bindowania
	ustawianie = () => {
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


		let tablicaCzasow = this.state.times;

		tablicaCzasow.unshift({
			alarmClock : timer,
			klucz : Date.now()
		});

		this.setState({
			times : tablicaCzasow
		});

		console.log(this.state.times);		

	} //ustawianie


	kasowanie = (kluczyk) => {

		let filter = this.state.times.filter((item) => {
      		return (item.klucz !== kluczyk)
    	});

    	this.setState({
      		times: filter
    	});
  	} // kasowanie

  	comparison = () => {
  		const times = this.state.times //document.getElementsByClassName("wpisy");
  		const currentTime = document.getElementById("zegar").textContent;
  		
  		for(let i = 0;i < times.length ; i++){
  			
  			let t = times[i].alarmClock.slice(0,8);

  			if (t === currentTime){
  					
  				document.getElementById("audio").play();
  				window.alert(currentTime);
  				//this.kasowanie(times[i].klucz);
  				
  			}
  		}
  	} // comparison

  	componentDidMount() {
       	this.interval = setInterval(this.comparison,1000);
  	}
  
  	componentWillUnmount() {
    	clearInterval(this.interval);
  	}	


	render(){
		return(
  			<div className="main">
  				<p>Budzik</p>
    			<Clock/>
    			<Display gardener="23" identy="hour"/>
    			<Display gardener="59" identy="min"/>
    			<Display gardener="59" identy="sec"/>
    			<Button children="Ustaw" classe="buttSet" func={this.ustawianie}/>
    			<Times elementy={this.state.times} kasuj={this.kasowanie}/>
    			<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>
  			</div>
	
		);
	}
}




  	


export default Budzik;