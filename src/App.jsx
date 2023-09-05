import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 

class App extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <div className='page-container'>
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
                        <div className='card-container'>
                        <Card title="Vin Appenzeller" alt="Vin Andri Appenzeller" image="vin.jpg" text="Mitgründer von Geo Surfer und purer Arier." link="https://github.com/Vinappenzeller"/>
                        <Card title="Finn Neiger" alt="Finn Andreas Neiger" image="finn.jpg" text="Mitgründer von Geo Surfer und sicher kein Kommunist" link="https://github.com/Kappa-X"/>
                        </div>
                    </section>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
