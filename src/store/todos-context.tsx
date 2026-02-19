import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type TodoTypeContext = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodoContext = createContext<TodoTypeContext>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const [todosState, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string): void => {
    setTodos((prevState) => {
      return [...prevState, new Todo(todoText)];
    });
  };

  const removeTodoHandler = (todoId: string): void => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((item) => item.id !== todoId);
      return newTodos;
    });
  };

  const ctx: TodoTypeContext = {
    items: todosState,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={ctx}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
export { TodoContext };
