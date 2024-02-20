import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useState } from "react";
import todoSlice from "../slice/todoSlice";
// import { addTodoAction } from "../actions/todo.actions";

const TodoList = () => {
  const allTodo = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  console.log(allTodo);
  const [todoText, setTodoText] = useState("");
  const addNewTodo = () => {
    dispatch(todoSlice.actions.addTodo({ name: todoText,id:3 })); //for practice we are using only one id
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo..."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={addNewTodo}>ADD TODO</button>
      {allTodo.map((item) => (
        <Todo name={item.name} key={item.id} id={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
