import React, { Fragment } from "react";
import uuid from "uuid";
import styles from "./TodoApp.module.css";
import { todos } from "../data";

const Counter = props => {
  return (
    <span className={styles.todoCount}>
      <strong>{props.itemsLeft}</strong> item{props.itemsLeft !== 1 && "s"} left
    </span>
  );
};

const Clear = props => {
  if (!props.isClearVisible) {
    return null;
  }
  return <button className={styles.clearCompleted}>Clear completed</button>;
};

const Filters = () => {
  return (
    <ul className={styles.filters}>
      <li>
        <a className={styles.selected} href="#/">
          All
        </a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
  );
};

const Controls = props => {
  return (
    <footer className={styles.footer}>
      <Counter itemsLeft={props.itemsLeft} />
      <Filters />
      <Clear isClearVisible={props.isClearVisible} />
    </footer>
  );
};

const TodoItem = props => {
  const { isDone, label } = props;

  return (
    <li className={isDone ? styles.completed : ""}>
      <div className={styles.view}>
        <input className={styles.toggle} type="checkbox" checked={isDone} />
        <label>{label}</label>
        <button className={styles.destroy}></button>
      </div>
      <input className={styles.edit} value="Create a TodoMVC template" />
    </li>
  );
};

const TodoList = props => {
  return (
    <ul className={styles.todoList}>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} isDone={todo.isDone} label={todo.label} />
      ))}
    </ul>
  );
};

const TodoInput = props => {
  return (
    <input
      className={styles.newTodo}
      placeholder="What needs to be done?"
      value={props.value}
      onKeyPress={event => {
        if (event.key === "Enter") {
          props.onTodoAdd();
        }
      }}
      autofocus
    />
  );
};

const ToggleAll = () => {
  return (
    <Fragment>
      <input id="toggle-all" className={styles.toggleAll} type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </Fragment>
  );
};

class TodoApp extends React.Component {
  state = {
    todos,
    selectedFilter: "all",
    newTodoValue: "Buy milk"
  };

  get todosLeft() {
    return this.state.todos.filter(todo => todo.isDone === false).length;
  }

  get isClearVisible() {
    return this.state.todos.some(todo => todo.isDone === true);
  }

  addTodo = () => {
    // [1, 2, 3] -> [4, 1, 2, 3]
    const newTodo = {
      id: uuid.v4(),
      isDone: false,
      label: this.state.newTodoValue
    };
    const newTodos = [newTodo, ...this.state.todos];
    this.setState({
      todos: newTodos,
      newTodoValue: ""
    });
  };

  render() {
    return (
      <div>
        <section className={styles.todoapp}>
          <header className={styles.header}>
            <h1>todos</h1>
            <TodoInput
              value={this.state.newTodoValue}
              onTodoAdd={this.addTodo}
            />
          </header>
          <section className={styles.main}>
            <ToggleAll />
            <TodoList todos={this.state.todos} />
          </section>
          <Controls
            itemsLeft={this.todosLeft}
            isClearVisible={this.isClearVisible}
          />
        </section>
        <footer className={styles.info}>
          <p>Double-click to edit a todo</p>
          <p>
            Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
          </p>
          <p>
            Created by <a href="http://todomvc.com">you</a>
          </p>
          <p>
            Part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default TodoApp;
