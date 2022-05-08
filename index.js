const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express();
const prot = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qo3jo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const productsCollection = client.db('warehouseDb').collection('product');


    }
    finally {

    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Running warehouse server');
});

app.listen(prot, () => {
    console.log('crud warehouse  server is running');
})