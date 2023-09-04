const express = require("express")
const path = require('path');
const app = express();
const fs = require("fs");

const port = 80;

app.use(express.static(path.join(__dirname,'static')))

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"static/index.html"))

  })

  app.post('/', (req, res)=>{

    console.log(req.body) 
   name = req.body.name
    email = req.body.email
    phonenumber = req.body.phonenumber
    age = req.body.age
    institute = req.body.institute
    degree = req.body.degree
    stream = req.body.stream

let outputtowrite = ` name of the client is ${name}, age is ${age} years old, e-mail address is ${email}, phone-number is ${phonenumber}, studies at ${institute}, having degree of ${degree}, in ${stream} stream` 

fs.writeFileSync('output.txt', outputtowrite)

    res.status(200).redirect('thanks.html'); 

})

//start the server
app.listen(port, () => {
    console.log(`the application is started on port ${port}`)
});