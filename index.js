const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.f6jcw4q.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
 
  } finally {

  }
}
run().catch(console.dir);

const addJobsCollections = client.db('AllCategoryOfJobs').collection('clientsAddedJobs');


// post the data of add jobs
app.post('/addJobs', async(req, res) => {
  const cosmetic = req.body;
  const result = await addJobsCollections.insertOne(cosmetic);
  res.send(result)
})
app.get('/', (req, res) => {
   res.send("welcome to my server side")
})

app.listen(port, () => {
    console.log(`Welcome  to our server side ${port}`);
})