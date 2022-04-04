import React, { Component } from "react";
import MapsProfile from "./maps-profile";
import axios from "axios";
class OfficeMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Images: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Maps/")
      .then((response) => {
        if (response.data) {
          this.setState({
            Images: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="agent-area text-center pd-top-118 pd-bottom-118">
        <div className="container">
          {this.state.Images.map((currentImage) => {
            return (
              <MapsProfile
                key={Math.random()}
                image={currentImage.image}
                link={currentImage.link}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default OfficeMap;
