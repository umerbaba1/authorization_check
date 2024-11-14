const  express = require('express')
const  app= express()
const jwt=require("jsonwebtoken")
// require('dotenv').config();
const  JWT_SECRET="dhahdausdhubduebue"

// JWT SECRET
// const jwtSecret = process.env.JWT_SECRET;

// middleware for json
app.use(express.json())

// in memory storing variable
let users=[]


//SignUp Page
app.post('/signup', (req,res)=>{
    const username=req.body.username
    const password=req.body.password
    users.push({
        username:username,
        password:password,
    })
    res.json({
        message:`${username} you are SignedUp  `
    })
    console.log(users)
})
//Signin Page
app.post('/signin',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const user = users.find(data => data.username === username && data.password === password);
    if(user){
        const token=jwt.sign({
            username:username
        },JWT_SECRET)
        res.json({
            token
        })
        console.log(users)
    }else{
        res.status(433).json({
            msg:"password or username incorrect"
        })
    }
})
//otherroutes
app.get('/me',(req,res)=>{
    const tokens =req.headers.token
    const decodedjwt=jwt.verify(tokens,JWT_SECRET)
    const userDecoded=decodedjwt.username
    if (!tokens) {
        return res.status(400).json({ msg: "Token not provided" });
    }
    const findUser = users.find(data => data.username === userDecoded);
    if(findUser){
        res.json({
            username:userDecoded,
            password:findUser.password
        })
    }else{
        res.status(400).json({
            msg:"Please sign in again"
        })
    }
})

app.listen(9000)