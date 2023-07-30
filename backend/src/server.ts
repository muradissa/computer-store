// import dotenv from 'dotenv';
// dotenv.config();
// import path from 'path';
import express from "express";
import cors from "cors";
import { sample_computer_parts, sample_tags } from "./data";
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


// const port = process.env.PORT || 5000;
const port =  5000;

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})