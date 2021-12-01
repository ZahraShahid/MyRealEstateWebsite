import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductCategoriesV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="categores-area bg-gray pd-top-118 pd-bottom-90">
			  <div className="container">
			    <div className="section-title text-center">
			      <h6>We are offring the best real estate</h6>
			      <h2>Populer Categores</h2>
			    </div>
			    <div className="row">
			      <div className="col-lg-4 col-sm-6">
			        <div className="single-category-product-wrap style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/cat-1.png"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property">Orchard</Link></h4>
			            <Link className="btn btn-base" to="/property">3 Porparties</Link>
			            <Link className="read-more float-right" to="/property"><i className="la la-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>  
			      <div className="col-lg-4 col-sm-6">
			        <div className="single-category-product-wrap style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/cat-2.png"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property">Rose Cottage</Link></h4>
			            <Link className="btn btn-base" to="/property">6 Porparties</Link>
			            <Link className="read-more float-right" to="/property"><i className="la la-arrow-right" /></Link>
			          </div>
			        </div>
			      </div> 
			      <div className="col-lg-4 col-sm-6">
			        <div className="single-category-product-wrap style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/cat-3.png"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property">Ong Barn</Link></h4>
			            <Link className="btn btn-base" to="/property">2 Porparties</Link>
			            <Link className="read-more float-right" to="/property"><i className="la la-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>   
			      <div className="col-lg-4 col-sm-6">
			        <div className="single-category-product-wrap style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/cat-5.png"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property">Family House</Link></h4>
			            <Link className="btn btn-base" to="/property">1 Porparties</Link>
			            <Link className="read-more float-right" to="/property"><i className="la la-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>  
			      <div className="col-lg-4 col-sm-6">
			        <div className="single-category-product-wrap style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/cat-3.png"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property">Ong Barn</Link></h4>
			            <Link className="btn btn-base" to="/property">2 Porparties</Link>
			            <Link className="read-more float-right" to="/property"><i className="la la-arrow-right" /></Link>
			          </div>
			        </div>
			      </div>   
			      <div className="col-lg-4 col-sm-6">
			        <div className="single-category-product-wrap style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/cat-5.png"} alt="img" />
			          </div>
			          <div className="single-category-product-details">
			            <h4><Link to="/property">Family House</Link></h4>
			            <Link className="btn btn-base" to="/property">1 Porparties</Link>
			            <Link className="read-more float-right" to="/property"><i className="la la-arrow-right" /></Link>
			          </div>
			        </div>
			      </div> 
			    </div>
			  </div>
			</div>
        }
}

export default ProductCategoriesV2