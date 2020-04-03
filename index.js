
// const  { User } = require('./models')
const express = require('express')
const app = new express()

app.use(express.json())

app.get('/api/sayhi',async(req,res) => {
    res.send('hello 肖绾！');

});



app.post('/api/register',async(req,res) => {
    console.log(req.body);
    res.send('look an regsiter listen band');

});

const PORT = process.env.PORT || 8900;

app.listen(PORT,() => {
    console.log('http：//localhost:8900')
});
// {"username":"xiaowan","password":"123456"}