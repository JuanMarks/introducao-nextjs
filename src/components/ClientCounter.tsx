'use client'
import { useState } from "react";

export function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-4">
      <h1>Client Counter</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}