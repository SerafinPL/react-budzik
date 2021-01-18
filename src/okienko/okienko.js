import React, {Component} from "react";


function Okienko(props){
	return(
          <React.Fragment>
            <span id={props.identyfik}>{props.zawartosc}</span>
          </React.Fragment>
        );
}


 // class Wyswietlacz

export default Okienko;