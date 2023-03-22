const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('combined'))
const cors = require('cors')
app.use(cors())

// //lets require/import the mongodb native drivers.
// var mongodb = require('mongodb');

// //We need to work with "MongoClient" interface in order to connect to a mongodb server.
// var MongoClient = mongodb.MongoClient;

// // Connection URL. This is where your mongodb server is running.
// var url = 'mongodb://localhost:27017/my_database_name';

// // Use connect method to connect to the Server
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the mongoDB server. E
// url

// default api
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



let database = [
    { "BookId": "b1", "BookName": "Kỹ thuật lập trình cơ bản", "Price": 70, "Image": "b1.png" },
    { "BookId": "b2", "BookName": "Kỹ thuật lập trình nâng cao", "Price": 100, "Image": "b2.png" },
    { "BookId": "b3", "BookName": "Máy học cơ bản", "Price": 200, "Image": "b3.png" },
    { "BookId": "b4", "BookName": "Máy học nâng cao", "Price": 300, "Image": "b4.png" },
    { "BookId": "b5", "BookName": "Lập trình Robot cơ bản", "Price": 250, "Image": "b5.png" },
]

app.get('/books', cors(), (req, res) => {
    res.send(database)
})

app.get('/products', cors(), (req, res) => {
    res.send([
        { productCode: 1, productName: 'Heineken', productPrice: 19000 },
        { productCode: 2, productName: 'Tiger', productPrice: 18000 },
        { productCode: 3, productName: 'Sapporo', productPrice: 21000 },
    ])
})

