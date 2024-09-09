import getTodoFetch from "@/app/_lib/data/get_todo_data/todo"


export default async function Page({id}:{id:string}){
    const todos = await getTodoFetch({id})
    return(<div className="flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Todo from fetch</h1>
    <ul>
        {todos.map(todo => (
            <li key={todo.id} style={{textDecoration:todo.completed?"line-through":undefined,fontWeight:todo.completed?"bold":"normal"}}>{todo.title}</li>
        ))}
    </ul>
    </div>)
}