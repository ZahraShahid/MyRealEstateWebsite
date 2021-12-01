import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
          <div className="col-lg-4">
            <aside className="sidebar-area">
              <div className="widget widget-search">
                <div className="single-search-inner">
                  <input type="text" placeholder="Search your keyword" />
                  <button><i className="la la-search" /></button>
                </div>
              </div>
              <div className="widget widget-author text-center">
                <h4 className="widget-title">About Me</h4>
                <div className="thumb">
                  <img src={publicUrl+"assets/img/agent/1.png"} alt="img" />
                </div> 
                <div className="details">
                  <h5>Sandara Mrikon</h5>
                  <p>Lorem ipsum dolor amet, Lore ipsum dolor sit amet, consectetur et  eiLorem ipsum dolor sit amet</p>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                  </ul>
                </div>        
              </div>
              <div className="widget widget-news">
                <h5 className="widget-title">Popular Feeds</h5>
                <div className="single-news-wrap media">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/blog/5.png"} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6><Link to="/blog-details">Dolor eorem ipsum sit amet Lorem ipsum</Link></h6>
                    <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
                  </div>
                </div>
                <div className="single-news-wrap media">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/blog/6.png"} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6><Link to="/blog-details">Responsive Web And Desktop Develope</Link></h6>
                    <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
                  </div>
                </div>
                <div className="single-news-wrap media">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/blog/7.png"} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6><Link to="/blog-details">Admin Web is Django Highlig Models</Link></h6>
                    <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
                  </div>
                </div>
              </div>
              <div className="widget widget-category">
                <h5 className="widget-title">Category</h5>
                <ul>
                  <li><Link to="/blog">Design <span>26</span></Link></li>
                  <li><Link to="/blog">Villa House <span>20</span></Link></li>
                  <li><Link to="/blog">Business <span>21</span></Link></li>
                  <li><Link to="/blog">Global World <span>31</span></Link></li>
                  <li><Link to="/blog">Technology <span>12</span></Link></li>
                  <li><Link to="/blog">Ui Design <span>12</span></Link></li>
                </ul>
              </div>
              <div className="widget widget-instagram">
                <h5 className="widget-title">Instagram Feed</h5>
                <div className="widget-instagram-inner">
                  <div className="row custom-gutters-10">
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/1.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/2.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/3.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/4.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/5.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/6.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/7.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/8.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/instagram/9.png"} alt="img" />
                        <i className="fab fa-instagram" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget-add">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/other/5.png"} alt="img" />
                </div>
              </div>
              <div className="widget widget-tags">
                <h5 className="widget-title">Popular Tags</h5>
                <div className="tagcloud">
                  <Link to="/blog">Popular</Link>
                  <Link to="/blog">Art</Link>
                  <Link to="/blog">Business</Link>
                  <Link to="/blog">Design</Link>
                  <Link to="/blog">Creator</Link>
                  <Link to="/blog">CSS</Link>
                  <Link to="/blog">Planing</Link>
                  <Link to="/blog">Creative</Link>
                </div>   
              </div>
            </aside>
          </div>
    )
  }
}

export default Sidebar;
