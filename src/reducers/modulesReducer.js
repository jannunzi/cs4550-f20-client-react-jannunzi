import {
  DELETE_MODULE,
  UPDATE_MODULE,
  CREATE_MODULE
} from "../actions/moduleActions";

const initialState = {
  modules: [
    {
      _id: "123",
      title: "React.js",
      editing: false
    },
    {
      _id: "234",
      title: "Redux.js",
      editing: true
    },
    {
      _id: "345",
      title: "jQuery",
      editing: false
    },
  ]
}

const moduleReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_MODULES":
      return {
        modules: action.modules
      }
    case CREATE_MODULE:
      return {
        modules: [
          ...state.modules,
          {
          _id: (Date.now()) + "",
          title: "New Module"
        }]
      }
    case DELETE_MODULE:
      return {
        modules: state.modules.filter(module => module._id !== action.module._id)
      }
    case UPDATE_MODULE:
      return {
        modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
      }
    default:
      return state
  }
}

export default moduleReducer
