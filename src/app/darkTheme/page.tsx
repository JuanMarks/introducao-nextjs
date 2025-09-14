"use client"

import { useState } from "react";
import ToggleDark from "@/components/toggleDark";

export default function DarkThemePage() {
    const [isDark, setIsDark] = useState(false);

    const handleToggle = () => {
        setIsDark(!isDark);
    };
    return (
        <div className={`h-screen flex flex-col items-center justify-center transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <h1>{isDark ? 'Dark Theme' : 'Light Theme'}</h1>
            <ToggleDark handleToggle={handleToggle} isDark={isDark} />
        </div>
    );
}
