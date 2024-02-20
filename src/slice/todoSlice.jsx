import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
  name: "todo",
  initialState: {value:[]},
  reducers: {
    addTodo(state, action) {
      state.value.push(action.payload);
    },
    editTodo(state, action) {
      console.log("action here", action);
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
    removeTodo(state, action) {
     state.value= state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default todoSlice;
