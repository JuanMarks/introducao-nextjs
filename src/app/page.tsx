import Image from "next/image";
import Welcome from "@/components/Welcome";
import { ClientCounter } from "@/components/ClientCounter";
import Header from "@/components/Header";
import { Links } from "@/types/products";
export default function Home() {
    
    const links: Links[] = [
        { name: "Inicio", href: "/" },
        { name: "Recursos", href: "/recursos" },
        { name: "Contato", href: "/contato" },
    ];
    return (
        <div className="">
        <Header links={links}/>
        </div>
    );
}
