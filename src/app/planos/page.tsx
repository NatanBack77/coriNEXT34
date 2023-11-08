"use client";
import Image from "next/image"
import Header from "../components/header3"
import placeholder from "../assets/img/placeholder.png"
import carrinho from "../assets/img/car.png"
import cancel from "../assets/img/cancel.png"

export default function produtos1(){
    return(
        <>
    <Header/>
        <div className="bg-white flex flex-col flex-wrap h-[35rem]">
        <div className="content-center flex flex-wrap items-center justify-center gap-8">
    <div className="w-[20rem] h-[23rem] border-solid bg-[#60beb0] border-black border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <h1 className="text-white text-[2.5rem]">Plano básico</h1>
        <h1 className="text-white text-[1.5rem] text-center">Acompanhamento de até uma pessoa</h1>
        <h1 className="text-white text-[1.8rem] text-center"><br/>R$ 25/Mês</h1>
        <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 hover:border-white rounded-xl h-[4rem] mt-[3rem] text-[2rem] justify-center " id="3" name="planos">
                    &ensp;Comprar&ensp;
                </button>
    </div>
    <div className="w-[20rem] h-[23rem] border-solid bg-[#60beb0] border-black border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <h1 className="text-white text-[2.5rem]">Plano médio</h1>
        <h1 className="text-white text-[1.5rem] text-center">Acompanhamento de até três pessoa</h1>
        <h1 className="text-white text-[1.8rem] text-center"><br/>R$ 50/Mês</h1>
        <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 hover:border-white rounded-xl h-[4rem] mt-[3rem] text-[2rem] justify-center " id="3" name="planos">
                    &ensp;Comprar&ensp;
                </button>
    </div>
    <div className="w-[20rem] h-[23rem] border-solid bg-[#60beb0] border-black border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <h1 className="text-white text-[2.5rem]">Plano supremo</h1>
        <h1 className="text-white text-[1.5rem] text-center">Acompanhamento de até seis pessoa</h1>
        <h1 className="text-white text-[1.8rem] text-center"><br/>R$ 70/Mês</h1>
        <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 hover:border-white rounded-xl h-[4rem] mt-[3rem] text-[2rem] justify-center " id="3" name="planos">
                    &ensp;Comprar&ensp;
                </button>
    </div>

    </div>
    </div>
    <div className="h-[6rem] w-[100%] bg-slate-500"></div>
    </>
    );
}