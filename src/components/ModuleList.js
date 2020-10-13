import React from "react";
import {connect} from "react-redux";
import {
  DELETE_MODULE,
  CREATE_MODULE,
  UPDATE_MODULE,
  updateModule,
  createModule,
  deleteModule
} from "../actions/moduleActions";

const ModuleList = (
  { course,
    modules=[],
    deleteModule,
    createModule,
    updateModule}) =>
  <div>
    <h1>Modules for {course.title} {course._id}</h1>
    <ul>
      {
        modules.map(module =>
        <li>
          <button
            onClick={() => deleteModule(module)}>
            Delete
          </button>
          {
            module.editing &&
              <span>
                <button onClick={() =>
                  updateModule({...module, editing: false})
                }>
                  Ok
                </button>
                <input
                  onChange={(event) =>
                    updateModule({...module, title: event.target.value})
                  }
                  value={module.title}/>
              </span>
          }
          {
            !module.editing &&
              <label>
                <button onClick={
                  () => updateModule({...module, editing: true})}>
                  Edit
                </button>
                {module.title}
              </label>
          }
        </li>)
      }
    </ul>
    <button onClick={() => createModule(course, {title: "New Module"})}>
      Create Module
    </button>
  </div>

// export default ModuleList

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  deleteModule: (module) => deleteModule(dispatch, module),
  createModule: (course, module) => createModule(dispatch, course, module),
  updateModule: (module) => updateModule(dispatch, module)
})

export default connect
(stateToPropertyMapper,
  propertyToDispatchMapper)
(ModuleList)
