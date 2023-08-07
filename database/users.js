async function insertUser(client, user) {
    const usersCollection = client.db('myapp').collection('users');
    return await usersCollection.insertOne(user);
  }
  
  module.exports = {
    insertUser
  };
  