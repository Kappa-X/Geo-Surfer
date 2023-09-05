import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='main-footer'>
                <div className='container-footer'>
                    <div className='row'>
                        {/* Column1 */}
                        <div className='col'>
                            <h4>Geo Surfer</h4>
                            <ul className="list-unstyled">
                                <li>911-420-186</li>
                                <li>Aarau, Switzerland</li>
                                <li>Bahnhofstrasse 91</li>
                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className='col'>
                            <h4>Thanks to:</h4>
                            <ul className='list-unstyled'>
                                <li>Karl Marx</li>
                                <li>Leo Trotzki</li>
                                <li>Albert Einstein</li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className='col'>
                            <h4>Links</h4>
                            <ul className='list-unstyled'>
                                <li><a rel="noreferrer" target='_blank' href="https://www.youtube.com/watch?v=Yb6dZ1IFlKc">Motivation Video</a></li>
                                <li><a rel="noreferrer" target='_blank' href="https://finn-neiger.ch">Finns Website</a></li>
                                <li><a rel="noreferrer" target='_blank' href="https://finn-neiger.ch">Vins Website</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()} Geo Surfer | All right reserverd | Terms Of Service | Privacy
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;