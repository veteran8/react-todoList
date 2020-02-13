import React, { Component } from "react";
import { TodoHeader, TodoInput, TodoList } from "./components/index";
export default class app extends Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项列表",
      desc: "今日事今日毕",
      todos: [
        { title: "吃饭", completed: false, id: 1 },
        { title: "睡觉", completed: true, id: 2 }
      ]
    };
  }
  addTodo = todoTitle => {
    console.log(todoTitle, 222);
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random(),
        title: todoTitle,
        completed: false
      })
    });
  };
  onCompletedChange = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    });
  };
  render() {
    return (
      <div>
        <TodoHeader title={this.state.title} />
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          onCompletedChange={this.onCompletedChange}
          todos={this.state.todos}
        />
      </div>
    );
  }
}
