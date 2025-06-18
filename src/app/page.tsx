import Image from "next/image";
import Welcome from "@/components/Welcome";
import { ClientCounter } from "@/components/ClientCounter";
import Header from "@/components/Header";
import { Links } from "@/types/products";
import {Card} from "@/components/Card";

export default function Home() {
    
    const links: Links[] = [
        { name: "Inicio", href: "/" },
        { name: "Recursos", href: "/recursos" },
        { name: "Contato", href: "/contato" },
    ];
    return (
        <div className="">

        <Header links={links}/>

         <section className=" py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-center text-gray-300 mb-12">
          Recursos Principais
        </h2>

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
            <Header links={links}/>
            <section className=" py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl font-bold text-center text-gray-300 mb-12">
                Recursos Principais
                </h2>

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
        </div>
    );
}
