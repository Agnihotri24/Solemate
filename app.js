const express = require('express');
const app = express();

app.get('/', (req, res)=>
{
    res.send("Everything is file You can start your project");
})

app.listen(3000);