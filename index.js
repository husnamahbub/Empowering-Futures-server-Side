const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
const categoryJobsCollections = client.db('AllCategoryOfJobs').collection('category-job-tabs');

app.get('/category', async(req, res) => {
  const cursor = categoryJobsCollections.find()
  const result = await cursor.toArray();
  res.send(result)
})

// post the data of add jobs
app.post('/addJobs', async(req, res) => {
  const cosmetic = req.body;
  const result = await addJobsCollections.insertOne(cosmetic);
  res.send(result)
})
app.get('/categoryJobs', async(req, res) => {
  const cursor = addJobsCollections.find()
  const result = await cursor.toArray();
  res.send(result)
})


app.get('/myJob', async (req, res) => {
  let query = {};
  if (req.query?.email) {
      query = { email: req.query.email }
  }
  const result = await addJobsCollections.find(query).toArray();
  res.send(result);
})

app.get('/jobDetails/:id', async(req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id)};
  const result = await addJobsCollections.findOne(query);
  res.send(result);
})


app.get('/', (req, res) => {
   res.send("welcome to my server side")
})


app.listen(port, () => {
    console.log(`Welcome  to our server side ${port}`);
}) 