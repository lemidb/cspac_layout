import { Flame, Rocket } from "lucide-react";
import type { Metadata } from "next";

import Image from "next/image";
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
    <div className="grid grid-cols-12 m-auto w-full h-screen overflow-hidden">
      <aside className="bg-zinc-100 border h-screen lg:col-span-2 rounded-lg">
        <div className="flex flex-col ">

        <div className="justify-start">
        <div className="flex flex-col justify-center items-center mt-4">
          <Image
            className="ml-2"
            src="/images/cost.png"
            width={70}
            height={60}
            alt="Logo"
          />
          <h3 className="mt-2 font-semibold text-cyan-500 text-center   ">
            Cost Saving Planning & Achievement Controlling
          </h3>
        </div>
        </div>
        <div className="flex-1">
        <nav className="flex flex-col justify-center items-center gap-5 mt-10 font-semibold text-black font-serif">
          <div className="flex flex-row gap-1">
            <h2>
              <Link href="\dashboard\">
                <div className="flex ">
                  <Flame />
                  Station
                </div>
              </Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link href="\dashboard\about">Department</Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link href="\dashboard\contact">Cost Plan</Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link href="\dashboard\payments">cost saving target</Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link href="\dashboard\project">Cost saving plan</Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link href="\dashboard\todo">Adhoc Achievement</Link>
            </h2>
          </div>
        </nav>
        </div>
        <div className="justify-end ">
          <button className="bg-white text-orange-700 border-black border-2 rounded-xl px-4 py-2 font-semibold">Sign out</button>
        </div>

        </div>
      </aside>
      <div className="col-span-10 ">
        <div className="flex flex-row w-full justify-around p-3 m-5 rounded-lg shadow-sm text-black">
          <h2>Cost Saving Planning & Achievement Controlling System Header </h2>
          <div className="w-[15%] ">
            <button className="bg-white flex gap-2 shadow-xl border-2 border-b-black border-l-orange-500 border-r-orange-600 border-t-black text-red-600 px-10 py-1 rounded-lg font-mono text-base">
            <Rocket />
              <Link href={"/form"} className="text-xl font-[600]">
              Get Started
              </Link>
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

// I have stored the header

{
  /* <ul className="w-[70%] flex flex-row justify-evenly text-black font-serif">
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
</ul> */
}
