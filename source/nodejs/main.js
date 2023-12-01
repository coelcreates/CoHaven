const express = require("express")

const app = express();
app.listen(3000, () => {
    console.log("Server has started! Open http://localhost:3000")
})

app.get('/', async (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/coco', async (req, res) => {
    res.send("<h1>Hello, Coco!</h1>");
});