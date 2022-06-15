import React, { Component } from "react";
import axios from "axios";
import AgentProfile from "./agent-profile";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Agents: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Team/")
      .then((response) => {
        if (response.data) {
          this.setState({
            Agents: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (
      <div className="agent-area text-center pd-top-118 pd-bottom-90">
        <div className="container">
          <div className="row">
            {this.state.Agents.map((currentAgent) => {
              return (
                <AgentProfile
                  key={Math.random()}
                  image={currentAgent.image}
                  name={currentAgent.name}
                  role={currentAgent.role}
                  facebook={currentAgent.facebook}
                  twitter={currentAgent.twitter}
                  linkedIn={currentAgent.linkedIn}
                  instagram={currentAgent.instagram}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
