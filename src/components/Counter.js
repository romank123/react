import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions/counterActions";

class App extends Component {
  state = {
    step: 3,
  };
  increment = () => {
    this.props.increment(this.state.step);
  };

  decrement = () => {
    this.props.decrement(this.state.step);
  };
  handleChange = (e) => {
    this.setState({
      step: +e.target.value,
    });
  };

  render() {
    const { count, reset } = this.props;
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={reset}>reset</button>
        <span>Step: </span>
        <input
          type='text'
          defaultValue={this.state.step}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect((state) => state, { increment, decrement, reset })(App);
