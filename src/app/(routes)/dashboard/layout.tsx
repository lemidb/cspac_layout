import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
// swx@2WS
export const metadata: Metadata = {
  title: "My Home Page",
  description: "Generated by lemi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <>
        <div className="grid grid-cols-12">
        <aside className="bg-zinc-100 border h-screen lg:col-span-2 rounded-lg">
         <nav className="flex flex-col justify-center items-center gap-5 mt-10">
         {/* <div className="flex flex-col justify-between ml-2 font-light overflow-" >  */}
          <div className="flex flex-row gap-1"> <h2 className="font-medium">Station</h2></div>
          <div><h2>Department</h2></div>
          <div><h2>Cost Plan</h2></div>
          {/* </div> */}
          </nav> 
      </aside>
      <div className="col-span-10 ">
      <div className="flex flex-row w-full justify-around p-3 m-5 rounded-lg shadow-sm text-black">
        
        <ul className="w-[70%] flex flex-row justify-evenly text-black font-serif">
          <li className="hover:text-red-500">
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/dashboard/about">About</Link>
          </li>   
          <li className="hover:text-red-500">
            <Link href="/dashboard/project">Projects</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/dashboard/contact">Contacts</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/dashboard">homepage</Link>
          </li>
        </ul>
        <div className="w-[15%] ">
          <button className="bg-whie shadow-xl border text-red-600 px-3 py-1 rounded-lg font-mono text-base"><Link href={"/form"}>Get Started</Link></button>
        </div>
        </div>
          {children}
        </div>
        </div>
        <script src="https://unpkg.com/@themesberg/flowbite@1.5.3/dist/flowbite.bundle.js"></script>

    </>
    );
}