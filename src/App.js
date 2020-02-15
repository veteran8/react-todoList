import React, { Component } from "react";
import { TodoHeader, TodoInput, TodoList } from "./components/index";
import { connect } from "react-redux";
import { getData, changeState } from "./actions/todo";

class app extends Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项列表",
      desc: "今日事今日毕",
      todos: [],
      isLoading: false
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
    this.props.changeState(id);
  };

  componentDidMount() {
    console.log(this.props, 666);
    this.props.getData();
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
            todos={this.props.list}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    list: state.todo.list
  };
};

export default connect(mapStateToProps, { getData, changeState })(app);
