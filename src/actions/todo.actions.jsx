import { ADD_TODO, EDIT_TODO, Remove_TODO } from "../constant";

export const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    payload: { name: todo, id:3},
  };
};

export const removeTodo = (id) => {
  return {
    type: Remove_TODO,
    id: id,
  };
};

export const editTodoAction = (name, id) => {
    console.log(name,id)
  return {
    type: EDIT_TODO,
    payload: { name: name, id: id },
  };
};
