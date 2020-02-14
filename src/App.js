import React, { Component } from "react";
import { TodoHeader, TodoInput, TodoList } from "./components/index";
import { getTodos } from "./service";

export default class app extends Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项列表",
      desc: "今日事今日毕",
      todos: [],
      isLoading: true
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
  getData = () => {
    getTodos()
      .then(res => {
        this.setState({
          isLoading: true
        });
        console.log(res, 999);
        if (res.status === 200) {
          this.setState({
            todos: res.data
          });
        } else {
          //错误处理
        }
      })
      .catch(err => {
        console.log(err, "err");
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  };
  componentDidMount() {
    setTimeout(() => {
      this.getData();
    }, 2000);
  }

  render() {
    return (
      <div>
        <TodoHeader title={this.state.title} />
        <TodoInput addTodo={this.addTodo} />
        {this.state.isLoading ? (
          <div>loading</div>
        ) : (
          <TodoList
            onCompletedChange={this.onCompletedChange}
            todos={this.state.todos}
          />
        )}
      </div>
    );
  }
}
