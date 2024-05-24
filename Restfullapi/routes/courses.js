const express= require("express");
const {route}= require("express/lib/application");
const router= express.Router();
const Course=require("../models/course")


//create an api
//here user is passing the url and http method like post.to create the api
router.get("/" , async(req,res)=>{
    try{
        const courses= await Course.find();
        res.json(courses);
    }catch(err){
        res.json(err);
    }
    });


    //get single course

   router.get("/:courseId",async(req,res)=>{
    const courseId=req.params.courseId
    try{
        const c= await Course.findById(courseId);
        res.json(c);
    }catch(error){
        res.json(error);
    }
   })


    //create course 

    router.post("/" , async(req,res)=>{
    const course=await Course.create(req,body)
    res.json(course)
    })

    //delete course
    router.delete("/:courseId" , async(req,res)=>{
        const courseId=req.params.courseId
        try{
            const c= await Course.deleteOne(courseId);
            res.json({message:"done",});
        }catch(error){
            res.json(error);
        }
    })

    //update course
    router.put("/:courseId", async(req,res)=>{
        const courseId=req.params.courseId
        try{
           const course=await Course.updateOne({
                "_id":courseId
            },
            req.body)
            res.json(course)
        }
    catch(error)
    {
        res.json(error);
    }
});

     module.exports=router;