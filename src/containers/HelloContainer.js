import React from "react";
import {connect} from "react-redux";
import HelloComponent from "../components/HelloComponent";

const stateToPropertyMapper = (state) => ({
  message: state.fsm.msg,
  todos: state.fsm.todos
})

export default connect
(stateToPropertyMapper)
(HelloComponent)
