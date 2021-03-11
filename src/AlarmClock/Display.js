import React, {Component} from "react";


import Button from "../Button/Button.js";
import Window from "../Window/Window";


class Wyswietlacz extends Component {
	constructor(props){
		super(props);

		
		//this.zwieksz = this.zwieksz.bind(this);
		//this.zmiejsz = this.zmiejsz.bind(this);

		this.state = {
			value : 0
						
		}
	}

	zwieksz = () => {
		if (this.state.value < this.props.gardener){
			this.setState ({ 
				value : this.state.value + 1
			});
		} else {
			this.setState ({ 
				value : 0
			});
		}
	}

	zmiejsz = () => {
		if (this.state.value === 0){

			this.setState ({ 
				value : this.props.gardener
			});

		} else {
			this.setState ({ 
				value : this.state.value - 1
			});
		}
	}
	



render(){
	return(
		<React.Fragment>
			<div className="blok">
				<Button children="+" classe="guzikMaly" func={this.zwieksz}/>
				<Window ident={this.props.identy} content={this.state.value}/>
				<Button children="-" classe="guzikMaly" func={this.zmiejsz}/>
			</div>
		</React.Fragment>
	);
}

} 


export default Wyswietlacz;