const express = require('express');
const app = express();
const port = process.env.PORT||5000;
app.get('/',(req,res)=>{
    res.send('Its the node js server' )
})
app.listen(port,()=>{
    console.log('Listening to the port',port);
})