import React from "react";
import {findCourseById} from "../services/CourseService";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";

export class CourseEditor extends React.Component{

  state = {
    course: {
      title: "",
      _id: ""
    }
  }

  componentDidMount() {
    const courseId = this.props.match.params.courseId
    console.log(courseId)
    findCourseById(courseId)
      .then(actualCourse => this.setState({
        course: actualCourse
      }))
  }

  render() {
    return(
      <div>
        <h1>CourseEditor</h1>
        <h2>{this.state.course.title} {this.state.course._id}</h2>
        <div className="row">
          <div className="col-4">
            <ModuleList/>
          </div>
          <div className="col-8">
            <LessonTabs/>
          </div>
        </div>
      </div>
    )
  }
}
