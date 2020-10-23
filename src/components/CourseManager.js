import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Login} from "./Login";
import {Register} from "./Register";
import {Profile} from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditor from "./CourseEditor";

export class CourseManager extends React.Component {
  render() {
    return(
      <Router>
        <div>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/courses">Course List</Link>

          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/courses" exact component={CourseListComponent}/>
          <Route path={[
            "/edit/:courseId",
            "/edit/:courseId/modules/:moduleId",
            "/edit/:courseId/modules/:moduleId/topics/:topicId" // TODO: include lessons/:lessonId
          ]}
                 exact
                 component={CourseEditor}/>
        </div>
      </Router>
    )
  }
}
