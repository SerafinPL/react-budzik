import React, {Component} from "react";
import ReactDOM from 'react-dom';

import Guzik from "../guziki/guzik.js";
import Budzik from "../budzik/budzik.js";
import Minutnik from "../minutnik/minutnik.js";

class Menu extends Component {
  

  fBudzik = () =>{
  		ReactDOM.render(
			<Budzik/>,
  			document.getElementById('kontener')
  		);
  }


  fMinutnik = () => {
  	ReactDOM.render(
			<Minutnik/>,
  			document.getElementById('kontener')
  		);
  }

render() {

	return(
		<React.Fragment>
			<Guzik children="Budzik" klasa="guzikUstaw" funkcja={this.fBudzik}/>
			<Guzik children="Minutnik" klasa="guzikUstaw" funkcja={this.fMinutnik}/>
			<Guzik children="Stoper" klasa="guzikUstaw" />
			<Guzik children="Odliczanie" klasa="guzikUstaw" />
		</React.Fragment>
		)
}
}



export default Menu;