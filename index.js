const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("I Know ,How to open NodeJS yeah!");
})

app.listen(3000, () => console.log("listening to port 3000"));