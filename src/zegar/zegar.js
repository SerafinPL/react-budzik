import React, {Component} from "react";


class Zegarek extends Component {
  constructor(props) {
    super(props);

    this.czasownik = this.czasownik.bind(this);
  }



  czasownik(){

    var dd = new Date();

    var e = '';
    var godzin = dd.getHours();
    if (godzin < 10) {
      e += '0';
    }
    e = godzin + ':';

    var minut = dd.getMinutes();
    if (minut < 10) {
      e += '0';
    }
    e += minut + ':';
    var secondo = dd.getSeconds();
    if (secondo < 10) {
      e += '0';
    }
    e += secondo;

    return e;
  }

  setInterval(czasownik,1000);


  render(){
    return(
      <div>
        <p>{this.czasownik()}</p>
      </div>
    );
  }
}

export default Zegarek;
