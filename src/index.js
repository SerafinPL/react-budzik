import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Zegarek from "./zegar/zegar.js";
import Wyswietlacz from "./budzik/wyswietlacz.js"
import Guzik from "./guziki/guzik.js";

class Budzik extends React.Component {
	constructor(props){
		super(props);

		this.ustawianie = this.ustawianie.bind(this);
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

		
		console.log(czas);

	}




	render(){
		return(
  			<div className="ogol">
    			<Zegarek/>
    			<Wyswietlacz ogranicz="23" identy="godz"/>
    			<Wyswietlacz ogranicz="59" identy="minu"/>
    			<Wyswietlacz ogranicz="59" identy="seku"/>
    			<Guzik children="Ustaw" klasa="guzikUstaw" funkcja={this.ustawianie}/>

  			</div>
	
		);
	}
}
	ReactDOM.render(
	<Budzik/>,
  	document.getElementById('kontener')
  	);