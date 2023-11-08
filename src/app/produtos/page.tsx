"use client";
import Image from "next/image"
import Header from "../components/header2"
import placeholder from "../assets/img/placeholder.png"
import carrinho from "../assets/img/car.png"
import cancel from "../assets/img/cancel.png"

export default function produtos1(){
    let car = 0;
       
    function carf(){ 
        car+=1
        if (car >9){
            car = 9;
        }
        if( car>0){
            var title = document.querySelector("#car_id");   
            title.innerHTML = car;
        }
        if( car<=0){
            var title = document.querySelector("#car_id");   
            title.innerHTML = "0";
        }
    }
    function carf2(){ 
        car-=1
        if (car <0){
            car = 0;
        }
        
        if( car>0){
            var title = document.querySelector("#car_id");   
            title.innerHTML = car;
        }
        if( car<=0){
            var title = document.querySelector("#car_id");   
            title.innerHTML = "0";
        }
    }
    return(
        <>
    <Header/>
        <div className="bg-white flex flex-col flex-wrap h-[35rem]">
        <div className="content-center flex flex-wrap items-center justify-center gap-8">
    <div className="w-[20rem] h-[23rem] border-solid bg-slate-50 border-slate-500 border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <Image src={placeholder} alt="verifica" className="w-[180px] h-[150px] mt-1"></Image>
        <h1 className="text-lg font-bold text-[1.4rem] tex">Cori series m-1</h1>
        <p className="ml-[0.5rem] text-center text-[1.4rem] font-bold">R$ 85,5 <br/></p>
        <p className="ml-[0.5rem] text-center"><br/>O modelo mais simples do cori series m.</p>
        <div className="flex flex-row flex-wrap gap-8 ">
            <button className="border-solid border-transparent transition ease-in-out delay-75 border-[0.20rem] hover:border-slate-500 rounded mt-[1rem]"><Image src={carrinho} alt="car" className="w-[50px] h-[50px]" onClick={carf}></Image></button>
            <button className="border-solid border-transparent transition ease-in-out delay-75 border-[0.20rem] hover:border-slate-500 rounded mt-[1rem]"><Image src={cancel} alt="car" className="w-[50px] h-[50px]" onClick={carf2}></Image></button>
        </div>
    </div>
    <div className="w-[20rem] h-[23rem] border-solid bg-slate-50 border-slate-500 border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <Image src={placeholder} alt="verifica" className="w-[180px] h-[150px] mt-1"></Image>
        <h1 className="text-lg font-bold text-[1.4rem] tex">Cori series m-2</h1>
        <p className="ml-[0.5rem] text-center text-[1.4rem] font-bold">R$ 150,8 <br/></p>
        <p className="ml-[0.5rem] text-center"><br/>O segundo modelo do cori series m.</p>
        <div className="flex flex-row flex-wrap gap-8 ">
            <button className="border-solid border-transparent transition ease-in-out delay-75 border-[0.20rem] hover:border-slate-500 rounded mt-[1rem]"><Image src={carrinho} alt="car" className="w-[50px] h-[50px]" onClick={carf}></Image></button>
            <button className="border-solid border-transparent transition ease-in-out delay-75 border-[0.20rem] hover:border-slate-500 rounded mt-[1rem]"><Image src={cancel} alt="car" className="w-[50px] h-[50px]" onClick={carf2}></Image></button>
        </div>
    </div>
    <div className="w-[20rem] h-[23rem] border-solid bg-slate-50 border-slate-500 border-[0.20rem] mt-4 ml-4 rounded-md content-center flex flex-wrap flex-col items-center">
        <Image src={placeholder} alt="verifica" className="w-[180px] h-[150px] mt-1"></Image>
        <h1 className="text-lg font-bold text-[1.4rem] tex">Cori series m-3</h1>
        <p className="ml-[0.5rem] text-center text-[1.4rem] font-bold">R$ 215,9 <br/></p>
        <p className="ml-[0.5rem] text-center"><br/>O modelo mais recente do cori series m.</p>
        <div className="flex flex-row flex-wrap gap-8 ">
            <button className="border-solid border-transparent transition ease-in-out delay-75 border-[0.20rem] hover:border-slate-500 rounded mt-[1rem]"><Image src={carrinho} alt="car" className="w-[50px] h-[50px]" onClick={carf}></Image></button>
            <button className="border-solid border-transparent transition ease-in-out delay-75 border-[0.20rem] hover:border-slate-500 rounded mt-[1rem]"><Image src={cancel} alt="car" className="w-[50px] h-[50px]" onClick={carf2}></Image></button>
        </div>
    </div>
    </div>
   
    </div>
    <div className="h-[6rem] w-[100%] bg-slate-500"></div>
    
    </>
    );
}