import { Provider } from "react-redux";
import TodoList from "./Todo/TodoList";
import store from "./store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
};

export default App;
