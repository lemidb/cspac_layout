'use client'
import { useEffect, useState } from "react";
// swx@2WS`$`
export default function Page(){
    
    const [data,SetData]= useState(false);
    const [isChanged,SetIsChanged] = useState(true);
    
        function hanldeClick(){
            console.log(`Data: ${data}`)
            SetData(!data);
            console.log(`Data: ${data}`)

        }
    let color = '#ff0000';
    return(
        <>
        <div>
            <h1>toggle the button</h1>
            <button className="p-2 rounded-lg bg-teal-50 text-red-600 border ml-5" onClick={hanldeClick}>toggle</button>
            {/* {color = "#ff0000" } */}
            <p className={` ${data ? `"bg-[${color}] text-black ml-8 p-4  text-center inline-block rounded-lg" `: "bg-teal-400 text-cyan-950 ml-8 p-4 text-center inline-block rounded-lg"}`}>{data? "True":"False"}</p>
        </div>
        </>
    );
}