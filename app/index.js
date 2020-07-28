const express = require('express');
const app = express();

const port = 8080;

const name = process.env.name || 'World';

app.get('/', (req, res) => {
    res.send(`Hello ${name} !`)
})

app.listen(port, () => {
    console.log(`Server Stared on Port ${port}`)
})