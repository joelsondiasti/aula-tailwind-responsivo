import foto from "@/img/foto.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="lg:w-[700px] flex flex-col lg:grid lg:grid-cols-2 shadow bg-zinc-100 h-5/6">
      <Image src={foto} width={350} alt="" className="h-32 object-cover lg:h-full" />
      <div className="flex flex-1 flex-col justify-between px-4 py-8 lg:px-8 lg:py-12">
        <h1 className="text-5xl font-bold text-zinc-900">Hotspot</h1>

        <form className="flex flex-col gap-4">
          <label htmlFor="code">Insira seu código de ativação</label>
          <input type="password" id="code"
          placeholder="**********" className="w-full p-4 outline-none" />
          <button type="submit" className="bg-red-700 text-white p-4 hover:bg-red-800">Conectar</button>
        </form>
      </div>
    </div>
  );
}
