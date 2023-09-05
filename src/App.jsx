import React, { Component } from 'react';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import './index.css'; 

class App extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <div>
                    <Navbar />
                    <section id="start" className="full-height centered">
                        <h2>Welcome to Geo Surfer!</h2>
                        <p>Created by Vin and Finn</p>
                        <img src="assets/img/earth.png" alt="earth" className='earth'/>
                    </section>
                    <section id="function" className="full-height centered">
                        <h2>Function Section</h2>
                        <p>This is the function section content.</p>
                    </section>
                    <section id="about" className="full-height centered">
                        <h2>About Section</h2>
                        <p>This is the about section content.</p>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
