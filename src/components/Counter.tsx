import React, { useState } from "react";

type CounterProps = {
    initialCount?: number;
}

export default function Counter({ initialCount = 0 }: CounterProps) {
    const [count, setCount] = useState(initialCount);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Contador: {count}</h1>
            <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Incrementar
            </button>
        </div>
    );
}