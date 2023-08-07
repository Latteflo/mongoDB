async function insertComment(client, comment) {
    const commentsCollection = client.db('myapp').collection('comments');
    return await commentsCollection.insertOne(comment);
  }
  
  module.exports = {
    insertComment
  };
  