import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'; 
import axios from 'axios';

const AgentProfile = props =>
(
  <div className="col-lg-4 col-md-6">
    <div className="single-agent-wrap style-2 text-center">
      <div className="thumb">
        <img src={process.env.PUBLIC_URL+'/' +"assets/img/agent/7.png" }alt="img" />
      </div> 

      <div className="details">
        <h4>{props.agent.name}</h4>
        <h6>{props.agent.role}</h6>
        <ul className="social-area style-2">
          <li><a href={props.agent.facebook}><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
          <li><a href={props.agent.linkedIn}><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
          <li><a href={props.agent.instagram}><i className="fab fa-instagram" aria-hidden="true" /></a></li>
          <li><a href={props.agent.twitter}><i className="fab fa-twitter" aria-hidden="true" /></a></li>
        </ul>
      </div>   

    </div>
  </div>
)

class Team extends Component {

  constructor(props)
	  {
		  super(props);

      this.state = {
        Agents: []
		  }
    }

  componentDidMount() {

     axios.get('http://localhost:5000/Team/')
     .then(response => {
        if (response.data) {
           this.setState({      
             Agents: response.data
            });
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }


    AgentsList()
    {
      return this.state.Agents.map(currentAgent => { return <AgentProfile agent = {currentAgent} />; })
    }

    
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

      return (<div className="agent-area text-center pd-top-118 pd-bottom-90">
              <div className="container">
                <div className="row">
                  {
                    this.AgentsList()
                  }
                </div>
              </div>
            </div>
            )
      }
}

export default Team