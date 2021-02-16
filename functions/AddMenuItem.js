const co = require('co');
const mongoose = require('mongoose');

let conn = null;

const uri = `${process.env.MONGODB_URI}`;

exports.handler = function (event, context, callback) {

    context.callbackWaitsForEmptyEventLoop = false;

    run().
        then(res => {
            callback(null, res);
        }).
        catch(error => callback(error));
};

function run() {
    return co(function* () {

        if (conn == null) {
            conn = yield mongoose.createConnection(uri, {
                bufferCommands: false,
                bufferMaxEntries: 0
            });
            conn.model('menuitems', new mongoose.Schema({
                _id: String,
                name: String,
                description: String,
                price: Number,
            }));
        }

        const M = conn.model('menuitems');

        const doc = yield M.find();
        const response = {
            statusCode: 200,
            body: JSON.stringify(doc)
        };
        return response;
    });
}