export default async function MyComp(){
    await wait(3000);
    return(
        <div className="m-20 rounded-lg bg-white text-black text-sm font-bold flex flex-column justify-center" >
            <div>
                <p className="inline">Hello I'm From new component <br />
                yes we all are from new component <br />
                and we are also</p>
            </div>
        </div>
    )
}


function wait(duration:number){
    return new Promise(resolve =>{
        setTimeout(resolve,duration)
    })
}