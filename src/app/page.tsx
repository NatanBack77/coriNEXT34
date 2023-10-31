import Header from "./components/header"
import Image from "next/image";
import servico from "./assets/img/verifica.png"
import saude from "./assets/img/saude.png"
import funcio from "./assets/img/people.png"

export default function Home() {
  return (
   <>
   <div>
   <Header/>
    <div className="content-center flex flex-wrap items-center justify-center gap-8">
      <div className="w-[17rem] h-[25rem] border-solid border-black border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <Image src={servico} alt="verifica" className="w-[170px] h-[170px]"></Image>
        <h1 className="text-lg font-bold text-[1.4rem]">Garantia de serviço</h1>
        <p className="ml-[0.5rem]"><br/>Nós garantimos a qualidade oferecendo a nossos clientes o melhor serviço com o menor preço.</p>
      </div>
      <div className="w-[17rem] h-[25rem] border-solid border-black border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <Image src={saude} alt="verifica" className="w-[170px] h-[170px]"></Image>
        <h1 className="text-lg font-bold text-[1.4rem] text-center">Redes de saúde</h1>
        <p className="ml-[0.5rem]"><br/>Possuimos afiliação com diversos serviços de saúde afim de proporcionar um acompanhamento em tempo real ao cliente.</p>
      </div>
      <div className="w-[17rem] h-[25rem] border-solid border-black border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <Image src={funcio} alt="verifica" className="w-[170px] h-[170px]"></Image>
        <h1 className="text-lg font-bold text-[1.4rem]">Funcionários capacitados</h1>
        <p className="ml-[0.5rem]"><br/>Contamos com uma equipe especializada para o atendimento de nossos clientes.</p>
      </div>
    </div>
    </div>
   </>
  )
}
