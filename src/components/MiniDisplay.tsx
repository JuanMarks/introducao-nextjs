'use client';

import React from "react";
import { set } from "zod/v4-mini";


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

    // verifica se o usuario digitou mais de um operador e nao deixa digitar mais de um operador
    const handleOperatorClick = (operator:string) => {
        const operators = ['+', '-', '*', '/'];
        const bannedOperator = operators.filter(op => op !== operator);
        const hasAnotherOperator = bannedOperator.some(op => numberDisplay.includes(op));
        if(hasAnotherOperator) return;    
        setNumberDisplay(numberDisplay + operator);
    }

    const calcularSequencialmente = (numberDisplay:string) => {
    
        const parts = numberDisplay.split(/(?=[+\-*/])/);

        
        if (parts.length === 0) return 0;
        if (parts.length === 1) return parseFloat(parts[0]);

    
        let result = parseFloat(parts[0]);

        
        for (let i = 1; i < parts.length; i++) {
            const part = parts[i]; 
            const operator = part[0]; 
            const num = parseFloat(part.slice(1)); 
            if (operator === '+') {
                result += num;
            } else if (operator === '-') {
                result -= num;
            } else if (operator === '*') {
                result *= num;
            } else if (operator === '/') {
                if (num === 0) {
                    return setNumberDisplay('Error: infinite'); 
                }
                result /= num;
            }
        }

        setNumberDisplay(result.toString());

        return result;
    };

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

        // if (numberDisplay.includes('+') && numberDisplay.includes('-') || numberDisplay.includes('*') && numberDisplay.includes('/') || numberDisplay.includes('+') && numberDisplay.includes('*') || numberDisplay.includes('-') && numberDisplay.includes('/') || numberDisplay.includes('/') && numberDisplay.includes('+') || numberDisplay.includes('/') && numberDisplay.includes('-')) {
        //     const numbers = numberDisplay.split(/(?=[+-/*])/);
        //     let result = parseFloat(numbers[0]);
        //     for (let i = 1; i < numbers.length; i++) {
        //         const num = parseFloat(numbers[i].slice(1));
        //         if (numbers[i][0] === '+') {
        //             result += num;
        //         } else if (numbers[i][0] === '-') {
        //             result -= num;
        //         }
        //         else if (numbers[i][0] === '*') {
        //             result *= num;
        //         } else if (numbers[i][0] === '/') {
        //             result /= num;
        //         }
        //     }
        //     setNumberDisplay(result.toString());
        // }

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

    };
    

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
                        <button onClick={() => handleOperatorClick('+')} className="bg-blue-500 p-4 rounded-md text-lg text-white hover:bg-blue-600 row-end-2 col-end-5">+</button>
                        <button onClick={() => handleOperatorClick('-')} className="bg-blue-500 p-4 rounded-md text-lg text-white hover:bg-blue-600 row-end-3 col-end-5">-</button>
                        <button onClick={()=> calcularSequencialmente(numberDisplay)} className="bg-green-500 p-4 rounded-md text-lg text-white hover:bg-green-600 row-end-4 col-end-5">=</button>
                        <button onClick={() => handleOperatorClick('*')} className="bg-blue-500 p-4 rounded-md text-lg text-white hover:bg-blue-600 row-end-4 col-end-3">*</button>
                        <button onClick={() => handleOperatorClick('/')} className="bg-blue-500 p-4 rounded-md text-lg text-white hover:bg-blue-600 row-end-4 col-end-4">/</button>
                        <button onClick={() => setNumberDisplay('')} className="bg-red-500 p-4 rounded-md text-lg text-white hover:bg-red-600 col-span-3">Apagar</button>
                    </div>
                </div>
                
            </div>
        </>
    );
}