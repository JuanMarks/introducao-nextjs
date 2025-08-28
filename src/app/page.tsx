'use client';

import { Card } from "@/components/Card";
import NavBar from "@/components/NavBar";
import LampOnOffState from "@/components/LampOnOffState";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import React, { useState } from "react";
import BotaoReproducao from "@/components/BotaoReprodução";
import { Bot } from "lucide-react";
// import PlaceForm from "@/components/PlaceForm";




export default function Home() {
  const [commentsData, setCommentsData] = useState([
    {
      author : "João Silva",
      content: "Este é um comentário de exemplo.",
      date: "2023-10-01"
    },
    {
      author : "Maria Oliveira",
      content: "Outro comentário interessante.",
      date: "2023-10-02"
    },
    {
      author : "Pedro Santos",
      content: "Mais um comentário para testar.",
      date: "2023-10-03"
    }
  ]);

  const handleCommentSubmit = (comment: string) => {
    const newComment = {
      author : "Usuário Anônimo",
      content: comment,
      date: new Date().toISOString().split('T')[0] // Formata a data como YYYY-MM-DD
    };
    setCommentsData([...commentsData, newComment]);
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
        <BotaoReproducao />
        {commentsData.map((comment, index) => (
          <Comment author={comment.author} content={comment.content} date={comment.date} key={index} />
        ))}
        <CommentForm onSubmit={handleCommentSubmit}  />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
          <Card
            title="Renderização Híbrida"
            description="SSG, SSR e ISR para otimizar performance e SEO."
            icon="🚀" />

          <Card
            title="CSS Utility-First"
            description="Tailwind CSS para estilização rápida e consistente."
            icon="🎨" />

          <Card
            title="TypeScript Integrado"
            description="Tipagem estática para um código mais seguro."
            icon="🔒" />
        </div>

      </section>

      {/* <div className="flex justify-center">
        <PlaceForm lat={22} lng={-23}/>
      </div> */}


    </div>
  );
}
