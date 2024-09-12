import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MyCard({props}:{props:any}){
    return (
        <Card className="bg-slate-900 flex flex-col justify-center  text-white shadow-xl border-1 min-w-[30rem] min-h-[28rem] ">
        <CardHeader>
            <CardTitle className=" text-white font-semibold font-sans">{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
            
                {props.content}
                <Image src="/images/avatar.png" width={300} height={280} alt="avatar"></Image>
        </CardContent>
        <CardFooter>
            <div>
                {props.footer}
            </div>
        </CardFooter>
       </Card>
    );
}