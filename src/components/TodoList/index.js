import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export default class index extends Component {
  static propTypes = {
    todos: PropTypes.array
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            return <TodoItem key={todo.id} {...todo} />;
          })}
        </ul>
      </div>
    );
  }
}
