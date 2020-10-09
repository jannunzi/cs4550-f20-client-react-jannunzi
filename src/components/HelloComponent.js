import React from "react";
import {connect} from "react-redux"

const HelloComponent = ({message, todos}) =>
  <div>
    <h1>{message}</h1>
    <ul>
    {
      todos.map(todo => <li>{todo.title}</li>)
    }
    </ul>
  </div>

export default HelloComponent
