import React, {Component} from "react";


import Guzik from "../guziki/guzik.js";
import Okienko from "../okienko/okienko";


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
				<Guzik children="+" klasa="guzikMaly" funkcja={this.zwieksz}/>
				<Okienko identyfik={this.props.identy} zawartosc={this.state.wartosc}/>
				<Guzik children="-" klasa="guzikMaly" funkcja={this.zmiejsz}/>
			</div>
		</React.Fragment>
	);
}

} 


export default Wyswietlacz;