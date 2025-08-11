'use client';

import { Card } from "@/components/Card";
import NavBar from "@/components/NavBar";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import Counter from "@/components/Counter";
import LikeButton from "@/components/LikeButton";
import React, { useState } from "react";
// import PlaceForm from "@/components/PlaceForm";

const cardData = [
    {
        title: "Renderização Híbrida",
        description: "SSG, SSR e ISR para otimizar performance e SEO.",
        imageUrl: "https://example.com/image1.jpg"
    },
    {
        title: "CSS Utility-First",
        description: "Tailwind CSS para estilização rápida e consistente.",
        imageUrl: "https://example.com/image2.jpg"
    },
    {
        title: "TypeScript Integrado",
        description: "Tipagem estática para um código mais seguro.",
        imageUrl: "https://example.com/image3.jpg"
    },
    {
        title: "Renderização Híbrida",
        description: "SSG, SSR e ISR para otimizar performance e SEO.",
        imageUrl: "https://example.com/image1.jpg"
    },
    {
        title: "CSS Utility-First",
        description: "Tailwind CSS para estilização rápida e consistente.",
        imageUrl: "https://example.com/image2.jpg"
    },
    {
        title: "TypeScript Integrado",
        description: "Tipagem estática para um código mais seguro.",
        imageUrl: "https://example.com/image3.jpg"
    }

];

type Comment = {
  author: string;
  content: string;
  date: string;
};

export default function Home() {
  const [comments, setComments] = useState<Comment[]>([
    {
      author: "João Silva",
      content: "Este é um ótimo artigo! Aprendi muito.",
      date: "2023-10-01",
    },
    {
      author: "Maria Oliveira",
      content: "Muito bem explicado, obrigado!",
      date: "2023-10-02",
    },
  ]);

    const handleAddComment = (commentText: string) => {
        if (commentText.trim() === "") {
            // Não adiciona comentários vazios
            return;
        }

        const newComment: Comment = {
        author: "Usuário Anônimo", // Você pode customizar o autor
        content: commentText,
        date: new Date().toLocaleDateString('pt-BR'), // Formata a data para o padrão brasileiro
        };

        // Adiciona o novo comentário à lista existente
        setComments([...comments, newComment]);
    };
    return (
        <div className=" ">

            <NavBar links={
                [
                    { label: 'Inicio', href: '/' },
                    { label: 'Sobre Nós', href: '/about' },
                    { label: 'Produtos', href: '/product' }
                ]
            } />

            <section className="bg-white py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Recursos Principais
                </h2>

                

                <div>
                    <CommentList comments={comments} />
                    <CommentForm onSubmit={handleAddComment} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>

            </section>

            {/* <div className="flex justify-center">
        <PlaceForm lat={22} lng={-23}/>
      </div> */}


        </div>
    );
}
