import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
    title : String,
    description: String,
    category: String,
    imageUrl: String,
    date: { type: Date, default: Date.now },
})

export const Posts = mongoose.models.posts || mongoose.model( 'posts', PostModel )
