import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Blog extends Component {

componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'body-bg' );

 }

  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
		<div className="blog-page-area pd-top-120 go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/1.png"} alt="img" />
		          </div> 
		          <div className="details">
		            <div className="cat"><Link to="/blog-details">Business</Link></div>
		            <h3><Link to="/blog-details">Lorem ipsum dolor sit amet Lorem dolor sit amet sed do eiusmod tempor.</Link></h3>
		            <ul className="meta-inner">
		              <li><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /> By Admin</li>
		              <li><img src={publicUrl+"assets/img/icon/2.png"} alt="img" /> Marce 9 , 2020</li>
		              <li><img src={publicUrl+"assets/img/icon/3.png"} alt="img" /> Marce 9 , 2020</li>
		            </ul>
		            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur et adipisicing  eiLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
		            <div className="row">
		              <div className="col-7">
		                <div className="author-inner">
		                  <img src={publicUrl+"assets/img/blog/author1.png"} alt="img" />
		                  <span>By Admin</span>
		                </div>
		              </div>
		              <div className="col-5 align-self-center text-right">
		                <Link className="read-more" to="/blog-details">Read More <i className="la la-arrow-right" /></Link>
		              </div>
		            </div>
		          </div>        
		        </div>
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2.png"} alt="img" />
		          </div> 
		          <div className="details">
		            <div className="cat"><Link to="/blog-details">Business</Link></div>
		            <h3><Link to="/blog-details">Lorem ipsum dolor sit amet Lorem dolor sit amet sed do eiusmod tempor.</Link></h3>
		            <ul className="meta-inner">
		              <li><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /> By Admin</li>
		              <li><img src={publicUrl+"assets/img/icon/2.png"} alt="img" /> Marce 9 , 2020</li>
		              <li><img src={publicUrl+"assets/img/icon/3.png"} alt="img" /> Marce 9 , 2020</li>
		            </ul>
		            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur et adipisicing  eiLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
		            <div className="row">
		              <div className="col-7">
		                <div className="author-inner">
		                  <img src={publicUrl+"assets/img/blog/author1.png"} alt="img" />
		                  <span>By Admin</span>
		                </div>
		              </div>
		              <div className="col-5 align-self-center text-right">
		                <Link className="read-more" to="/blog-details">Read More <i className="la la-arrow-right" /></Link>
		              </div>
		            </div>
		          </div>        
		        </div>
		        <div className="single-blog-inner">
		          <div className="details">
		            <div className="cat"><Link to="/blog-details">Business</Link></div>
		            <h3><Link to="/blog-details">Lorem ipsum dolor sit amet Lorem dolor sit amet sed do eiusmod tempor.</Link></h3>
		            <ul className="meta-inner">
		              <li><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /> By Admin</li>
		              <li><img src={publicUrl+"assets/img/icon/2.png"} alt="img" /> Marce 9 , 2020</li>
		              <li><img src={publicUrl+"assets/img/icon/3.png"} alt="img" /> Marce 9 , 2020</li>
		            </ul>
		          </div>        
		        </div>
		        <div className="single-blog-inner style-quote text-center" style={{background: 'url('+publicUrl+'assets/img/blog/4.png)'}}>
		          <div className="details">
		            <div className="quote-thumb">
		              <img src={publicUrl+"assets/img/icon/quote.png"} alt="img" />
		            </div>
		            <h3><Link to="/blog-details">“Lorem ipsum dolor sit amet, consectetur et adipisicing  eiLorem ipsum dolor sit amet, consectetur elit”</Link></h3>
		            <ul className="meta-inner">
		              <li><img src={publicUrl+"assets/img/icon/4.png"} alt="img" /> By Admin</li>
		              <li><img src={publicUrl+"assets/img/icon/5.png"} alt="img" /> Marce 9 , 2020</li>
		              <li><img src={publicUrl+"assets/img/icon/6.png"} alt="img" /> Marce 9 , 2020</li>
		            </ul>
		          </div>        
		        </div>
		        <div className="single-blog-inner">
		          <div className="details">
		            <div className="cat"><Link to="/blog-details">Business</Link></div>
		            <h3><Link to="/blog-details">Lorem ipsum dolor sit amet Lorem dolor sit amet sed do eiusmod tempor.</Link></h3>
		            <ul className="meta-inner">
		              <li><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /> By Admin</li>
		              <li><img src={publicUrl+"assets/img/icon/2.png"} alt="img" /> Marce 9 , 2020</li>
		              <li><img src={publicUrl+"assets/img/icon/3.png"} alt="img" /> Marce 9 , 2020</li>
		            </ul>
		            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur et adipisicing  eiLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
		            <div className="row">
		              <div className="col-7">
		                <div className="author-inner">
		                  <img src={publicUrl+"assets/img/blog/author1.png"} alt="img" />
		                  <span>By Admin</span>
		                </div>
		              </div>
		              <div className="col-5 align-self-center text-right">
		                <Link className="read-more" to="/blog-details">Read More <i className="la la-arrow-right" /></Link>
		              </div>
		            </div>
		          </div>        
		        </div>
		        <div className="pagination-area text-center">
		          <ul className="pagination">
		            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-left" /></a></li>
		            <li className="page-item active"><a className="page-link" href="#">1</a></li>
		            <li className="page-item"><a className="page-link" href="#">2</a></li>
		            <li className="page-item"><a className="page-link" href="#">3</a></li>
		            <li className="page-item"><a className="page-link" href="#">...</a></li>
		            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-right" /></a></li>
		          </ul>
		        </div>
		      </div>
		        <Sidebar />
		    </div>
		  </div>
		</div>

    )
  }
}

export default Blog;
