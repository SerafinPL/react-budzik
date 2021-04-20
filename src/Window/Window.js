import React from "react";

const Window = (props) => {
	return(
          <React.Fragment>
            <span id={props.ident}>{props.content}</span>
          </React.Fragment>
        );
};




 // class Wyswietlacz

export default Window;