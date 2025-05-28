import Image from "next/image";
import { Links } from "@/types/products";

interface HeaderProps {
    links: Links[];
}
export default function Header({links}: HeaderProps) {
  return (
     <nav className="bg-amber-50 text-black shadow-md p-4 h-16">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Image
                            src="/next.svg"
                            alt="Logo"
                            width={70}
                            height={70}
                            className=""
                        />
                        <span className="ml-2">NextApp</span>
                    </div>
                    <div className=" flex space-x-6 text-xl font-semibold">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-black hover:text-amber-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
  );
}