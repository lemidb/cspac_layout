"use client"

import { Suspense, useEffect, useState } from "react";
import MyComp from "../../components/contact/mycomp";
// swx@2WS
export default async function Page(){
    await wait(3000);
    return (<>
    <div className="mt-0 mb-0 min-h-[500px] bg-black text-white text-center text-md py-20 px-20 p-t-10 p-b-10 ">
         <h2>Contact page</h2>
         <MyComp/>   
        </div></>)
}

function wait(duration:number){
    return new Promise(resolve =>{
        setTimeout(resolve,duration)
    })
}