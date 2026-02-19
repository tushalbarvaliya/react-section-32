import "./App.css";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoContextProvider from "./store/todos-context";

function App() {
  

  return (
    <TodoContextProvider>
      <div>
        <NewTodo  />
        <Todos  />
      </div>
      </TodoContextProvider>
  );
}

export default App;
