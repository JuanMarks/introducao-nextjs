'use client'
import { useState } from "react";

type ListaItens = {
    nome: string;
    comprado: boolean;
}[];

export default function ListaDeCompras() {
    const [itens, setItens] = useState<ListaItens>([
        {
            nome: "Item 1",
            comprado: false
        },

        {
            nome: "Item 2",
            comprado: false
        },

        {
            nome: "Item 3",
            comprado: false
        }
    ]);

    const handleClick = (index: number) => {
        const newItens = [...itens];
        newItens[index].comprado = !newItens[index].comprado;
        setItens(newItens);
    };

    return (
        <div className="m-4 p-4 border rounded">
            <h1>Lista de Compras</h1>
            <ul className="list-disc list-inside">
                {itens.map((item, index) => (
                    <li className={`cursor-pointer  ${item.comprado ? "line-through" : " "}`} onClick={() => handleClick(index)} key={index}>{item.nome} - {item.comprado ? "Comprado" : "Não Comprado"}</li>
                ))}
            </ul>
        </div>
    );
}

            
    
