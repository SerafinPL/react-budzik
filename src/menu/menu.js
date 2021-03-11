import React, {Component} from "react";
import ReactDOM from 'react-dom';

import Button from "../Button/Button.js";
import AlarmClock from "../AlarmClock/AlarmClock.js";
import CountdownTimer from "../CountdownTimer/CountdownTimer.js";

class Menu extends Component {
  

  fAlarmClock = () => {
  		ReactDOM.render(
			<AlarmClock/>,
  			document.getElementById('kontener')
  		);
  }


  fCountdownTimer = () => {
  	ReactDOM.render(
			<CountdownTimer/>,
  			document.getElementById('kontener')
  		);
  }

render() {

	return(
		<React.Fragment>
			<Button children="Budzik" klasa="guzikUstaw" funkcja={this.fAlarmClock}/>
			<Button children="Minutnik" klasa="guzikUstaw" funkcja={this.fCountdownTimer}/>
			<Button children="Stoper" klasa="guzikUstaw" />
			<Button children="Odliczanie" klasa="guzikUstaw" />
		</React.Fragment>
		)
}
}



export default Menu;