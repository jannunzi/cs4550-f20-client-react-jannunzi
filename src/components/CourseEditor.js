import React from "react";
import {findCourseById} from "../services/CourseService";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService"
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import {connect} from "react-redux";
import TopicPills from "./TopicPills";
import {findWidgetsForTopic} from "../services/WidgetService"
import WidgetList from "./WidgetList";

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
    const topicId = this.props.match.params.topicId
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
    if(moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
    if(topicId) {
      this.props.findWidgetsForTopic(topicId)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const moduleId = this.props.match.params.moduleId
    const previousModuleId = prevProps.match.params.moduleId
    const previousTopicId = prevProps.match.params.topicId
    if(moduleId !== previousModuleId) {
      this.props.findLessonsForModule(moduleId)
    }
    const topicId = this.props.match.params.topicId
    if(topicId !== previousTopicId) {
      this.props.findWidgetsForTopic(topicId)
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
            <TopicPills/>
            <WidgetList/>
          </div>
        </div>
      </div>
    )
  }
}

const stateToProperty = (state) => ({
  course: state.courseReducer.course})
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
    })),
  findWidgetsForTopic: (topicId) =>
    findWidgetsForTopic(topicId)
      .then(widgets => dispatch({
        type: "FIND_WIDGETS_FOR_TOPIC",
        widgets,
        topicId
      }))
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(CourseEditor)
