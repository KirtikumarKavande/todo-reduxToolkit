import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    editTodo(state, action) {
      console.log("action here", action);
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
    removeTodo(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default todoSlice;
