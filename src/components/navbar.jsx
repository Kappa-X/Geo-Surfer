import React, { Component } from 'react';

class Navbar extends Component {
  handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#start">Geo Surfer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" onClick={() => this.handleNavClick('about')} href="#function">Function</a>
              <a className="nav-link" onClick={() => this.handleNavClick('github')} href="#about">About</a>
              <a className="nav-link" rel="noreferrer" target='_blank' href="https://github.com/Kappa-X/Geo-Surfer">GitHub</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
