import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import "./index.css";
export default class index extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      })
    ).isRequired,
    onCompletedChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                onCompletedChange={this.props.onCompletedChange}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
