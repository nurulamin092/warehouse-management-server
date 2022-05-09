const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        app.get('/products', async (req, res) => {
            const query = {};
            const cursor = productsCollection.find(query);
            const product = await cursor.toArray();
            res.send(product);
        });

        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const product = await productsCollection.findOne(query);
            res.send(product);
        });

        app.post('/products', async (req, res) => {
            const addNewItem = req.body;
            const result = await productsCollection.insertOne(addNewItem);
            res.send(result);
        });
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