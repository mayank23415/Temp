const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function connection() {
    try {
        await client.connect();
        await client.db('Users').collection('user');
        console.log('Connected');
    }catch(e) {
        console.log("Error");
    }
}

connection();

module.exports = client;