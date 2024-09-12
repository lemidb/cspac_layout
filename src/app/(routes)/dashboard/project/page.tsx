import Link from "next/link";
// swx@2WS
export default function Page(){
    
    return (
    <div id="Project" className="flex flex-row justify-center items-center overflow-hidden bg-slate-900 text-white shadow-sm p-4  h-screen w-full">
    <div ></div>
    <div className="marquee-content flex gap-4 animate-marquee">   
    <div className=" bg-neutral-200 font-serif w-[28rem] h-[26rem] rounded-[5%] flex flex-col justify-center items-center "> <span className="text-orange-600 text-2xl  mt-2">Business Websites</span> <div className="flex flex-1 justify-center items-center bg-slate-200  px-2 mb-2">Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, eaque! Cumque saepe nesciunt ab fugiat?</div> </div>
    <div className=" bg-neutral-600 w-[28rem] h-[26rem] rounded-lg flex flex-col justify-center items-center"><Link href="/dashboard/todo/2" className="hover:text-zinc-50">todos</Link></div>
    <div className=" bg-neutral-600 w-[28rem] h-[26rem] rounded-lg flex flex-col justify-center items-center">chatbot</div>
    <div className=" bg-neutral-600 w-[28rem] h-[26rem] rounded-lg flex flex-col justify-center items-center">portfolio</div>
    <div className=" bg-neutral-600 w-[28rem] h-[26rem] rounded-lg flex flex-col justify-center items-center">chatbot</div>
    <div className=" bg-neutral-600 w-[28rem] h-[26rem] rounded-lg flex flex-col justify-center items-center">portfolio</div>
    </div>
    <div className=""></div>
    </div>

    )
}

