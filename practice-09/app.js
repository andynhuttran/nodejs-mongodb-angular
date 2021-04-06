const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
let db;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    if (!db){
        client.connect((err) => {
            db = client.db('exercise9');
            req.db = db.collection('us');
            db = req.db;
            next();
        })
    }
    else {
        req.db = db;
        next();
    }
});


app.get("/us", async (req, res, next) => {
    await req.db.find({}).toArray((err, results) => {
        if (err) return next(err);
        res.json(results);
    });
});

app.post("/us", async (req, res, next) => {
    let data = req.body;
    await req.db.insertMany(data, (err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});


app.get("/zipcode", async (req, res, next) => {
    let state = req.query.state;
    console.log({state});

    let cursor = req.db.aggregate([
        {
            $match: {state}
        },
        {$group: 
            {
                _id: {},
                zipcode: {$addToSet: "$_id"}
            }
        },
        {$project:
            {
                _id: 0,
                "result": "$zipcode"
            }
        }        
    ]);
    cursor.forEach((item) => res.json(item));
});

app.get("/population", async (req, res, next) => {
    let threshold = parseInt(req.query.lt);

    let cursor = req.db.aggregate([
        {$match: {pop: {$lt: threshold}}},
        {$group: {
            _id: {},
            zipcode: {$addToSet: "$_id"}
        }},
        {$project: {
            _id: 0,
            "zipcode": "$zipcode"
        }}
    ]);

    cursor.forEach((item) => res.json(item));
    //sendToClient(cursor, res, next);    
});

////////
app.get("/sort", async (req, res, next) => {

    let city_num = parseInt(req.query.n);
    if (isNaN(city_num)) city_num = 0;
    
    let cursor = req.db.aggregate([    
        {$group: {
            _id: {state: "$state", city: "$city"},
            zipcode: {$addToSet: "$_id"},
            city_num: {$sum: 1}
        }},
        {$match: {
            "city_num": {$gt: city_num}
        }},
        {$project: {
            _id: 0,
            "state": "$_id.state",
            "city": "$_id.city",
            "zipcode-num:": "$city_num"
        }},
        {$sort: {state: 1} },
        {$sort: {city: 1} }
    ]);

    //cursor.forEach((item) => res.json(item));
    sendToClient(cursor, res, next);    
});



app.use((err, req, res, next) => {
    res.json(err);
})

function sendToClient(cursor, res, next){
    cursor.toArray((err, data) => {
        if (err) return next(err);
        res.json(data);
    });
    //cursor.pipe(JSONStream.stringify()).pipe(res.type('json'))
}

app.listen(3000, () => {
    console.log("Listenning at 3000");
});