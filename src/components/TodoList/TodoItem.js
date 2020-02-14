import React, { Component } from "react";
import './TodoItem.css';
export default class TodoItem extends Component {
  handleChange = () => {
    const { id, onCompletedChange = () => {} } = this.props;
    onCompletedChange && onCompletedChange(id);
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.completed != this.props.completed;
  }
  render() {
    console.log("render");
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={this.handleChange}
        />
        {this.props.title}
      </li>
    );
  }
}
