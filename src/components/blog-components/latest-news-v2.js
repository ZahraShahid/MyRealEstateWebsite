import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LatestNewsV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
		<div className="blog-area pd-top-118 pd-bottom-90 go-top">
		  <div className="container">
		    <div className="section-title text-center">
		      <h6>Blog &amp; News</h6>
		      <h2>News Feads</h2>
		    </div>
		    <div className="row">
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-2">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/7.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Family House</Link></h4>
		            <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
		          </div>        
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-2">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/4.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Villa House</Link></h4>
		            <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
		          </div>        
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-2">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Beach Side House</Link></h4>
		            <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
		          </div>        
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-2">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/8.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Hotel Apartment</Link></h4>
		            <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
		          </div>        
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-2">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/6.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Daily Apartment</Link></h4>
		            <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
		          </div>        
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-2">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/9.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Farm House</Link></h4>
		            <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
		          </div>        
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

    )
  }
}

export default LatestNewsV2;
