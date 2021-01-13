import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Zegarek from "./zegar/zegar.js";
import Wyswietlacz from "./budzik/wyswietlacz.js"
import Guzik from "./guziki/guzik.js";




ReactDOM.render(
  <div className="ogol">
    <Zegarek/>
    <Wyswietlacz ogranicz="23"/>
    <Wyswietlacz ogranicz="59"/>
    <Wyswietlacz ogranicz="59"/>
    <Guzik children="Ustaw" klasa="guzikUstaw"/>

  </div>,
  document.getElementById('kontener')
);
