import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [newToDO, setNewToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const toDoChangeHandler = useCallback((event) => {
    setNewToDo(event.target.value);
  }, []);

  const todoSubmitHandler = useCallback(
    (event) => {
      if (!newToDO.trim()) return;
      event.preventDefault();
      setToDos([
        {
          id: toDos.length + 1,
          content: newToDO,
          done: false,
        },
        ...toDos,
      ]);

      setNewToDo("");
    },
    [newToDO, toDos]
  );

  const taskCheckHandler = useCallback(
    (todo, index) => (event) => {
      const newToDos = [...toDos];
      newToDos.splice(index, 1, {
        ...todo,
        done: !todo.done,
      });
      setToDos(newToDos);
    },
    [toDos]
  );

  const removeTodo = useCallback(
    (todo) => (event) => {
      setToDos(toDos.filter((remainTodo) => remainTodo !== todo));
    },
    [toDos]
  );

  const markAllDone = useCallback(() => {
    const newToDO = toDos.map((todo) => {
      return {
        ...todo,
        done: true,
      };
    });
    setToDos(newToDO);
  }, [toDos]);

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="App">
      <TodoForm
        todoSubmitHandler={todoSubmitHandler}
        toDoChangeHandler={toDoChangeHandler}
        newToDO={newToDO}
      />
      <button onClick={markAllDone}>Mark all done</button>
      <TodoList
        toDos={toDos}
        taskCheckHandler={taskCheckHandler}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
