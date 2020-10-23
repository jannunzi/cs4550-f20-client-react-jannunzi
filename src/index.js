import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import Hello from "./Hello";
import * as serviceWorker from './serviceWorker';
import CourseListComponent from "./components/CourseListComponent";
import SimpleCalculator from "./components/SimpleCalculator";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Profile} from "./components/Profile";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {CourseEditor} from "./components/CourseEditor";
import {CourseManager} from "./components/CourseManager";
import HelloComponent from "./components/HelloComponent"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import HelloContainer from "./containers/HelloContainer";
import fsm from "./reducers/fsmReducer"
import moduleReducer from "./reducers/modulesReducer";
import courseReducer from "./reducers/courseReducer";
import {lessonReducer} from "./reducers/lessonReducer";
import widgetReducer from "./reducers/widgetReducer";
import CounterComponent from "./components/CounterComponent";
import CounterContainer from "./containers/CounterContainer";

const rootReducer = combineReducers({
  fsm,
  moduleReducer,
  courseReducer,
  lessonReducer,
  widgetReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <CourseManager/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
