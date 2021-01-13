import React, {Component} from "react";


class Okienko extends Component {

render(){
	return(
          <React.Fragment>
            <span>{this.props.zawartosc}</span>
          </React.Fragment>
        );
}

} // class Wyswietlacz

export default Okienko;