'use client';

import React from "react";


export default function MiniDisplay() {
    const [numberDisplay, setNumberDisplay] = React.useState('0');

    const handleDisplayChange = (value: string) => {
        if (numberDisplay.length >= 10) {
            return;
        }

        setNumberDisplay(prev => {
            if (prev === '0') {
                return value;
            }
            return prev + value;
        });
    }

    const handleSum = (value : string) => {
        if (value === '=') {
            const numbers = numberDisplay.split('+');
            const sum = numbers.reduce((acc, curr) => acc + parseFloat(curr), 0);
            setNumberDisplay(sum.toString());
        } 
        
    }

    const cauculate = () => {
        if (numberDisplay.includes('+')) {
            const numbers = numberDisplay.split('+');
            const sum = numbers.reduce((acc, curr) => acc + parseFloat(curr), 0);
            setNumberDisplay(sum.toString());
        }

        if (numberDisplay.includes('-')) {
            const numbers = numberDisplay.split('-');
            const difference = numbers.map(num => parseFloat(num));
            const result = difference.reduce((acc, curr) => acc - curr);
            setNumberDisplay(result.toString());
        }

        if (numberDisplay.includes('+') && numberDisplay.includes('-')) {
            const numbers = numberDisplay.split(/(?=[+-])/);
            let result = parseFloat(numbers[0]);
            for (let i = 1; i < numbers.length; i++) {
                const num = parseFloat(numbers[i].slice(1));
                if (numbers[i][0] === '+') {
                    result += num;
                } else if (numbers[i][0] === '-') {
                    result -= num;
                }
            }
            setNumberDisplay(result.toString());
        }

        if (numberDisplay.includes('*')) {
            const numbers = numberDisplay.split('*');
            const product = numbers.reduce((acc, curr) => acc * parseFloat(curr), 1);
            setNumberDisplay(product.toString());
        }

        if (numberDisplay.includes('/')) {
            const numbers = numberDisplay.split('/');
            const quotient = numbers.map(num => parseFloat(num));
            const result = quotient.reduce((acc, curr) => acc / curr);
            setNumberDisplay(result.toString());
        }

    }
    

    const handleDelete = () => {
        setNumberDisplay(numberDisplay.slice(0, -1));
    }
    
        
    return (
        <>
            <div className="flex flex-col items-center mt-10 space-y-4 p-4 bg-gray-100 rounded-lg shadow-lg">
                {/* Display */}
                <div className="flex justify-center items-center border border-gray-300 rounded-md p-4 w-50 h-12 text-center text-xl mb-4 bg-white shadow-md">
                    <span className="text-gray-700">{numberDisplay}</span>
                </div>
                {/* Teclado numerico */}
                <div>
                    <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 9 }, (_, i) => (
                            <button onClick={(e) => handleDisplayChange(e.currentTarget.textContent!)} key={i + 1} className="bg-gray-200 p-4 rounded-md text-lg hover:bg-gray-300">
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={(e) => handleDisplayChange(e.currentTarget.textContent!)} className="bg-gray-200 p-4 rounded-md text-lg hover:bg-gray-300">0</button>
                        <button onClick={handleDelete} className="bg-amber-300 rounded font-bold text-xl row-end-1 col-end-5">{"<-"}</button>
                        <button onClick={() => setNumberDisplay(numberDisplay+"+")} className="bg-blue-500 p-4 rounded-md text-lg text-white hover:bg-blue-600 row-end-2 col-end-5">+</button>
                        <button onClick={() => setNumberDisplay(numberDisplay+"-")} className="bg-blue-500 p-4 rounded-md text-lg text-white hover:bg-blue-600 row-end-3 col-end-5">-</button>
                        <button onClick={cauculate} className="bg-green-500 p-4 rounded-md text-lg text-white hover:bg-green-600 row-end-4 col-end-5">=</button>
                        <button onClick={() => setNumberDisplay(numberDisplay+"*")} className="bg-blue-500 p-4 rounded-md text-lg text-white hover:bg-blue-600 row-end-4 col-end-3">*</button>
                        <button onClick={() => setNumberDisplay(numberDisplay+"/")} className="bg-blue-500 p-4 rounded-md text-lg text-white hover:bg-blue-600 row-end-4 col-end-4">/</button>
                        <button onClick={() => setNumberDisplay('')} className="bg-red-500 p-4 rounded-md text-lg text-white hover:bg-red-600 col-span-3">Apagar</button>
                    </div>
                </div>
                
            </div>
        </>
    );
}