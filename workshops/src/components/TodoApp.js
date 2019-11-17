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
  return <button onClick={() => props.clearCompleted()} className={styles.clearCompleted}>Clear completed</button>;
};

const Filters = props => {
  return (
    <ul className={styles.filters}>
      <li>
        <a onClick={() => props.showAll()} className={styles.selected} href="#/">
          All
        </a>
      </li>
      <li>
        <a onClick={() => props.showActive()}href="#/active">Active</a>
      </li>
      <li>
        <a onClick={() => props.showCompleted()}href="#/completed">Completed</a>
      </li>
    </ul>
  );
};

const Controls = props => {
  return (
    <footer className={styles.footer}>
      <Counter itemsLeft={props.itemsLeft} />
      <Filters 
            showAll={props.showAll}
            showActive={props.showActive}
            showCompleted={props.showCompleted}
            />
      <Clear clearCompleted={props.clearCompleted} isClearVisible={props.isClearVisible} />
    </footer>
  );
};

const TodoItem = props => {
  const { isDone, label, id} = props;

  let whatClass =()=>{
    if (isDone && props.selectedFilter === 'all'){
      return styles.completed
    } else if (!isDone && props.selectedFilter === 'all'){
      return '' 
    } else if (isDone && props.selectedFilter === 'active' ){
      return styles.invisible
    } else if (!isDone && props.selectedFilter === 'active'){
      return ''
    } else if (isDone && props.selectedFilter === 'completed'){
      return styles.completed
    } else if (!isDone && props.selectedFilter === 'completed'){
      return styles.invisible
    }
    }

  return (
    <li className={whatClass()}>
      <div className={styles.view}>
        <input
          className={styles.toggle}
          type="checkbox"
          onClick={() => props.onTickToggle(id)}
          checked={isDone}
          readOnly
        />
        <label>{label}</label>
        <button
          className={styles.destroy}
          onClick={() => props.onDeleteTodo(id)}
        ></button>
      </div>
      <input
        className={styles.edit}
        value="Create a TodoMVC template"
        readOnly
      />
    </li>
  );
};

const TodoList = props => {
  return (
    <ul className={styles.todoList}>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} {...todo} selectedFilter={props.selectedFilter} onDeleteTodo={props.onDeleteTodo} onTickToggle={props.onTickToggle} />
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
      onChange={event => {
        props.onValueChange(event.target.value);
      }}
      autoFocus
    />
  );
};

const ToggleAll = props => {
  return (
    <Fragment>
      <input onClick={() => props.toggleAll()} id="toggle-all" className={styles.toggleAll} type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </Fragment>
  );
};

class TodoApp extends React.Component {
  state = {
    todos,
    selectedFilter: "all",
    newTodoValue: "",
    filtered:[]
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({
      todos
    });
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  get todosLeft() {
    return this.state.todos.filter(todo => todo.isDone === false).length;
  }

  get isClearVisible() {
    return this.state.todos.some(todo => todo.isDone === true);
  }

  get whatFilter(){
    return this.state.selectedFilter
  }

  addTodo = () => {
    // [1, 2, 3] -> [4, 1, 2, 3]
    if (this.state.newTodoValue.length < 2) {
      return;
    }

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

  deleteTodo = id => {

    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  };

  tickToggle = id => {
    const toDo = this.state.todos.find(todo => todo.id === id)
    if (toDo.isDone === true) {
      toDo.isDone = false
    } else if (toDo.isDone === false) {
      toDo.isDone = true
    }
    this.setState({ toDo })
  }


  toggleAll = () => {
    if (this.state.todos.some(todo => todo.isDone === false)) {
      const newTodos = this.state.todos.map(el => ({ ...el, isDone: true }))

      this.setState({ todos: newTodos })
    } else if (this.state.todos.some(todo => todo.isDone === true)) {
      const newTodos = this.state.todos.map(el => ({ ...el, isDone: false }))

      this.setState({ todos: newTodos })
    }
  }


  clearCompleted = () => {
    const notFinishedToDo = this.state.todos.filter(todo => todo.isDone === false) // tablica ze wszystkimi todosami nie zrobionymi ( one zostaną )
    this.setState({
      todos: notFinishedToDo

    });


  }

 

showAll = () => {

    this.setState({selectedFilter:'all'})



  }
  showActive = () => {
    this.setState({selectedFilter:'active'})


  }
  showCompleted = () => {
    this.setState({selectedFilter:'completed'})

  }


  handleChange = newValue => {
    if (newValue.length > 40) {
      return;
    }

    this.setState({
      newTodoValue: newValue
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
              onValueChange={this.handleChange}
            />
          </header>
          <section className={styles.main}>
            <ToggleAll toggleAll={this.toggleAll} />
            <TodoList selectedFilter={this.whatFilter} onTickToggle={this.tickToggle} todos={this.state.todos} onDeleteTodo={this.deleteTodo} />
          </section>
          <Controls
          showAll={this.showAll}
          showActive={this.showActive}
          showCompleted={this.showCompleted}
            clearCompleted={this.clearCompleted}
            itemsLeft={this.todosLeft}
            isClearVisible={this.isClearVisible}
          />
        </section>
        <footer className={styles.info}>
          <p>Add your stuff to the list</p>
          <p>
            Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
          </p>
          <p>
            Created by <a href="https://github.com/karol-antonowicz">Karol</a>
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



