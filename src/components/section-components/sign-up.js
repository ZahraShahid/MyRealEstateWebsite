import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SignUp extends Component {

	componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'bg-gray' );

 	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="signup-page-area pd-top-100">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-7">
			        <form className="signin-inner">
			          <div className="row">
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="First Name" />
			              </label>
			            </div>
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="Last Name" />
			              </label>
			            </div>
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="Email" />
			              </label>
			            </div>
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="Password" />
			              </label>
			            </div>
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="Confirm Password" />
			              </label>
			            </div>
			            <div className="col-12 mb-4">
			              <button className="btn btn-base w-100">Create Account</button>
			            </div>
			            <div className="col-12">
			              <span>By creating an account </span>
			              <a href="signin.html"><strong>Signin</strong></a>
			            </div>
			          </div>
			        </form>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default SignUp