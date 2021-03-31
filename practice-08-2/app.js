const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
let db;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    if (!db) {
        client.connect(function (err) {
            db = client.db('exercise2');
            req.db = db.collection('locations');
            next();
        });
    } else {
        req.db = db.collection('locations');
        next();
    }
});

//delete
app.delete("/locations", async (req, res, next)=> {
    await req.db.removeMany({}, (err, results) => {
        if (err) {
            return next(err);
        }
        res.json(results)
    });
});

// app.get("/indexes", async (req, res) => {    
//     let indexes = await req.db.getIndexes();
//     res.json(indexes);
// })

// //create new index
// app.post("/indexes", async (req, res) => {
//     let index = req.body;
//     await req.db.createIndex(index, (err, results) => {
//         res.json(results)
//     });
// });

//insert location
app.post("/locations", async (req, res, next)=> {
    let location = req.body;
    await req.db.insertMany(location, (err, results) => {
        if (err) {
            return next(err);
        }
        
        //create two index
        //req.db.createIndex({location: '2d'});
        //req.db.createIndex({location: '2d', category: '1'});        

        res.json(results);
    });
});

//run on admin console
//req.db.createIndex({location: 1});
//search by location


app.get("/locations", async (req, res, next) => {
    try {        
        await req.db.find({})
                .toArray((err, arr) => res.json(arr));
    }
    catch (err){
        next(err);
    }
});

//search by category, by using createIndex({category: 'text'})
app.get("/locations/:category", async (req, res, next) => {
    try {
        let category = req.params.category;
        let query = {$text: {$search: category}};
        console.log(query);

        await req.db.find(query)
                .toArray((err, arr) => res.json(arr));
    }
    catch (err){
        next(err);
    }
});

//search by long, lat, by using createIndex({location: '2d'})
app.get("/locations/:long/:lat/", async (req, res, next) => {
    try {
        let long = parseFloat(req.params.long);
        let lat = parseFloat(req.params.lat);
        let limit = parseInt(req.body.limit);

        let query = {location: {"$near": [long, lat]}};
        console.log(query);

        await req.db.find(query).limit(limit)
            .toArray((err, data) => res.json(data));
     
    }
    catch (err){
        next(err);
    }
});


//search by long, lat and category
app.get("/locations/:long/:lat/:category", async (req, res, next) => {
    try {
        let long = parseFloat(req.params.long);
        let lat = parseFloat(req.params.lat);
        let category = req.params.category;

        let query = {
            location: {"$near": [long, lat]}, 
            //$text: {$search: category}
            category: category
        };

        console.log(query);

        await req.db.find(query)
            .toArray((err, data) => res.json(data));
    }
    catch (err){
        next(err);
    }
});

//error handling
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

//bootstrap
app.listen(3000, () => console.log('Exercise 2 is listening to 3000'));