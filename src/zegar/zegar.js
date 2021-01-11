import React, {Component} from "react";

import "./zegarek.css"

class Zegarek extends Component {
  constructor(props) {
    super(props);

    this.czasownik = this.czasownik.bind(this);

    this.state = {
      czas: ""
    }
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

    
    this.setState({
      czas: e
    });
    

  }
  componentDidMount() {
    
    this.interval = setInterval(this.czasownik,1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render(){
    return(
      <div className="zegarek">
        <p>{this.state.czas}</p>
      </div>
    );
  }
}

export default Zegarek;
