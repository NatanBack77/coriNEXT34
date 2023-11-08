"use client";
import Header from "./components/header"
import Image from "next/image"
import servico from "./assets/img/verifica.png"
import saude from "./assets/img/saude.png"
import funcio from "./assets/img/people.png"
import heart from "./assets/img/heart2.png"
import diabetes from "./assets/img/diabetes.png"
import pressao from "./assets/img/pressao.png"

export default function Home() {
  return (
   <>
   <div> 
   <Header/>
   <div className="bg-white flex flex-col flex-wrap">
    <div className="content-center flex flex-wrap items-center justify-center gap-8">
      <div className="w-[18rem] h-[25rem] border-solid bg-slate-50 border-slate-500 border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <Image src={servico} alt="verifica" className="w-[170px] h-[170px]"></Image>
        <h1 className="text-lg font-bold text-[1.4rem]">Garantia de serviço</h1>
        <p className="ml-[0.5rem]"><br/>Nós garantimos a qualidade oferecendo a nossos clientes o melhor serviço com o menor preço.</p>
      </div>
      <div className="w-[18rem] h-[25rem] border-solid bg-slate-50 border-slate-500 border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <Image src={saude} alt="verifica" className="w-[170px] h-[170px]"></Image>
        <h1 className="text-lg font-bold text-[1.4rem] text-center">Redes de saúde</h1>
        <p className="ml-[0.5rem]"><br/>Possuimos afiliação com diversos serviços de saúde afim de proporcionar um acompanhamento em tempo real ao cliente.</p>
      </div>
      <div className="w-[18rem] h-[25rem] border-solid bg-slate-50 border-slate-500 border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center ">
        <Image src={funcio} alt="verifica" className="w-[170px] h-[170px]"></Image>
        <h1 className="text-lg font-bold text-[1.4rem]">Funcionários capacitados</h1>
        <p className="ml-[0.5rem]"><br/>Contamos com uma equipe especializada para o atendimento de nossos clientes.</p>
      </div>
    </div>
    <div className="bg-white flex flex-col ">
      <h1 className="text-[2rem] text-center mt-[3rem]">Quem usou aprova!<br/><br/>Confira alguns de nossos serviços:</h1>
    
    <div className="mt-[3rem]">
      <div className="content-center flex flex-wrap items-center justify-center gap-8 ">
        <div className="w-[17rem] h-[17rem] border-solid border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center bg-slate-50 border-slate-500">
            <Image src={heart} alt="verifica" className="w-[170px] h-[170px] mt-6"></Image>
            <h1 className="text-lg text-[1.6rem] text-center"><br/>Acompanhamento cardíaco</h1>
        </div>
        <div className="w-[17rem] h-[17rem] border-solid bg-slate-50 border-slate-500 border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
            <Image src={diabetes} alt="verifica" className="w-[170px] h-[170px] mt-6"></Image>
            <h1 className="text-lg text-[1.6rem] text-center"><br/>Medição de glicemia</h1>
        </div>
        <div className="w-[17rem] h-[17rem] border-solid bg-slate-50 border-slate-500 border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
            <Image src={pressao} alt="verifica" className="w-[170px] h-[170px] mt-6"></Image>
            <h1 className="text-lg text-[1.6rem] text-center"><br/>Medição da pressão arterial</h1>
        </div>
      </div>
      </div>
        <div className="h-[5rem] w-[100%]"></div>
        <div className="h-[6rem] w-[100%] bg-slate-500"></div>
      </div>
      </div>
      </div>
   </>
  )
}
