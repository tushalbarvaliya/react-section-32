import React, { useContext } from "react";
import type Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todos-context";
const Todos: React.FC = () => {
  const ctx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {ctx.items.map((item: Todo) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
