import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SignIn extends Component {

	componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'bg-gray' );

 	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="signin-page-area pd-top-100 ">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-7">
			        <form className="signin-inner">
			          <div className="row">
			            <div className="col-12">
			              <label className="single-input-inner style-bg-border">
			                <input type="text" placeholder="Name" />
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
			            <div className="col-12 mb-4">
			              <button className="btn btn-base w-100">Sign In</button>
			            </div>
			            <div className="col-12">
			              <a href="#">Forgottem Your Password</a>
			              <a href="signup.html"><strong>Signup</strong></a>
			            </div>
			          </div>
			        </form>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default SignIn