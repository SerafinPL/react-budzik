import React, {Component} from "react";
import ReactDOM from 'react-dom';

import Guzik from "../guziki/guzik.js";
import Budzik from "../budzik/budzik.js";

class Menu extends Component {
  constructor(props) {
    super(props);

  }

  fBudzik = () =>{
  		ReactDOM.render(
			<Budzik/>,
  			document.getElementById('kontener')
  		);
  }

render() {

	return(
		<React.Fragment>
			<Guzik children="Budzik" klasa="guzikUstaw" funkcja={this.fBudzik}/>
			<Guzik children="Minutnik" klasa="guzikUstaw" />
			<Guzik children="Stoper" klasa="guzikUstaw" />
			<Guzik children="Odliczanie" klasa="guzikUstaw" />
		</React.Fragment>
		)
}
}



export default Menu;