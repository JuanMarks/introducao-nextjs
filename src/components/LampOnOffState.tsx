'use client'
import { useState } from "react"
import Image from "next/image"
export default function LampOnOffState() {
    const [isOn, setIsOn] = useState(false)
    
    // Lampada ligada e desligada com imagens 
    return (
        <div className="self-center flex flex-col items-center justify-center h-screen">
            <h1>Lâmpada {isOn ? "Ligada" : "Desligada"}</h1>
            <Image width={400} height={400} src={isOn ? '/lampada_ligada.png' : '/lampada_desligada.png'} alt={`Lâmpada ${isOn ? "Ligada" : "Desligada"}`} />
            <button className={isOn ? "mt-4 p-2 bg-red-500 text-white rounded" : "mt-4 p-2 bg-blue-500 text-white rounded"} onClick={() => setIsOn(!isOn)}>{isOn ? "Desligar" : "Ligar"}</button>
        </div>
    )
}