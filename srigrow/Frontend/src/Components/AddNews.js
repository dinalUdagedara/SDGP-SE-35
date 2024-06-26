import React, { Component } from "react";
import '../Authentication/Authentication.css';
import { Link } from 'react-router-dom';


export default class AddNewPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:"",
      headLine:"",
      content:"",
      link:""

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  


  handleSubmit(e) {
    e.preventDefault();
    const {
      date,
      headLine,
      content,
      link

    } = this.state;

    // You can perform form validation here if needed

    fetch("http://localhost:5001/addNews", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        date,
        headLine,
        content,
        link

      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "newsAdded");

        console.log(data);
        alert ("Item Added Succesfully to Database");
   
        window.location.href="./AdminPanel";
     
      });
  }

  render() {
    return (
      <div className="auth-wrapper   addNewPlantWrapper">
        <div className="auth-inner">
          <div>
            <div className="auth-inner-admin" style={{  overflowY: 'auto' }}>
              <form onSubmit={this.handleSubmit}>
                <h3>Add News</h3>

                <div className="mb-3">
                  <label>1. Date</label>
                  <input type="text" className="form-control" placeholder="Date of News origin"

                    onChange={e => this.setState({ date: e.target.value })}
                  />

                </div>

                <div className="mb-3">
                  <label>2. Head Line</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a Suitable Head line for the news "
                    onChange={e => this.setState({ headLine: e.target.value })}
                  />

                </div>

                <div className="mb-3">
                  <label>3. Content</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Content in JSON format or in just plain text "
                    onChange={e => this.setState({ content: e.target.value })}
                  />

                </div>

                <div className="mb-3">
                  <label>4. Link</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a link to find more on News"
                    onChange={e => this.setState({ link: e.target.value })}
                  />

                </div>

                <div className="d-grid">
             
                  <button type="submit" className="button">
                  Add Plant
                  </button>
  
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}