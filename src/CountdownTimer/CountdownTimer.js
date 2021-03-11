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
			czasy : []
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

		let tablicaCzasow = this.state.czasy;

		tablicaCzasow.unshift({
			budzik : czas,
			klucz : Date.now()
		});

		this.setState({
			czasy : tablicaCzasow
		});
	}


	kasowanie = (kluczyk) => {

		let filtrowanie = this.state.czasy.filter((item) => {
      		return (item.klucz !== kluczyk)
    	});

    	this.setState({
      		czasy: filtrowanie
    	});
  	}


  	odliczanie = () => {
  		const czasy = this.state.czasy;
  		//const aktualnyCzas = document.getElementById("zegar").textContent;
  		let noweCzasy = [];
  		let skasowano; // zmienna zaznacza czy kasujemy ten element
  			for(let i = 0;i < czasy.length ; i++){
  				// v Wyodrębniamy godziny minuty i sekundy v
  				let tg = Number(czasy[i].budzik.slice(0,2));
  				let tm = Number(czasy[i].budzik.slice(3,5));
  				let ts = Number(czasy[i].budzik.slice(6,8));
  				  				
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
						budzik : czas,
						klucz : czasy[i].klucz
					});
				}
			} // for
  			
  		if (noweCzasy !== undefined){ // blokada przed uzupełnianiem pusych tablic
  			this.setState({
      			czasy: noweCzasy
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
    			<Times elementy={this.state.czasy} kasuj={this.kasowanie}/>
    			<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>
  			</div>
	
		);
	}
}

export default Minutnik;