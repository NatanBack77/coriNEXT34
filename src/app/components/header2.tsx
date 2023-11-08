"use client";
import Image from "next/image"
import logo from "../assets/img/logo_cori.png"
import user from "../assets/img/user_icon.png"
import bg from "../assets/img/cori_bg.png"
import car from "../assets/img/carrinho2.png"
export default function fango(){
    function pro(){ 
       window.location.href = "/produtos";
    }
    function pla(){ 
        window.location.href = "/planos";
    }
    function hom(){ 
        window.location.href = "/";
    }
    
    return(
        <>
        <div className="flex">
        <Image src={bg} alt="Logo Cori" className="fixed blur-sm -z-50 scale-[2] object-cover justify-center ml-[19.25rem] brightness-50"></Image>
        </div>
        <main className=" w-[100%] text-white h-[22rem] flex flex-wrap justify-between">
            <div>
            <Image src={logo} alt="Logo Cori" className="w-[106px] h-[46px] mt-[1rem] ml-[1rem]"></Image>
            </div>
            <div className="ml-[3.9rem]">
                <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 hover:border-white rounded-xl h-[3rem] mt-4 mr-6" id="1" name="home" onClick={hom}>
                    &ensp;Home&ensp;
                </button>
                <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 border-white rounded-xl h-[3rem] mt-4 mr-6" id="2" name="produtos">
                    &ensp;Produtos&ensp;
                </button>
                <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 hover:border-white rounded-xl h-[3rem] mt-4 mr-6" id="3" name="planos" onClick={pla}>
                    &ensp;Planos&ensp;
                </button>
            </div>
            <div>
            <div className="flex flex-row items-center">
                <p className="text-2xl mr-[0.5rem]" id="car_id">0</p>
                <Image src={car} alt="Logo Cori" className="w-[46px] h-[46px] mt-[1rem] mr-[1rem]"></Image>  
                <Image src={user} alt="Logo Cori" className="w-[46px] h-[46px] mt-[1rem] mr-[1rem]"></Image>  
            </div>
            
            </div>
        </main>
        </>
    );
}