import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useCallback, useReducer, useRef } from "react";

const initialTodos = [];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, initialTodos);
  const idRef = useRef(0);

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: "UPDATE", targetId });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", targetId });
  }, []);

  const onCreate = (content, date) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        createdDate: date,
        isDone: false,
      },
    });
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
