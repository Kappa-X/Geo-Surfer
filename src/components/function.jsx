import React, { Component } from "react";
import { fetchData, data } from '../API.js';

export var userinput;

class Function extends Component {

  Send = async () => {
    userinput = document.getElementById("userinput").value;
    document.getElementById("userinput").value = "";
    await fetchData();
    console.log(data + "fail");
    if (data.status === "success") {
      this.setState({
        Country: "Country: " + data.name,
        Currency: "Currency: " + data.currency.name,
        Capital: "Capital: " + data.capital.name,
        Population: "Population: " + data.population,
      });
    } else {
      this.setState({
        Country: "Country: ",
        Currency: "Currency: ",
        Capital: "Capital: ",
        Population: "Population: ",
      });
      alert("Wrong Input ❌ Try again");
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      Country: 'Country: ',
      Currency: 'Currency: ',
      Capital: 'Capital: ',
      Population: 'Population: '
    }
  }

  render() {
    return (

      <section id="function" className="full-height centered">
        <div className="function">
            <h1 id="functionh1">Enter the country code to search for a Country</h1>
            <div id="input">
              <div id="Inputbox">
              <input id="userinput" type="text" />
              <button onClick={this.Send} id="Search">Search</button>
              </div>
            </div>
            <div id="output">
               <ul>
                <li>
                {this.state.Country}
                </li>
                <li>
                  {this.state.Currency}
                </li>
                <li>
                  {this.state.Capital}
                </li>
                <li>
                  {this.state.Population}
                </li>
               </ul>
            </div>
        </div>
      </section>
    );
  }
}

export default Function;
