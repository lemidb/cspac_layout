"use client"
import { useParams } from "next/navigation";

export default function NotFound(){
    const ur = useParams();
    const url = JSON.stringify(ur);
    return(<div className="flex justify-center items-center bg-slate-800">
          <div>
            <p className="text-3xl">The URL {url} doesn't have page</p>
          </div>
    </div>);
}