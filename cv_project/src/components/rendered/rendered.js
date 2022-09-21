import React, { Component } from "react";
import uniqid from "uniqid";
import "../../styles/render.css";
import myImage from "../../styles/images/photo-1506794778202-cad84cf45f1d.jpeg"
class Rendered extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="render_cv_container">
        <div className="left">
          <div className="left_image">
            <img src={myImage} alt="cv_photo" />
          </div>
          <hr></hr>
          <div className="left_contact">
            <p>Contact</p>
            <p>Name:{this.props.name}</p>
            <p>Email:{this.props.email}</p>
            <p>Phone Number:{this.props.phoneNumber}</p>
          </div>
        </div>
        <div className="right">
          <div className="right_name">{this.props.name}</div>
          <hr></hr>
          <div className="right_work">
            <p>Company name:{this.props.companyName}</p>
            <p>Position Title:{this.props.positionTitle}</p>
            <p>Main Tasks:{this.props.mainTasks}</p>
            <p>Worked from:{this.props.workedFrom}</p>
            <p>Worked until:{this.props.workedUntil}</p>
          </div>
          <hr></hr>
          <div className="right_education">
            <p>School Name:{this.props.schoolName}</p>
            <p>Title of Study:{this.props.titleOfStudy}</p>
            <p>Date of Study:{this.props.dateOfStudy}</p>
          </div>
          <hr></hr>
          <div className="right_about">
              {this.props.about}
          </div>
          <hr></hr>
          <button className="edit" onClick={this.props.editButtonClicked}>edit</button>
        </div>
      </div>
    );
  }
}

export default Rendered;
