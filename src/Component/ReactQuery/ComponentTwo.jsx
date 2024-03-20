import React from 'react'
import { useMutation } from 'react-query';


const updateData = async (data) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    return response.json();
}


export default function ComponentTwo() {
    const mutation = useMutation(updateData);

    const handleUpdate = async (data)=>{
        try{
            await mutation.mutateAsync(data);
        }catch (error){
            console.log(error);
        }
    }

    
    return (
        <button onClick={()=>handleUpdate({title:"Updated", completed:true})}>
            Update
        </button>
    )
}
