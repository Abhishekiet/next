'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const deletePage=()=>{

    const [ id, setId ] = useState("")

    const router = useRouter()

    const handleDelete=async(id)=>{
        const res = await axios.delete( `api/posts/${id}` )
        if( res.status === 200 ){
            alert( 'Post Deleted Successfully ' )
        }
    }

    return(
        <div className="h-screen justify-center items-center flex">
            <span className="flex flex-col gap-5">
                <h1 className="text-center font-bold text-2xl"> Please Enter ID  </h1>
                <input type='text' onChange={ (e)=> setId( e.target.value ) } value={id} className="border border-blue-500 p-4"/>
                <button onClick={ ()=> handleDelete(id) } className="bg-[red] text-white text-xl p-4 rounded-full"> Delete This </button>
                <button onClick={ ()=> router.push("/") } className="bg-[black] text-white text-xl p-4 rounded-full"> Home </button>
            
            </span>
        </div>
    )
}

export default deletePage