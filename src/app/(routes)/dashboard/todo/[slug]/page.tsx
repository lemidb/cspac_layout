import TodoPage from "@/app/_lib/data/get_todo_data/fetch_todo";


export default async function Page({ params }: { params: { slug: string } }){
    console.log(`Here is the passed Id: ${params.slug}`);
    return(
        <TodoPage id={params.slug} />
    );
}