const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const products = [
    {id : 1, name: "indomie", price : 3000},
    {id : 2, name: "telur", price : 2000},
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3000, ()=> {
    console.log("backend running at http://localhost:3000");
});
