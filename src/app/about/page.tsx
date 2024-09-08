import Image from "next/image";

import Link from "next/link";
// swx@2WS
export default function Home() {
  return (
      <div className="bg-blue-950 grid sm:grid-cols-2  text-md  text-center text-red-700 rounded-lg border-red-500">
        <div className="shadow-md border-black rounded-xl">  
        <img className="rounded-2xl m-auto shadow sm:ml-44 sm:mb-12 mt-4"  src="avatar.png" alt="lemipicture" />
        </div>
        <div className="pl-5 border-1 text-orange-600 text-center pt-10 pr-10 rounded-lg font-[courier]">
        <p className="pt-10  first-line:text-yellow-600 " ><span className="text-2xl"> Software Developer. </span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ab cum aliquam voluptatibus dolorum assumenda quis, optio velit dolore aspernatur tempore labore ex laboriosam ut accusamus molestias, maxime consequuntur. Accusantium</p> 
        </div>
    </div>
  );
}
