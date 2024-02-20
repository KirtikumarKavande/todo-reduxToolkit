import { ADD_TODO, Remove_TODO, EDIT_TODO } from "../constant/index";
const todo = [
  {
    id: 1,
    name: "cricket game",
  },
  {
    id: 2,
    name: "studying react",
  },
];
const Todo = (state = todo, action) => {
  if (action.type === ADD_TODO) {
    return [...state, action.payload];
  } else if (action.type === Remove_TODO) {
    return state.filter((item) => item.id !== action.id);
  } else if (action.type === EDIT_TODO) {
    console.log("logged 2",action.payload.id)
    return state.map((item)=>{
        if(item.id===action.payload.id)
        {
            return {id:action.payload.id,name:action.payload.name}
        }
        else{
            return item
        }
    })
  }
  return state;
};

export default Todo;
