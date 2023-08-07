const connectDB = require('./database/connect');
const { insertUser } = require('./database/users');
const { insertPost, getPostsWithComments } = require('./database/posts');
const { insertComment } = require('./database/comments');

async function run() {
  const client = await connectDB();

//   const user = { name: 'FloFloooo', email: 'meee@example.com' };
//   const userResult = await insertUser(client, user);

//   const post = { user_id: userResult.insertedId, content: 'Hi lovely peopleeee!', created_at: new Date() };
//   const postResult = await insertPost(client, post);

//   const comment = { post_id: postResult.insertedId, user_id: userResult.insertedId, content: 'Nice! wink wink wink!', created_at: new Date() };
//   await insertComment(client, comment);

//   const postsWithComments = await getPostsWithComments(client);
//   console.log('Posts with comments:', postsWithComments);

//   await client.close();
//   console.log("Connection to MongoDB closed.");

const postsWithComments = await postsCollection.aggregate([
    { $lookup: { from: 'comments', localField: '_id', foreignField: 'post_id', as: 'comments' } },
    { $sort: { created_at: -1 } }
  ]).toArray();
  
  console.log(postsWithComments);


}

run().catch(console.dir);
