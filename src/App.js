import React, { Component } from "react";
import { TodoHeader, TodoInput, TodoList } from "./components/index";
export default class app extends Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项列表",
      desc: "今日事今日毕",
      todos: [
        { title: "吃饭", isCompleted: false, id: 1 },
        { title: "睡觉", isCompleted: true, id: 2 }
      ]
    };
  }
  addTodo = todoTitle => {
    console.log(todoTitle, 222);
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random(),
        title: todoTitle,
        isCompleted: false
      })
    });
  };
  render() {
    return (
      <div>
        <TodoHeader title={this.state.title} />
        <TodoInput addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
