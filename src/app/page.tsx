import Image from "next/image";

import Link from "next/link";
// swx@2WS
export default function Home() {
  return (
    <div className="grid min-h-[30rem] grid-cols-2 m-auto top-0 justify-stretch">
      <div className="bg-slate-50 min-h-[10rem] ">
      <h1>Landing Page or Home Page</h1>
      </div>
      <div className="bg-teal-100 min-h-[3rem]">
        <h1>Content</h1>
      </div>
    </div>
  );
}
