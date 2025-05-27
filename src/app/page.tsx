import Image from "next/image";
import Welcome from "@/components/Welcome";
import { ClientCounter } from "@/components/ClientCounter";
export default function Home() {
  return (
    <div className="">
      <ClientCounter/>
    </div>
  );
}
