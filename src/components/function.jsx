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
            <h1 id="functionh1">Functions</h1>
            <div id="input">
              <h2 id="h2">Search for a Country</h2>
              <div id="Inputbox">
              <button onClick={Send} id="Search">Search</button>
              <input id="userinput" type="text" />
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
