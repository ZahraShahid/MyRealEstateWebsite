import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="about-area bg-gray pd-top-120 pd-bottom-120">
              <div className="container">
                <div className="single-about-inner about-line-right bg-white">
                  <div className="row no-gutter">
                    <div className="col-lg-4 order-lg-12">
                      <div className="thumb" style={{background: 'url('+publicUrl+'assets/img/other/2.png)'}} />
                    </div>
                    <div className="col-lg-8 order-lg-1">
                      <div className="details">
                        <div className="section-title mb-4">
                          <h6>We are offring the best real estate</h6>
                          <h2>The exparts in local.</h2>
                          <p>Lorem ipsum dolor  consectetur aLorem ipsum  amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>Tempor incididunt Amet</li>
                              <li>Exercitation ullamco</li>
                              <li>Dolore magna quis nisi</li>
                              <li>Lorem ipsum dolor manga</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>Tempor incididunt Amet</li>
                              <li>Dolore magna quis nisi</li>
                              <li>Lorem ipsum dolor manga</li>
                            </ul>
                          </div>
                        </div>  
                        <a className="btn btn-base" href="#">SEE MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default About