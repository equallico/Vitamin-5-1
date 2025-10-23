import React, { useState, useEffect } from "react";

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count < 0) setCount(0);
    if (count > 5) setMessage("You passed 5!");
    else setMessage("");
  }, [count]);

  return (
    <div>
      <h1>NotHome Page</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <p>{message}</p>
    </div>
  );
};

export default NotHome;
