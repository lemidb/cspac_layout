import Image from "next/image";

import Link from "next/link";

export default function About() {
  return (
   
      <div className="bg-slate-300 px-10 py-10 min-h-[90vh] flex flex-col gap-2 justify-center items-center lg:grid lg:grid-cols-2 lg:gap-2 text-md  text-center text-red-700 rounded-lg border-red-500">
        <div className="shadow-md  px-4 rounded-xl overflow-hidden">  
        <Image className="rounded-2xl  shadow sm:ml-44 sm:mb-12 mt-4" width={400} height= {350} src="/images/avatar.png" alt="lemipicture" />
        </div>
        <div className=" pl-5 border-1 text-orange-600 text-left pt-10 pr-10 rounded-lg font-[courier]">
        <p className="pt-10  first-line:text-yellow-600 text-2xl" ><span className="text-5xl"> Software Developer. </span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ab cum aliquam voluptatibus dolorum assumenda quis, optio velit dolore aspernatur tempore labore ex laboriosam ut accusamus molestias, maxime consequuntur. Accusantium</p> 
        </div>
    </div>
  
  );
}
