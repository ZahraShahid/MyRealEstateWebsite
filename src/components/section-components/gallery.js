import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'; 
import ImagesProfile from './images-profile';
import axios from 'axios';

class Gallery extends Component {

  constructor(props)
	  {
		  super(props);

      this.state = {
        Images: []
		  }
    }

  componentDidMount() {

     axios.get('http://localhost:5000/Gallery/')
     .then(response => {
        if (response.data) {
           this.setState({      
             Images: response.data
            });
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }
    render() {

        console.log(this.state.images);

    return <div className="agent-area text-center pd-top-118 pd-bottom-90">
            <div className="container">
              <div className="row">
              {
                    this.state.Images.map((currentImage) => { 
                      return (
                      <ImagesProfile 
                      key={Math.random()}
                      image={currentImage.image}
                      />
                      ); 
                    })       
                } 
              </div>
            </div>
          </div>
        }
}

export default Gallery