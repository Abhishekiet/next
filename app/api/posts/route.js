import { Posts } from "@/app/Models/post"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const POST =async(req)=>{
    const data = await req.json()
    await mongoose.connect( process.env.mongodbURL )
    await Posts.create( data )
    return NextResponse.json( data )
}

export const GET=async()=>{
    await mongoose.connect( process.env.mongodbURL )
    const data = await Posts.find()
    return NextResponse.json( data )
}