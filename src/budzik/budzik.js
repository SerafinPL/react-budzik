import React from "react";

import Zegarek from "../zegar/zegar.js";
import Wyswietlacz from "./wyswietlacz.js"
import Guzik from "../guziki/guzik.js";
import Czasy from "../czasy/czasy.js";

class Budzik extends React.Component {
	constructor(props){
		super(props);

		//this.ustawianie = this.ustawianie.bind(this);
		//this.kasowanie = this.kasowanie.bind(this);
		

		this.state = {
			czasy : []
		}
	}

	// zmiana na strzałkową funkcje daje możliwość pomijania bindowania
	ustawianie = () => {
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

		console.log(this.state.czasy);		

	} //ustawianie


	kasowanie = (kluczyk) => {

		let filtrowanie = this.state.czasy.filter((item) => {
      		return (item.klucz !== kluczyk)
    	});

    	this.setState({
      		czasy: filtrowanie
    	});
  	} // kasowanie

  	porownanie = () => {
  		const czasy = this.state.czasy //document.getElementsByClassName("wpisy");
  		const aktualnyCzas = document.getElementById("zegar").textContent;
  		
  		for(let i = 0;i < czasy.length ; i++){
  			
  			let t = czasy[i].budzik.slice(0,8);

  			if (t === aktualnyCzas){
  					
  				document.getElementById("audio").play();
  				window.alert(aktualnyCzas);
  				//this.kasowanie(czasy[i].klucz);
  				
  			}
  		}
  	} // porownanie

  	componentDidMount() {
       	this.interval = setInterval(this.porownanie,1000);
  	}
  
  	componentWillUnmount() {
    	clearInterval(this.interval);
  	}	


	render(){
		return(
  			<div className="ogol">
  				<p>Budzik</p>
    			<Zegarek/>
    			<Wyswietlacz ogranicz="23" identy="godz"/>
    			<Wyswietlacz ogranicz="59" identy="minu"/>
    			<Wyswietlacz ogranicz="59" identy="seku"/>
    			<Guzik children="Ustaw" klasa="guzikUstaw" funkcja={this.ustawianie}/>
    			<Czasy elementy={this.state.czasy} kasuj={this.kasowanie}/>
    			<audio id="audio" src= "http://greenmp3.pl/dzwonki/3541.mp3"></audio>
  			</div>
	
		);
	}
}




  	


export default Budzik;