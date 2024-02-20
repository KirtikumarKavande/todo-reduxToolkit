import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";
console.log("entire slice",todoSlice)

let store=configureStore({reducer:{todo:todoSlice.reducer}})
export default store