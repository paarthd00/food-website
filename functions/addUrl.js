const co = require('co');
const mongoose = require('mongoose');

let conn = null;

const uri = 'mongodb+srv://p:0JeuHyRfRL79VGgv@cluster0.u1yl9.mongodb.net/urban-memory?retryWrites=true&w=majority';

exports.handler = function(event, context, callback) {

  context.callbackWaitsForEmptyEventLoop = false;

  run().
    then(res => {
      callback(null, res);
    }).
    catch(error => callback(error));
};

function run() {
  return co(function*() {

    if (conn == null) {
      conn = yield mongoose.createConnection(uri, {
        bufferCommands: false,
        bufferMaxEntries: 0
      });
      conn.model('videos', new mongoose.Schema({
        name: String,
        url: String,
        folder: String,
        description: String,
      }));
    }

    const M = conn.model('videos');

    const doc = yield M.find();
    const response = {
      statusCode: 200,
      body: JSON.stringify(doc)
    };
    return response;
  });
}