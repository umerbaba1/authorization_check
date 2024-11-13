const  express = require('express')
const  app= express()

// middleware for json
app.use(express.json())

// in memory storing variable
let users=[]

// Generate token in string

function GenerateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let  token=''
    for(let i=0;i<12;i++){
        token+=options[Math.floor(Math.random()*options.length)]
    }
    return token
}


//SignUp Page
app.post('/signup', (req,res)=>{
    const username=req.body.username
    const password=req.body.password
    users.push({
        username:username,
        password:password,
        token:null
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
        const token=GenerateToken()
        user.token=token
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
    if (!tokens) {
        return res.status(400).json({ msg: "Token not provided" });
    }
    const findUser = users.find(data => data.token === tokens);
    if(findUser){
        res.json({
            username:findUser.username,
            password:findUser.password
        })
    }else{
        res.status(400).json({
            msg:"Please sign in again"
        })
    }
})

app.listen(7000)