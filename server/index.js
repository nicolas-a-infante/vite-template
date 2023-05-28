require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const PORT = 5174;

/* You will need to create a .env file containing these credentials */
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.send("Hello World!");
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});