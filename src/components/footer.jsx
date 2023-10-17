import React, { Component } from 'react';

class Footer extends Component {
  state = {};

  render() {
    return (
      <div className='main-footer'>
        <div className='container-footer'>
          <div className='row'>
            <div className='col'>
              <h4>Geo Surfer</h4>
              <ul className='list-unstyled'>
                <li>911-420-187</li>
                <li>Aarau, Switzerland</li>
                <li>Bahnhofstrasse 91</li>
              </ul>
            </div>
            <div className='col'>
              <h4>Thanks to:</h4>
              <ul className='list-unstyled'>
                <li>Karl Marx</li>
                <li>Leo Trotzki</li>
                <li>Albert Einstein</li>
              </ul>
            </div>
            <div className='col'>
              <h4>Links</h4>
              <ul className='list-unstyled'>
                <li>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.youtube.com/watch?v=Yb6dZ1IFlKc'
                  >
                    Motivation Video
                  </a>
                </li>
                <li>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://finn-neiger.ch'
                  >
                    Finns Website
                  </a>
                </li>
                <li>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://vinappenzeller.com'
                  >
                    Vins Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className='row'>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} Geo Surfer | All right reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
