
export type TodoFetch = {
      userId:number,
      id: number,
      title: string,
      completed: boolean
}

export default async function getTodoFetch({id}:{id:string}){
console.log(`The id is ${id} and todo is being fetched`)
const url = `https://jsonplaceholder.typicode.com/todos/${id}`
return fetch(url)
      .then(response => response.json())
      .then(data => data as TodoFetch[])
}