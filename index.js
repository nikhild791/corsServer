const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        hostname: req.hostname,
        ip:req.ip,
        socket:req.socket.remoteAddress,
        msg : "Hello world we are hitting /"
    })
})

app.post('/',(req,res)=>{
    res.json({
        msg: "form has been submitted"
    })
})

app.listen(port,()=>{
    console.log('server is running on port ' + port)
})