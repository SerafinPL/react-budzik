import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Zegarek from "./zegar/zegar.js";
import Wyswietlacz from "./budzik/wyswietlacz.js"
import Guzik from "./guziki/guzik.js";
import Czasy from "./czasy/czasy.js";


class Budzik extends React.Component {
	constructor(props){
		super(props);

		this.ustawianie = this.ustawianie.bind(this);
		this.kasowanie = this.kasowanie.bind(this);
		

		this.state = {
			czasy : []
		}
	}


	ustawianie(){
		var g = document.getElementById("godz").textContent;
		var m = document.getElementById("minu").textContent;
		var s = document.getElementById("seku").textContent;

		var czas = "";

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


		var tablicaCzasow = this.state.czasy;

		tablicaCzasow.unshift({
			budzik : czas,
			klucz : Date.now()
		});

		this.setState({
			czasy : tablicaCzasow
		});

		console.log(this.state.czasy);		

	}


	kasowanie(kluczyk){

		var filtrowanie = this.state.czasy.filter(function(item){
      		return (item.klucz !== kluczyk)
    	});

    	this.setState({
      		czasy: filtrowanie
    	});
  	}

  	



	render(){
		return(
  			<div className="ogol">
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
	ReactDOM.render(
		<Budzik/>,
  		document.getElementById('kontener')
  	);

  	function porownanie(){
  		var czasy = document.getElementsByClassName("wpisy");
  		var aktualnyCzas = document.getElementById("zegar").textContent;
  		
  			for(var i = 0;i < czasy.length ; i++){
  				console.log(czasy[i].textContent.slice(0,8));
  				var t = czasy[i].textContent.slice(0,8);

  				if (t == aktualnyCzas){
  					window.alert(aktualnyCzas);
  					document.getElementById("audio").play();
  				}
  			}
  		
  		
  	}

  	setInterval(porownanie,1000);

  	