import React from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={classes.btn}>
        increment
      </button>
    </div>
  );
};

export default Counter;