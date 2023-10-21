import { useState } from "react";
import { useCount } from "../custom_hooks/useCounts";
import { Link } from "react-router-dom";
import "../App.css";

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount("");
  }

  return (
    <div className="App container">
      <div>
        <h1 className="counter-header">Start Counting!</h1>
      </div>
      <div>
        <h1 className="counter-num">{count}</h1>
      </div>
      <div className="counter-change">
        <button className="counter-btn" onClick={increment}>
          increment
        </button>
        <button className="counter-btn" onClick={decrement}>
          decrement
        </button>
        <button className="counter-btn" onClick={reset}>
          reset
        </button>
      </div>

      <div>
        <input
          id="number"
          value={newCount}
          type="number"
          onChange={handleOnChange}
          placeholder="input value"
        />
      </div>
      <div>
        <button className="counter-click" onClick={handleOnClick}>
          Set a value
        </button>
      </div>
      <div className="counter-back">
        <Link to="/"> Return to Homepage</Link>
      </div>
    </div>
  );
}
