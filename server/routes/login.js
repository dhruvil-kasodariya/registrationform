const router =require("express").Router();
const db=require("./../database")

router.get('/get?email='+req.query,async(req,res)=>{
    db.query("select * from registration where email==="+req.query,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(result)
        }
    })
})

module.exports=router;