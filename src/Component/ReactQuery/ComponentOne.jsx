import React from 'react'
import { useQuery } from 'react-query';


const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
}


export default function ComponentOne() {

    // to the use query hook we pas two this one is query key and query function
    const { data, isLoading, error } = useQuery("todos", fetchData)

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}
