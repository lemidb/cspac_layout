"use client"
import { usePathname } from "next/navigation";

export default function NotFound(){
    const url = usePathname();
    return(<div className="h-screen w-full flex justify-center items-center bg-slate-800">
          <div>
            <p className="text-2xl text-orange-400">The URL <span className="text-orange-500 text-3xl underline">{url}</span> doesn't have page</p>
          </div>
    </div>);
}


// export default function NotFound(){
//     return(<div className="bg-slate-800 flex justify-center items-center h-screen w-full">
//             <div>
//                 <p className="text-2xl text-orange-500 "> Page not found!</p>
//             </div>
//     </div>)
// }

