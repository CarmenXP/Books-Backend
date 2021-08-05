const router = require("express").Router();
const Post = require("../models/Post");


//crear un post

router.post("/post", async(req, res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
});

//obtener todos los post

router.get("/allPosts", async(req, res)=>{
    const allPosts = await Post.find()
    try{
        res.status(200).json(allPosts)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports= router