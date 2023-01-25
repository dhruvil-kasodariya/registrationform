const router =require("express").Router();
const db=require("./../database")

router.get('/get',async(req,res)=>{
    db.query("select * from registration",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(result)
        }
    })
})

router.post("/post",async(req,res)=>{
    const {fname ,lname ,email ,password ,role} =req.body;
    console.log(fname,lname,email,password,role);
    console.log("here")
    
    db.query("INSERT INTO registration (fname, lname, email ,password ,role) VALUES ("+fname+","+lname+","+email+","+password+","+role+")",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(result)
        }
    })
})

module.exports= router;