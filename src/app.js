const express = require('express');
const validationRules = require('./middlewares/validation.middleware');

const app = express();
app.use(express.json());

app.post("/register", validationRules, (req, res) => {
    const { username, email, password } = req.body;

    res.status(201).json({ message: "User registered successfully", user: { username, email } });
});



app.get("/", (req, res) => {
    res.status(200).json({message: "Hello World!"});
});



module.exports = app;