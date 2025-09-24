"use client";

import { useState } from "react";

const Counter = ({ user }) => {
  const [count, setCount] = useState(0);

  console.log(user);

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
};
export default Counter;
