import React, {Component} from "react";



const Okienko = (props) => {
	return(
          <React.Fragment>
            <span id={props.ident}>{props.zawartosc}</span>
          </React.Fragment>
        );
};




 // class Wyswietlacz

export default Okienko;