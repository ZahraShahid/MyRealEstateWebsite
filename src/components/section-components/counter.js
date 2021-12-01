import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Counter extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="couner-area bg-overlay pd-top-118 pd-bottom-120" style={{background: 'url('+publicUrl+'assets/img/other/6.png)'}}>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="single-counter-inner text-center">
                    <h2 className="counter">2981</h2>
                    <p>Creative Works</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-counter-inner text-center">
                    <h2 className="counter">414</h2>
                    <p>Growing Team</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-counter-inner text-center">
                    <h2 className="counter">678</h2>
                    <p>Client Works</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-counter-inner text-center">
                    <h2 className="counter">541</h2>
                    <p>Project Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
}

export default Counter