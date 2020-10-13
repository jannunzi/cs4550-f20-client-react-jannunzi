import React from "react";
import {findCourseById} from "../services/CourseService";
import moduleService from "../services/ModuleService";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import {connect} from "react-redux";

class CourseEditor extends React.Component{

  state = {
    course: {
      title: "",
      _id: ""
    }
  }

  componentDidMount() {
    const courseId = this.props.match.params.courseId
    console.log(courseId)
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
  }

  render() {
    return(
      <div>
        <h1>CourseEditor</h1>
        <h2>{this.props.course.title} {this.props.course._id}</h2>
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

const stateToProperty = (state) => ({
  course: state.courseReducer.course
})
const propertyToDispatchMapper = (dispatch) => ({
  findModulesForCourse: courseId => moduleService.findModulesForCourse(courseId)
    .then(actualModules => dispatch({
      type: "FIND_MODULES_FOR_COURSE",
      modules: actualModules
    })),
  findCourseById: (courseId) => findCourseById(courseId)
    .then(actualCourse => dispatch({
      type: "FIND_COURSE_BY_ID",
      course: actualCourse
    }))
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(CourseEditor)
