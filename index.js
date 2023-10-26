const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.SERVER_PORT || 12345;

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({"message": "A szerver működik"});
});

app.listen(PORT, () => {
    console.log(`Server port: ${PORT}`);
});