import React, {Component} from "react";


import Button from "../Button/Button.js";
import Window from "../Window/Window";


class Wyswietlacz extends Component {
	constructor(props){
		super(props);

		
		//this.zwieksz = this.zwieksz.bind(this);
		//this.zmiejsz = this.zmiejsz.bind(this);

		this.state = {
			wartosc : 0
						
		}
	}

	zwieksz = () => {
		if (this.state.wartosc < this.props.ogranicz){
			this.setState ({ 
				wartosc : this.state.wartosc + 1
			});
		} else {
			this.setState ({ 
				wartosc : 0
			});
		}
	}

	zmiejsz = () => {
		if (this.state.wartosc === 0){

			this.setState ({ 
				wartosc : this.props.ogranicz
			});

		} else {
			this.setState ({ 
				wartosc : this.state.wartosc - 1
			});
		}
	}
	



render(){
	return(
		<React.Fragment>
			<div className="blok">
				<Button children="+" klasa="guzikMaly" funkcja={this.zwieksz}/>
				<Window identyfik={this.props.identy} zawartosc={this.state.wartosc}/>
				<Button children="-" klasa="guzikMaly" funkcja={this.zmiejsz}/>
			</div>
		</React.Fragment>
	);
}

} 


export default Wyswietlacz;