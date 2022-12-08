import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(prevCounter => prevCounter + 1);

  const decrease = () => {
    if (counter === 0) {
      alert("Your ticket cannot be below zero!");
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <div className="counter">
      <h3>Tickets</h3>
      <div className="counter-value">
        <strong>{counter}</strong>
      </div>
      <div className="buttons">
        <div>
          <button onClick={increase}>+</button>
        </div>
        <div>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
