const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})