
import React, {Component} from "react";
import './Times.css';


class Czasy extends Component {
  constructor(props) {
    super(props);

    //this.noweWpisy = this.noweWpisy.bind(this);
    //this.usunWpisy = this.usunWpisy.bind(this);
  }

  noweWpisy = (element) => {
    return(
      <li className="wpisy"
        key={element.klucz}>{element.budzik}
        <span onClick={() => this.usunWpisy(element.klucz)}>X</span></li>
    );
  }

  usunWpisy = (klucz) => {
    this.props.kasuj(klucz);
  }

  render() {
      var wpisy = this.props.elementy ;
      var elementyLisy = wpisy.map(this.noweWpisy);

      return(
        <ul className="lista">
          {elementyLisy}
        </ul>
      );
  }
};

export default Czasy;
