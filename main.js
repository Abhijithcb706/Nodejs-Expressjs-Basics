const express =require('express')
const path = require('path')
const PORT =3000;
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res
    .send({msg:"hello from Express"})
    // .send(req.header('host')) 
    // .send(req.header('user-agent'))
})

app.post('/contact',(req,res)=>{
if(!req.body.name){
    res.status(400).json({msg:"name is required"})
}

    res.send(`thanks ${req.body.name}`).status(201)
})
 
app.put('/edit/:id',(req,res) =>{

    res.json({
        id:req.params.id,
        title:req.body.title
    })
})

app.delete('/remove/:id',(req,res) =>{
    res.json({
       
        msg:"deleted"
    })
})


    

    // Server setup
app.listen(PORT, () => {
    console.log(`server listening on  port ${PORT}`)
});