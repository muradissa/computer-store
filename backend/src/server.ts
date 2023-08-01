// import dotenv from 'dotenv';
// dotenv.config();
// import path from 'path';
import express from "express";
import cors from "cors";
import { sample_computer_parts, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";
// import foodRouter from './routers/food.router';
// import userRouter from './routers/user.router';
// import orderRouter from './routers/order.router';
// import { dbConnect } from './configs/database.config';
// dbConnect();


const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

// app.use("/api/foods", foodRouter);
// app.use("/api/users", userRouter);
// app.use("/api/orders", orderRouter);

// app.use(express.static('public'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname,'public', 'index.html'))
// })

app.get('/api/computer-parts', (req, res) => {
    res.send(sample_computer_parts)
});

app.get('/api/computer-parts/:id', (req, res) => {
    res.send(sample_computer_parts.filter(item => item.id === req.params.id)[0])
});

app.get('/api/computer-parts/tags', (req, res) => {
    res.send(sample_tags)
});

app.get('/api/computer-parts/tags/all', (req, res) => {
    res.send(sample_tags)
});


app.get('/api/computer-parts/tag/:tagName', (req, res) => {
    res.send(sample_computer_parts.filter(item => item.name === req.params.tagName))
});

app.get('/api/computer-parts/search/:searchTerm', (req, res) => {
    const searchTerm = req.params.searchTerm;
    const computerParts = sample_computer_parts.filter(computerpart => 
        computerpart.name.toLowerCase().includes(searchTerm.toLowerCase())
        ||  computerpart.description.toLowerCase().includes(searchTerm.toLowerCase())
        ||  computerpart.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
    res.send(computerParts)
});


app.post('/api/users/login', (req, res) => {
    const body = req.body;
    const {email , password} = req.body;
    //const user =sample_users.find(user => user.email === body.email && user.password === body.password);
    const user =sample_users.find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateTokenReponse(user))
    }else{
        res.status(400).send("User name or password is not valid!")
    }
});    

const generateTokenReponse = (user:any) =>{
    // const token = jwt.sign({
    //     id: user.id, email:user.email, isAdmin: user.isAdmin
    //   },process.env.JWT_SECRET!,{
    //     expiresIn:"30d"
    //   });
    // user.token = token;
    // return user;

    const token = jwt.sign({
        id: user.id, email:user.email, isAdmin: user.isAdmin
      },"m9j2sdgl1",{
        expiresIn:"30d"
      });
    user.token = token;
    return user;
}


// const port = process.env.PORT || 5000;
const port =  5000;

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})