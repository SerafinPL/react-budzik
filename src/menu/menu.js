import React, {Component} from "react";

import Guzik from "../guziki/guzik.js";

class Menu extends Component {
  constructor(props) {
    super(props);

  }

render() {

	return(
		<React.Fragment>
			<Guzik children="Budzik" klasa="guzikUstaw" />
			<Guzik children="Minutnik" klasa="guzikUstaw" />
			<Guzik children="Stoper" klasa="guzikUstaw" />
			<Guzik children="Odliczanie" klasa="guzikUstaw" />
		</React.Fragment>
		)
}
}



export default Menu;