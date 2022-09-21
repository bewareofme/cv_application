import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import Rendered from "./components/rendered/rendered.js";

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state={
      name:'',
      email:'',
      phoneNumber:'',
      companyName:'',
      mainTasks:'',
      positionTitle:'',
      workedUntil:'',
      workedFrom:'',
      schoolName:'',
      dateOfStudy:'',
      titleOfStudy:'',
      about:'',
    }
    this.submitclicked=this.submitclicked.bind(this)
    this.editButtonHandler=this.editButtonHandler.bind(this)
  }
    handleInput=(e)=>{
      const input=e.target.getAttribute("id")
      if(input==='name')this.setState({name:e.target.value})
      if(input==='email')this.setState({email:e.target.value})
      if(input==='phone')this.setState({phoneNumber:e.target.value})
      if(input==='companyName')this.setState({companyName:e.target.value})
      if(input==='mainTask')this.setState({mainTasks:e.target.value})
      if(input==='positionTitle')this.setState({positionTitle:e.target.value})
      if(input==='dateUntil')this.setState({workedUntil:e.target.value})
      if(input==='dateFrom')this.setState({workedFrom:e.target.value})
      if(input==='schoolname')this.setState({schoolName:e.target.value})
      if(input==='dateOfStudy')this.setState({dateOfStudy:e.target.value})
      if(input==='titleOfStudy')this.setState({titleOfStudy:e.target.value})
      if(input==='aboutYourself')this.setState({about:e.target.value})
  }
  submitclicked=(e)=>{
    e.preventDefault();
    const formcontainer=document.querySelector('.form_container')
    formcontainer.setAttribute('style','display:none;')
    const renderedcontainer=document.querySelector('.rendered_container')
    renderedcontainer.setAttribute('style','display:block;')
  }
  editButtonHandler=(e)=>{
    e.preventDefault();
    const formcontainer=document.querySelector('.form_container')
    const renderedcontainer=document.querySelector('.rendered_container')
    formcontainer.setAttribute('style','display:block;')
    renderedcontainer.setAttribute('style','display:none;')
  }
  render() {
    return (
      <div className="container">
        <div className="cv_container">
          <div className="form_container">
          {/* <div> */}
        <fieldset>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleInput}></input>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={this.handleInput}></input>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" onChange={this.handleInput}></input>
          </form>
        </fieldset>
        <fieldset>
          <form>
            <label htmlFor="companyName">Company Name </label>
            <input type="text" id="companyName" onChange={this.handleInput}></input>
            <label htmlFor="positionTitle">Position Title </label>
            <input type="text" id="positionTitle" onChange={this.handleInput}></input>
            <label htmlFor="mainTask">Main Task </label>
            <input type="text" id="mainTask" onChange={this.handleInput}></input>
            <label htmlFor="dateFrom">Date From Work </label>
            <input type="date" id="dateFrom" onChange={this.handleInput}></input>
            <label htmlFor="dateUntil">Date until Work </label>
            <input type="date" id="dateUntil" onChange={this.handleInput}></input>
          </form>
        </fieldset>
        <fieldset>
          <form>
            <label htmlFor="schoolname">School Name</label>
            <input type="text" id="schoolname" onChange={this.handleInput}></input>
            <label htmlFor="titleOfStudy">Title Of Study</label>
            <input type="text" id="titleOfStudy" onChange={this.handleInput}></input>
            <label htmlFor="dateOfStudy">Date Of Study</label>
            <input type="date" id="dateOfStudy" onChange={this.handleInput}></input>
            <label htmlFor="aboutYourself">About Yourself</label>
            <input type="text" id="aboutYourself" onChange={this.handleInput}></input>
            <button className="submit" onClick={this.submitclicked}>Submit</button>
          </form>
        </fieldset>
      </div>
            {/* </div> */}
          <div className="rendered_container">
            <Rendered
             editButtonClicked={this.editButtonHandler}
             name={this.state.name}
              email={this.state.email}
              companyName={this.state.companyName}
              phoneNumber={this.state.phoneNumber}
              positionTitle={this.state.positionTitle}
              mainTasks={this.state.mainTasks}
              workedFrom={this.state.workedFrom}
              workedUntil={this.state.workedUntil}
              schoolName={this.state.schoolName}
              titleOfStudy={this.state.titleOfStudy}
              dateOfStudy={this.state.dateOfStudy}
              about={this.state.about}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
