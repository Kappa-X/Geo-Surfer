import React, { Component } from "react";
import { fetchData } from '../API.js';

function Send() {
    var userinput = document.getElementById("userinput").value;
    localStorage.setItem('userinput', userinput);
    console.log("Neiger");
    fetchData();
};

class Function extends Component {

  render() {
    return (
      <section id="function" className="full-height centered">
        <div className="function">
            <h1 id="functionh1">Enter the country code to search for a Country</h1>
            <div id="input">
              <div id="Inputbox">
              <input id="userinput" type="text" />
              <button onClick={Send} id="Search">Search</button>
              </div>
            </div>
            <div id="output">
                
            </div>
        </div>
      </section>
    );
  }
}

export default Function;
