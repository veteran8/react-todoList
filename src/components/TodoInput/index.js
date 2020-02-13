import React, { Component, createRef } from "react";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    this.inputDom = createRef();
  }
  handleInput = e => {
    this.setState({
      inputValue: e.currentTarget.value
    });
  };
  addHandler = () => {
    console.log(this.inputDom, 555);
    this.props.addTodo(this.state.inputValue);
    this.setState(
      {
        inputValue: ""
      },
      () => {
        this.inputDom.current.focus();
      }
    );
  };
  handleKeyup = e => {
    if (e.keyCode === 13) {
      this.addHandler();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInput}
          onKeyUp={this.handleKeyup}
          ref={this.inputDom}
        />
        <button onClick={this.addHandler}>添加todo</button>
      </div>
    );
  }
}
