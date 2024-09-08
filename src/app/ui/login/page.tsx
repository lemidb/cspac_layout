'use client'

import { useEffect, useState } from "react";

export default function Page(){

    const [state,setState]  = useState('');
    function handlechange(){
        const randomstring = (Math.floor(Math.random()*100)).toString();
        setState("I'm clicked on : "+randomstring);
    }
    useEffect(()=>alert('state is : '+state),[state]);

     console.log('hello from login page!')
    return( <> <h3>Hello from login page
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={state}/>
            <button onClick={handlechange}>Submit</button>
        </form>
    </h3></>)
}

function handleSubmit(event:any){  
    event.preventDefault();
   }

// swx@2WS

