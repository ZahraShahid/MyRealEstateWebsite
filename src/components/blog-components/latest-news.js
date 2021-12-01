import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LatestNews extends Component {
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
		    <div className="row justify-content-center">
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-bottom-radius">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/10.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Family House</Link></h4>
		            <p>House ipsum dolor  consectetur adipisicing elit, sed do eius Lorem ipsum dolo ame conse.</p>
		            <Link className="btn btn-base read-more" to="/blog-details"><i className="la la-arrow-right" /></Link>
		          </div>        
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-bottom-radius">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/11.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Daily Apartment</Link></h4>
		            <p>Daily ipsum dolor  consectetur adipisicing elit, sed do eius Lorem ipsum dolo ame conse.</p>
		            <Link className="btn btn-base read-more" to="/blog-details"><i className="la la-arrow-right" /></Link>
		          </div>        
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-product-wrap style-bottom-radius">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/project/12.png"} alt="img" />
		          </div> 
		          <div className="product-details-inner">
		            <ul className="meta-inner">
		              <li><i className="fa fa-user" />By Admin</li>
		              <li><i className="fa fa-calendar-alt" />Marce 9 , 2020</li>
		            </ul>
		            <h4><Link to="/blog-details">Hotel Resort</Link></h4>
		            <p>Resort ipsum dolor  consectetur adipisicing elit, sed do eius Lorem ipsum dolo ame conse.</p>
		            <Link className="btn btn-base read-more" to="/blog-details"><i className="la la-arrow-right" /></Link>
		          </div>        
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

    )
  }
}

export default LatestNews;
