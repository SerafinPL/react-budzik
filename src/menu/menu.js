import React, {Component} from "react";
import ReactDOM from 'react-dom';

import Button from "../Button/Button.js";
import AlarmClock from "../AlarmClock/AlarmClock.js";
import CountdownTimer from "../CountdownTimer/CountdownTimer.js";

class Menu extends Component {
  

  fAlarmClock = () => {
  		ReactDOM.render(
			<AlarmClock/>,
  			document.getElementById('contener')
  		);
  }


  fCountdownTimer = () => {
  	ReactDOM.render(
			<CountdownTimer/>,
  			document.getElementById('contener')
  		);
  }

render() {

	return(
		<React.Fragment>
			<Button children="Budzik" classe="buttSet" func={this.fAlarmClock}/>
			<Button children="Minutnik" classe="buttSet" func={this.fCountdownTimer}/>
			<Button children="Stoper" classe="buttSet" />
			<Button children="Odliczanie" classe="buttSet" />
		</React.Fragment>
		)
}
}



export default Menu;