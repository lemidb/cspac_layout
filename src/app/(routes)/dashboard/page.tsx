'use client'
import MyCard from "@/app/components/cards/card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Content } from "next/font/google";
import { useEffect, useState } from "react";
// swx@2WS`$`
const first_content = {
     title:"my first card",
     description:"my first card description",
     content:<div>Hello This is my first card content</div>,
     footer:"and this is my footer "
}
export default function Page(){
    return(
        <div className="w-full h-screen bg-black flex flex-wrap justify-around items-center gap-3 overflow-auto">
          <MyCard props={first_content} />
          <MyCard props={{title:'hello',description:"hello there",content:<h2 className="text-red-400 font-semibold">Hello there how is it going</h2>,footer:"my footer"}} />
          <MyCard props={first_content} />
          <MyCard props={{title:'hello',description:"hello there",content:<h2 className="text-red-400 font-semibold">Hello there how is it going</h2>,footer:"my footer"}} />
          <MyCard props={first_content} />
          <MyCard props={{title:'hello',description:"hello there",content:<h2 className="text-red-400 font-semibold">Hello there how is it going</h2>,footer:"my footer"}} />
          <MyCard props={first_content} />

        </div>
    );
}
//  hel 


// const [data,SetData]= useState(false);
// const [isChanged,SetIsChanged] = useState(true);

    // function hanldeClick(){
    //     console.log(`Data: ${data}`)
    //     SetData(!data);
    //     console.log(`Data: ${data}`)

    // }
// let color = '#ff0000';
// <div>
// <h1>toggle the button</h1>
// <button className="p-2 rounded-lg bg-teal-50 text-red-600 border ml-5" onClick={hanldeClick}>toggle</button>
// {/* {color = "#ff0000" } */}
// <p className={` ${data ? `"bg-[${color}] text-black ml-8 p-4  text-center inline-block rounded-lg" `: "bg-teal-400 text-cyan-950 ml-8 p-4 text-center inline-block rounded-lg"}`}>{data? "True":"False"}</p>
// </div>