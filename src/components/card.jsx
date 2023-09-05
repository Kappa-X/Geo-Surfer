import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card" style={{ width: '18rem' }} data-bs-theme="dark">
        <img src={"/assets/img/" + this.props.image} className="card-img-top" alt={this.props.alt} id='card-img'/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.text}</p>
        </div>
        <div className="card-body">
          <a rel="noreferrer" target='_blank' href={this.props.link} className="card-link">GitHub</a>
        </div>
      </div>
    );
  }
}

export default Card;
