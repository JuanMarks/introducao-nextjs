'use client'

import React, { useState, useEffect } from 'react'

export default function EffectCounter() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(c => c + 1)
    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [])

    useEffect(() => {
        
    }, [])

    return (
        <div className='text-center p-10'>
            <h1 className="text-5xl font-bold">{count}</h1>
            <button className='mt-4 p-2 bg-blue-500 text-white rounded' onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}