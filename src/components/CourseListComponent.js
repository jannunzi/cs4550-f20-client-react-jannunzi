import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import courseService from "../services/CourseService";

class CourseListComponent extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    courseService.findAllCourses()
      .then(courses => this.setState({
        courses: courses
      }))
  }

  createCourse = () => {
    const newCourse = {
      title: 'New Course',
      owner: 'me',
      lastUpdated: 'yesterday'
    }

    // UNSAFE:
    // const newState = {
    //   courses: [
    //     ...this.state.courses, newCourse
    //   ]
    // }
    //
    // this.setState(newState)

    // SAFE:

    courseService.createCourse(newCourse)
      .then(actualCourse => this.setState(function (prevState) {
          return {
            courses: [
              ...prevState.courses, actualCourse
            ]
          }
        })
      )
      .catch(error => {})
  }

  deleteCourse = (course) => {
    courseService.deleteCourse(course._id)
      .then(statu => this.setState(prevState => ({
          courses: prevState.courses.filter(c => c._id !== course._id)
        })))
  }

  render() {
    return(
      <div className="container">
        <button
          onClick={this.createCourse}
          className="btn btn-success float-right">
          Create Course
        </button>
        <h1>Course List</h1>
        <table className="table">
          <thead>
          <tr>
            <th>Title</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.courses.map(course =>
              <CourseRowComponent
                key={course._id}
                deleteCourse={this.deleteCourse}
                course={course}/>
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default CourseListComponent
