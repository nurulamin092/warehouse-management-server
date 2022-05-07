const express = require('express');
const cors = require('cors');
const app = express();
const prot = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running warehouse server');
});

app.listen(prot, () => {
    console.log('crud warehouse  server is running');
})