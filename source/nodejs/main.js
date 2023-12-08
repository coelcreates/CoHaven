const express = require("express")

const app = express();

var cors = require('cors');
app.use(cors());

app.listen(3001, () => {
    console.log("Server has started! Open http://localhost:3001")
})

app.get('/', async (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/coco', async (req, res) => {
    res.send("<h1>Hello, Coco!</h1>");
});

app.get('/event', async (req, res) => {
    const event = 
    {
        name: "My super Event2",
        venue: "The White House2",
        host: {
            name: "Coco"
        }
    }

    res.send(event);
});