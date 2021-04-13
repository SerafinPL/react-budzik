import React from "react";


import Display from "../Display/Display.js"
import Button from "../Button/Button.js";
import Times from "../Times/Times.js";
import classes from './CountdownTimer.module.css';



class CountdownTimer extends React.Component {
	constructor(props){
		super(props);

		//this.setter = this.setter.bind(this);
		//this.deleting = this.deleting.bind(this);
	
		this.state = {
			times : []
		}
	}

	// zmiana na strzałkową funkcje daje możliwość pomijania bindowania
	setter = () =>{
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

		let arrOfTimes = [...this.state.times];

		arrOfTimes.unshift({
			alarmClock : timer,
			key : Date.now()
		});

		this.setState({
			times : arrOfTimes
		});
	}


	deleting = (keyring) => {

		let filtering = this.state.times.filter((item) => {
      		return (item.key !== keyring)
    	});

    	this.setState({
      		times: filtering
    	});
  	}


  	counting = () => {
  		const times = [...this.state.times];
  		//const aktualnyCzas = document.getElementById("zegar").textContent;
  		let newTimes = [];
  		let deleted = null; // zmienna zaznacza czy kasujemy ten element
  			for(let i = 0;i < times.length ; i++){
  				// v Wyodrębniamy godziny minuty i sekundy v
  				let tg = Number(times[i].alarmClock.slice(0,2));
  				let tm = Number(times[i].alarmClock.slice(3,5));
  				let ts = Number(times[i].alarmClock.slice(6,8));
  				  				
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
  					deleted = i;
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
				
				if (i !== deleted){ // sprawdzamy czy wpis nie jest skaowany żeby nie wszedl 
									  // na nowo
					newTimes.push( {  // ustaiwamy nowa tablice z pozostałych
						alarmClock : timer,
						key : times[i].key
					});
				}
			} // for
  			
  		if (newTimes !== undefined){ // blokada przed uzupełnianiem pusych tablic
  			this.setState({
      			times: newTimes
    		});
    	}
  	}

  	componentDidMount() {
       	this.interval = setInterval(this.counting,1000);
  	}
  
  	componentWillUnmount() {
    	clearInterval(this.interval);
  	}	


	
	render(){
		return(
  			<div className={classes.main}>
  				<p>Minutnik</p>
    			<Display gardener="23" identy="hour"/>
    			<Display gardener="59" identy="min"/>
    			<Display gardener="59" identy="sec"/>
    			<Button children="Ustaw" classe="buttSet" func={this.setter}/>
    			<Times elements={this.state.times} deleting={this.deleting}/>
    			<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>
  			</div>
	
		);
	}
}

export default CountdownTimer;