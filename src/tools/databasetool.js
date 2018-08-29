const MongoClient = require('mongodb').MongoClient
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'hehongsheng';

exports.getlist = (collectionName, params, callback) => {
  MongoClient.connect(url, {
    useNewUrlParser: true
  }, function (err, client) {
    // 拿到db对象
    const db = client.db(dbName);

    // 拿到集合
    const collection = db.collection(collectionName);

    // 查询
    collection.find(params).toArray((err, docs) => {
      // 关闭与数据库的连接 
      client.close();
      callback(err, docs)
    })
  });
}

exports.getOne = (collectionName, params, callback) => {
  MongoClient.connect(
    url, {
      useNewUrlParser: true
    },
    function (err, client) {
      // 拿到了数据操作的db对象
      const db = client.db(dbName);

      // 拿到集合
      const collection = db.collection(collectionName);

      // 先根据用户名查询
      collection.findOne(params, (err, docs) => {
        client.close();
        callback(err, docs)
      });
    }
  );
}
exports.insertOne = (collectionName, params, callback) => {
  MongoClient.connect(
    url, {
      useNewUrlParser: true
    },
    function (err, client) {
      // 拿到了数据操作的db对象
      const db = client.db(dbName);

      // 拿到集合
      const collection = db.collection(collectionName);

      collection.insertOne(params, (err, docs) => {
        client.close();
        callback(err, docs)
      });
    }
  );
}
exports.loginOne=(collectionName, params, callback) => {
  MongoClient.connect(
    url, {
      useNewUrlParser: true
    },
    function (err, client) {
      // 拿到了数据操作的db对象
      const db = client.db(dbName);

      // 拿到集合
      const collection = db.collection(collectionName);

      collection.findOne(params, (err, doc) => {
        client.close();
        callback(err, doc)
      });
    }
  );
}