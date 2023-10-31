import Image from "next/image";
import Logo from "../assets/img/logo_cori.png";
import User from "../assets/img/user_icon.png";

export default function fango(){
    return(
        <main className="bg-slate-500 w-[100%] text-white h-[22rem] flex flex-wrap justify-between">
            <div>
            <Image src={Logo} alt="Logo Cori" className="w-[106px] h-[46px] mt-[1rem] ml-[1rem]"></Image>
            </div>
            <div>
                <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 hover:border-white rounded-xl h-[3rem] mt-4 mr-3" id="1" name="home">
                    &ensp;Home&ensp;
                </button>
                <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 hover:border-white rounded-xl h-[3rem] mt-4 mr-3" id="2" name="produtos">
                    &ensp;Produtos&ensp;
                </button>
                <button className="border-solid border-transparent text-white transition ease-in-out delay-75 border-2 hover:border-white rounded-xl h-[3rem] mt-4 mr-3" id="3" name="planos">
                    &ensp;Planos&ensp;
                </button>
            </div>
            <div>
            <button id="4" name="user">
                <Image src={User} alt="Logo Cori" className="w-[46px] h-[46px] mt-[1rem] mr-[1rem]"></Image>  
            </button>
            </div>
        </main>
        
    );
}