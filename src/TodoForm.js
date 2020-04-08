import React from "react";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.todoSubmitHandler}>
      <label htmlFor="newTodo">Enter a toDo:</label>
      <input
        id="newTodo"
        name="newTodo"
        type="text"
        value={props.newToDO}
        onChange={props.toDoChangeHandler}
      />
      <button type="submit">Add ToDos</button>
    </form>
  );
};

export default TodoForm;
