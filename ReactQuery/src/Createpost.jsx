import React, { useState } from "react";
import { useMutation, useQueryClient} from "@tanstack/react-query";

export default function CreatePost(){
    const [title,setTitle] = useState("")
    const queryClient = useQueryClient()

    const CreatePost = async(content) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(content)
        })

        return response.json()
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        mutate({title,body:"adsads"})
        
    }

    const {mutate} = useMutation({
        mutationFn: CreatePost,
        onSuccess: () =>{
            queryClient.invalidateQueries(["posts"])
        },
        onMutate:async()=>{
            await queryClient.cancelQueries(["posts"])
            const previousData = queryClient.getQueryData(["posts"])
            queryClient.setQueryData(["posts"],(oldData) => {
                return [...oldData,{id:Date.now(),title,body:"adsads"}]
            })
            return {previousData}
        },
        onError: (error,newPost,context) =>{
            queryClient.setQueryData(["posts"],context.previousData)
        }
    })

    return(
        <>
        <form>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
        </>
    )
}