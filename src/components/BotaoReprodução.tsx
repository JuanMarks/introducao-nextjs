import React, { useState } from 'react';

export default function BotaoReproducao() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <button className={`bg-blue-500 text-white px-4 py-2 rounded ${isPlaying ? 'bg-red-500' : ''}`}
            onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
    );
}