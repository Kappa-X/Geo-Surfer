import React, { Component } from "react";
import { fetchData } from '../API.js';

class Function extends Component {

  Send = async () => {
    var userinput = document.getElementById("userinput").value;
    localStorage.setItem('userinput', userinput);
    await fetchData();
    const data = localStorage.getItem('data');
    const Data = JSON.parse(data);
    console.log(Data + "fail");
    if (Data.status === "success") {
      this.setState({
        Country: "Country: " + Data.name,
        Currency: "Currency: " + Data.currency.name,
        Capital: "Capital: " + Data.capital.name,
        Population: "Population: " + Data.population,
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
