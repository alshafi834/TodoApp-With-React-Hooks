import React from "react";
import TodoListItems from "./TodoListItems";

const TodoList = (props) => {
  return (
    <ul>
      {props.toDos.map((todo, index) => (
        <TodoListItems
          todo={todo}
          index={index}
          taskCheckHandler={props.taskCheckHandler}
          removeTodo={props.removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
