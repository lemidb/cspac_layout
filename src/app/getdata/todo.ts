// swx@2WS

export type TodoFetch = {
      id: number,
      title: string,
      completed: boolean
}

export default async function getTodoFetch({id}:{id:string}){

return fetch('https://jsonplaceholder.typicode.com/todos/'+{id})
      .then(response => response.json())
      .then(data => data as TodoFetch[])
}