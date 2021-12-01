import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CallToAction extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="cta-area bg-overlay pd-top-118 go-top pd-bottom-120 text-center" style={{background: 'url('+publicUrl+'assets/img/other/1.png)'}}>
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-xl-8 col-lg-10">
		        <div className="section-title style-white mb-0">
		          <h6>Buy Or Sell</h6>
		          <h2>Submit Property</h2>
		          <p>consecte Lorem ipsum dolor sit amet, Lorem ipsum dolor  amet, consecte Lorem ipsum dolor sit adipisicing amet, consectetur  sed do eiusmod tempor incididunt dolore magna consecrem adipisicing ipsum dolor sit amet, consectetur elit,</p>
		        </div>
		        <div className="btn-wrap mt-4 pt-3">
		          <Link className="btn btn-base mr-2" to="/add-property">SUBMIT</Link>
		          <Link className="btn btn-base ml-2" to="/property-details">BUY NOW</Link>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

        }
}

export default CallToAction