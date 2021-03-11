import React, {Component} from "react";


import Button from "../Button/Button";
import Window from "../Window/Window";
import classes from './Display.module.css'


class Display extends Component {
	constructor(props){
		super(props);

		
		//this.upgrade = this.upgrade.bind(this);
		//this.downgrade = this.downgrade.bind(this);

		this.state = {
			value : 0
						
		}
	}

	upgrade = () => {
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

	downgrade = () => {
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
			<div className={classes.block}>
				<Button children="+" classe="buttMini" func={this.upgrade}/>
				<Window ident={this.props.identy} content={this.state.value}/>
				<Button children="-" classe="buttMini" func={this.downgrade}/>
			</div>
		</React.Fragment>
	);
}

} 


export default Display;