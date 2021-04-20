import React from "react";

const Window = (props) => {
	return(
          <React.Fragment>
            <span id={props.ident}>{props.content}</span>
            {props.end ? null : <span style={{width: '5px'}}>:</span>}
          </React.Fragment>
        );
};




 // class Wyswietlacz

export default React.memo(Window);