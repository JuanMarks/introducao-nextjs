'use client';


import React, { useState } from 'react';


type CommentFormProps = {
    onSubmit: (comment: string) => void;
}

export default function CommentForm({ onSubmit }: CommentFormProps) {
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(comment);
        setComment("");
    }

    return (
        <form className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Deixe um comentário</h2>
            <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
                placeholder="Escreva seu comentário aqui..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
        </form>
    );
}