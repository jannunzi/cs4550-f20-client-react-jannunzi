import React from "react";
import {findCourseById} from "../services/CourseService";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService"
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
    const moduleId = this.props.match.params.moduleId
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
    if(moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const moduleId = this.props.match.params.moduleId
    const previousModuleId = prevProps.match.params.moduleId
    if(moduleId !== previousModuleId) {
      this.props.findLessonsForModule(moduleId)
    }
  }

  render() {
    return(
      <div>
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
  findLessonsForModule: moduleId => {
    lessonService.findLessonsForModule(moduleId)
      .then(lessons => dispatch({
        type: "FIND_LESSONS_FOR_MODULE",
        lessons,
        moduleId
      }))
  },
  findModulesForCourse: courseId =>
    moduleService.findModulesForCourse(courseId)
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
