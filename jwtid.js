const express = require('express')
const app = express()
const jwt = require("jsonwebtoken")
const cors = require('cors')

const JWT_SECRET = "dhahdausdhubduebue"
 
// cross origin resource sharing middlware
app.use(cors())


// middleware for json
app.use(express.json())

// in memory storing variable
let users = []


// unique id for each user to create an account
let user__id = 0;

function user__id__increaser() {
    user__id++
}

//middleware auth
function auth(req,res,next){
   const token = req.headers.token
   const decodedjwt=jwt.verify(token,JWT_SECRET)
   console.log(decodedjwt)
   if(decodedjwt.id){
    req.id=decodedjwt.id
    next()
   }else{
    res.status(402).json({
        msg:"Logg in again"
    })
   }
    
}

//SignUp Page
app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const alreadyusr = users.find(req => req.username === username)
    console.log(alreadyusr)
    if (!username && !password) {
        res.status(422).json({ msg: "Enter your username & password" })
    } else if (alreadyusr) {
        res.status(422).json({
            msg: "username already exist"
        })
    } else {
        user__id__increaser()
        users.push({
            username: username,
            password: password,
            id: user__id
        })
        res.json({
            message: `${username} you are SignedUp  `
        })
        // console.log(users)
    }

})

//Signin Page
app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = users.find(data => data.username === username && data.password === password);
    console.log(user)
    if (user) {
        const token = jwt.sign({
            id: user.id
        }, JWT_SECRET)
        res.json({
            token
        })
        console.log(users)
    } else {
        res.status(433).json({
            msg: "password or username incorrect"
        })
    }
})
//otherroutes  using auth middleware in order to check the token and modifying the object data of req in middleware
app.get('/me',auth, (req, res) => {
    const token_id=req.id
    const findUser = users.find(data => data.id === token_id);
    if (findUser) {
        res.json({
            username: findUser.username,
            password: findUser.password
        })
    } else {
        res.status(400).json({
            msg: "Please sign in again"
        })
    }
})

app.listen(9000)
//Port at 9000