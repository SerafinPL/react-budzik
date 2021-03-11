import React from "react";


import Display from "../AlarmClock/Display.js"
import Button from "../Button/Button.js";
import Times from "../Times/Times.js";



class Minutnik extends React.Component {
	constructor(props){
		super(props);

		//this.ustawianie = this.ustawianie.bind(this);
		//this.kasowanie = this.kasowanie.bind(this);
	
		this.state = {
			times : []
		}
	}

	// zmiana na strzałkową funkcje daje możliwość pomijania bindowania
	ustawianie = () =>{
		const g = document.getElementById("godz").textContent;
		const m = document.getElementById("minu").textContent;
		const s = document.getElementById("seku").textContent;

		let czas = "";

		if (g < 10){
			czas = "0"; 
		} 
		czas += g + ":";

		if (m < 10){
			czas += "0"; 
		} 
		czas += m + ":";

		if (s < 10){
			czas += "0"; 
		} 
		czas += s;

		let tablicaCzasow = this.state.times;

		tablicaCzasow.unshift({
			alarmClock : czas,
			key : Date.now()
		});

		this.setState({
			times : tablicaCzasow
		});
	}


	kasowanie = (kluczyk) => {

		let filtrowanie = this.state.times.filter((item) => {
      		return (item.key !== kluczyk)
    	});

    	this.setState({
      		times: filtrowanie
    	});
  	}


  	odliczanie = () => {
  		const times = this.state.times;
  		//const aktualnyCzas = document.getElementById("zegar").textContent;
  		let noweCzasy = [];
  		let skasowano; // zmienna zaznacza czy kasujemy ten element
  			for(let i = 0;i < times.length ; i++){
  				// v Wyodrębniamy godziny minuty i sekundy v
  				let tg = Number(times[i].alarmClock.slice(0,2));
  				let tm = Number(times[i].alarmClock.slice(3,5));
  				let ts = Number(times[i].alarmClock.slice(6,8));
  				  				
  				let tns, tnm, tng;
  				// v Robimy odliczanie
  				
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
  					skasowano = i;
  				}

  				// ustawiamy pomniejszony stan
  				let czas = "";

				if (tng < 10){
					czas = "0"; 
				} 
				czas += tng + ":";

				if (tnm < 10){
					czas += "0"; 
				} 
				czas += tnm + ":";

				if (tns < 10){
					czas += "0"; 
				} 
				czas += tns;
				
				if (i !== skasowano){ // sprawdzamy czy wpis nie jest skaowany żeby nie wszedl 
									  // na nowo
					noweCzasy.push( {  // ustaiwamy nowa tablice z pozostałych
						alarmClock : czas,
						key : times[i].key
					});
				}
			} // for
  			
  		if (noweCzasy !== undefined){ // blokada przed uzupełnianiem pusych tablic
  			this.setState({
      			times: noweCzasy
    		});
    	}
  	}

  	componentDidMount() {
       	this.interval = setInterval(this.odliczanie,1000);
  	}
  
  	componentWillUnmount() {
    	clearInterval(this.interval);
  	}	


	
	render(){
		return(
  			<div className="main">
  				<p>Minutnik</p>
    			<Display gardener="23" identy="godz"/>
    			<Display gardener="59" identy="minu"/>
    			<Display gardener="59" identy="seku"/>
    			<Button children="Ustaw" classe="buttSet" func={this.ustawianie}/>
    			<Times elements={this.state.times} deleting={this.kasowanie}/>
    			<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>
  			</div>
	
		);
	}
}

export default Minutnik;