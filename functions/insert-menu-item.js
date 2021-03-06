/**
 * functions/insert-menu-item.js
 * insert new menu item to the mongoDB
 */


const co = require('co');
const mongoose = require('mongoose');
const { Schema } = mongoose
let conn = null;
const uri = process.env.MONGODB_URI;
let tempMenuItem;
exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    tempMenuItem = JSON.parse(event.body)
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
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            conn.model('menuitems', new Schema({
                "name": String,
                "description": String,
                "price": Number
            }));
        }
        //Inserting document in collection
        conn.collection('menuitems').insertOne(tempMenuItem)
        const M = conn.model('menuitems')

        //doc is assigned the value of menuitems and is sent as reponse
        const doc = yield M.find();
        const response = {
            statusCode: 200,
            body: JSON.stringify(doc)
        };

        return response;
    });
}