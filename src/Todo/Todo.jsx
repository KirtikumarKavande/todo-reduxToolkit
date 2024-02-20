import { useDispatch } from "react-redux";
// import { editTodoAction, removeTodo } from "../actions/todo.actions";
import { useState } from "react";
import todoSlice from "../slice/todoSlice";

const TodoList = ({ name, id }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoText, setEditText] = useState(name);

  const deleteTodo = () => {
    dispatch(todoSlice.actions.removeTodo({id}));

  };
  const editTodo = () => {
    if (isEditing) {
        console.log("higtgt",editTodoText,id)
      dispatch(todoSlice.actions.editTodo({name:editTodoText,id }));
    }
    setIsEditing(!isEditing);
  };
  return (
    <div>
      {isEditing ? (
        <input
          value={editTodoText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
      ) : (
        <span>{name}</span>
      )}
      <button onClick={deleteTodo}>delete</button>
      <button onClick={editTodo}>{!isEditing ? "Edit" : "save"}</button>
    </div>
  );
};

export default TodoList;
