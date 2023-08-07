const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB. YEY!");

    const collection = client.db('test').collection('students');

    // Insert a document into the collection
    const result = await collection.insertOne({
      name: 'John Doe',
      age: 25,
      grade: 'A'
    });
    console.log(`Inserted ${result.insertedCount} documents into the collection`);

    // Find all documents in the collection
    const docs = await collection.find({}).toArray();
    console.log(`Found ${docs.length} documents in the collection`);
    console.log(docs);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
