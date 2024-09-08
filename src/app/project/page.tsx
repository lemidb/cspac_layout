import Link from "next/link";
// swx@2WS
export default function Page(){
    
    return (
    <div id="Project" className="flex flex-col max-h-[32rem] flex-wrap justify-between items-center gap-5 ">
    <div className="w-[13rem] bg-neutral-200 font-serif h-[15rem] rounded-[5%] flex flex-col justify-center items-center "> <span className="text-orange-600 text-2xl  mt-2">Business Websites</span> <div className="flex flex-1 justify-center items-center bg-slate-200  px-2 mb-2">Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, eaque! Cumque saepe nesciunt ab fugiat?</div> </div>
    <div className="w-[13rem] bg-neutral-600 h-[15rem] rounded-[5%] flex flex-col justify-center items-center"><Link href="fetch" className="hover:text-zinc-50">todos</Link></div>
    <div className="w-[13rem] bg-neutral-600 h-[15rem] rounded-[5%] flex flex-col justify-center items-center">chatbot</div>
    <div className="w-[13rem] bg-neutral-600 h-[15rem] rounded-[5%] flex flex-col justify-center items-center">portfolio</div>
    <div className="w-[13rem] bg-neutral-600 h-[15rem] rounded-[5%] flex flex-col justify-center items-center">chatbot</div>
    <div className="w-[13rem] bg-neutral-600 h-[15rem] rounded-[5%] flex flex-col justify-center items-center">portfolio</div>
    </div>
    
    )
}

