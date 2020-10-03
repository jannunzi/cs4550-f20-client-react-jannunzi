import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    courseTitle: "Some Course",
    course: this.props.course
  }

  constructor(props) {
    super(props)
  }

  updateTitle = (event) => {
    const newTitle = event.target.value
    const course = { ...this.state.course }
    course.title = newTitle
    this.setState({
      course: course
    })
  }

  updateCourse = () => {
    debugger
    this.setState({editing: false})
    updateCourse(this.state.course._id, this.state.course)
  }

  render() {
    return (
      <tr>
        <td>
          {
            this.state.editing === true &&
            <input
              onChange={this.updateTitle}
              value={this.state.course.title}/>
          }
          {
            this.state.editing === false &&
            <label>{this.state.course.title}</label>
          }
        </td>
        <td>{this.props.course.owner}</td>
        <td>{this.props.course.lastUpdated}</td>
        <td>
          <button onClick={() => this.props.deleteCourse(this.props.course)}>
            Delete
          </button>
          {
            this.state.editing &&
            <button onClick={this.updateCourse}>
              Ok
            </button>
          }
          {
            !this.state.editing &&
            <button onClick={() => this.setState({editing: true})}>
              Edit
            </button>
          }
        </td>
      </tr>
    );
  }
}

export default CourseRowComponent
