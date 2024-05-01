require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mailRoute = require("./router/mail-route");

const port = process.env.PORT;

const corsOptions = {
    origin: "https://nodemailerproject-frontend.vercel.app/",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
};

app.get("/", (req,  res)=>{
    res.send("hello");
    console.log("hello");
})


app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/form", mailRoute);

app.listen(port, ()=>{
console.log(`server on port ${port}`);
});
