import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Zegarek from "./zegar/zegar.js";
import Wyswietlacz from "./budzik/wyswietlacz.js";
import Guzik from "./guziki/guzik.js";
import Czasy from "./czasy/czasy.js";
import Budzik from "./budzik/budzik.js";
import Menu from "./menu/menu.js"


		ReactDOM.render(
			<Menu/>,
  			document.getElementById('guziki')
  		);
	
		ReactDOM.render(
			<Budzik/>,
  			document.getElementById('kontener')
  		);
	

  	

  	