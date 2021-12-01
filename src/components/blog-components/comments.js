import React, { Component } from 'react';



class Comments extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
    	<div className="blog-comment">
      <div className="section-title style-small">
        <h3>Comments</h3>
      </div>
      <div className="media">
        <a href="#">
          <img src={publicUrl+"assets/img/blog/comment1.png"} alt="comment" />
        </a>
        <div className="media-body">
          <h5><a href="#">Roe Nurr</a></h5>
          <div className="date">25 July 2020</div>
          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#">REPLY</a>
        </div>
      </div>
      <div className="media nesting">
        <a href="#">
          <img src={publicUrl+"assets/img/blog/comment2.png"} alt="comment" />
        </a>
        <div className="media-body">
          <h5><a href="#">Mirknu Strenli</a></h5>
          <div className="date">25 July 2020</div>
          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#">REPLY</a>
        </div>
      </div>
      <div className="media">
        <a href="#">
          <img src={publicUrl+"assets/img/blog/comment3.png"} alt="comment" />
        </a>
        <div className="media-body">
          <h5><a href="#">Starlye Sikrio</a></h5>
          <div className="date">25 July 2020</div>
          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#">REPLY</a>
        </div>
      </div>
    </div> 
    )
  }
}

export default Comments;
