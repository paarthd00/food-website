const co = require('co');
const mongoose = require('mongoose');
const menuSchema = require('../models/menuItemSchema')
let conn = null;

const uri = process.env.MONGODB_URI;

exports.handler = async (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    run().
        then(res => {
            callback(null, res);
        }).
        catch(error => callback(error));
};

const run = () => {
    return co(function* () {

        if (conn == null) {
            conn = yield mongoose.createConnection(uri, {
                bufferCommands: false,
                bufferMaxEntries: 0
            });
            conn.model('menuitems', new menuSchema());
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