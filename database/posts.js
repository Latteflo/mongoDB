async function insertPost(client, post) {
    const postsCollection = client.db('myapp').collection('posts');
    return await postsCollection.insertOne(post);
  }
  
  async function getPostsWithComments(client) {
    const postsCollection = client.db('myapp').collection('posts');
    return await postsCollection.aggregate([
      { $lookup: { from: 'comments', localField: '_id', foreignField: 'post_id', as: 'comments' } },
      { $sort: { created_at: -1 } }
    ]).toArray();
  }
  
  module.exports = {
    insertPost,
    getPostsWithComments
  };
  