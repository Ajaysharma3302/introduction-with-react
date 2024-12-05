
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/store";
function App() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;