const express= require('express');
const mongoose= require('mongoose');

const app=express();

const port=3000;
const url= "mongodb+srv://nsubhadipta:Admin2020@cluster0.huzql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const studentrouter= require("./routes/students");
app.use('/students',studentrouter)



app.listen(port, () =>{
    console.log('Server started');
})