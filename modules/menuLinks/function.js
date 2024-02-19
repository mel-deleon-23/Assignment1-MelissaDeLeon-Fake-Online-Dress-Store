const { MongoClient } = require("mongodb"); 

//DB values
// const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/?authSource=fakeE-Store`;
// const dbUrl = `mongodb://admin:Store123!@localhost:27017/?authSource=fakeE-Store`; 
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/`;
const client = new MongoClient(dbUrl);

//MongoDb functions
async function connection(){
    db = client.db("storedb");
    return db;
}

//Function to select all documents in menuLinks collection
async function getLinks(){
    db = await connection();
    let results = db.collection("menuLinks").find({});
    resultsArray = await results.toArray();
    return resultsArray;
}

//Function to insert one link
async function addLink(linkData){
    db = await connection();
    let status = await db.collection("menuLinks").insertOne(linkData);
    console.log("link added");
}

module.exports = {
    getLinks,
    addLink
}