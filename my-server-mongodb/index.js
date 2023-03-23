const express = require('express');
const app = express();
const port = 3002;
const morgan = require("morgan")
app.use(morgan("combined"))
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors())
app.listen(port, () => {
    console.log(`My Server listening on port ${port}`)
})
app.get("/", (req, res) => {
    res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
// client = new MongoClient("mongodb+srv://doadmin:am0XHV6l234Y91O8@db-mongodb-k20411-ed30bf44.mongo.ondigitalocean.com/admin?tls=true&authSource=admin", { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");

app.get("/fashions", cors(), async (req, res) => {
    const result = await fashionCollection.find({}).toArray();
    res.send(result)
})