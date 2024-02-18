import React, { Component } from 'react'

export default class SignUp extends Component {
  constructor(props){
    super (props)
    this.state ={
      fname:"",
      lname:"",
      email:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const{fname,lname,email,password} = this.state;
    console.log(fname,lname,email,password);
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname:fname,
        lname:lname,
        email:email,
        password:password

      }),

    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister")
      console.log(data.status)
      if(data.status == "ok"){
        alert ("SignUp Complete Please login using your details now");
        window.location.href="./sign-in";
      }else if(data.error == "Invalid Password"){
        alert ("Email or the Password you Entered is Incorrect Please Try Again");
      }else if (data.error == "User Exists"){
        alert ("This gmail account already have an Registered Account using That Account");
        window.location.href="./sign-in"
      }

    })


  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={e=>this.setState({fname:e.target.value})}
          />
          
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" 

          onChange={e=>this.setState({lname:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e=>this.setState({email:e.target.value})}
          />
          

        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e=>this.setState({password:e.target.value})}
          />
          
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
