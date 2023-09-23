'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

const App=()=>{

  const [ state, setState ]  =useState( {} )

  const router = useRouter()

  const postdata=async()=>{
    const res = await axios.post( '/api/posts', state )
    if ( res.status === 200 ){
      alert( 'Successfully Updated' )
    }
  }

  return(
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <h1 className="text-center font-bold text-2xl underline"> Post DATA </h1>

      <div className="flex gap-3"> title : <input type='text' name='title' onChange={(e)=> setState( { ...state, [e.target.name] :e.target.value} ) } className="border border-blue-500"/> </div> 
      <div className="flex gap-3"> description : <input type='text' name='description' onChange={(e)=> setState( { ...state, [e.target.name] :e.target.value} ) } className="border border-blue-500"/> </div>   
      <div className="flex gap-3"> Category : <input type='text' name='category' onChange={(e)=> setState( { ...state, [e.target.name] :e.target.value} ) } className="border border-blue-500"/> </div> 
      <div className="flex gap-3"> imageUrl :<input type='text' name='imageUrl' onChange={(e)=> setState( { ...state, [e.target.name] :e.target.value} ) } className="border border-blue-500"/> </div> 
      
      <button className="bg-[green] font-bold text-xl p-4 md:w-[20%]" onClick={postdata}> Post data </button>

      <div className="flex flex-wrap gap-3 justify-center">
        <button className="bg-[blue] font-bold text-xl p-4 " onClick={ ()=>router.push("/api/posts") }> View all data </button>
        <button className="bg-[red] font-bold text-xl p-4 " onClick={ ()=>router.push("/deletePost") }> Delete Post </button>
      </div>

    </div>
  )
}

export default App