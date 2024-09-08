"use client"
import MyComp from "@/my_components/mycomp";
import { Suspense, useEffect, useState } from "react";
// swx@2WS
export default async function Page(){
    await wait(3000);
    return (<>
    <div className="mt-0 mb-0 min-h-[500px] bg-black text-white text-center text-md py-20 px-20 p-t-10 p-b-10 ">
         <h2>Contact page</h2>
         <MyComp/>   
        </div></>)
}
// swx@2WS

function wait(duration:number){
    
    const [count,setcount] = useState(0);

    // useEffect(
    //     ()=>{const time = setTimeout(()=>console.log(count),1000)
    //     return clearTimeout(time); // clear out function 
    // },[]);
    
    return new Promise(resolve =>{
        setTimeout(resolve,duration)
    })
}