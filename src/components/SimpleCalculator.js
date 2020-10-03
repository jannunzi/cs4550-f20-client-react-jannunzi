import React from "react";

class SimpleCalculator extends React.Component {
  state = {
    a: 11,
    b: 22,
    c: 33
  }

  add = () => {
    this.setState({
      c: this.state.a + this.state.b
    })
  }

  subtract = () => {
    this.setState({
      c: this.state.a - this.state.b
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Simple Calculator</h1>
        <input value={this.state.a} placeholder="A" className="form-control"/>
        <input value={this.state.b} placeholder="B" className="form-control"/>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <h2>Result</h2>
        <span>{this.state.c}</span>
      </div>
    )
  }
}

export default SimpleCalculator
