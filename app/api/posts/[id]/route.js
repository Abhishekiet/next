import { Posts } from "@/app/Models/post"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const DELETE=async( req, { params } )=>{
    await mongoose.connect( process.env.mongodbURL )
    await Posts.deleteOne( { _id: params.id } )

    return NextResponse.json( { msg: "deleted" } )
}