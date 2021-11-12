import { increment, decrement } from "./Redux/features/counter/counter-slice";
import { useAppDispatch, useAppSelector } from "./Redux/apps/hooks";

const App = () => {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      Hello
      <h1>Welcome to store draft</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <p>current: {counter.value}</p>
      <p>previous: {counter.prevValue}</p>
    </div>
  );
};

export default App;
