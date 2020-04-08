import React from "react";

const TodoListItems = (props) => {
  const { todo, index, taskCheckHandler, removeTodo } = props;
  return (
    <li key={todo.id}>
      {" "}
      <input
        type="checkbox"
        checked={todo.done}
        onChange={taskCheckHandler(todo, index)}
      />{" "}
      <span className={todo.done ? "done" : ""}>{todo.content}</span>
      <button onClick={removeTodo(todo)}>Remove todo</button>
    </li>
  );
};

export default TodoListItems;
