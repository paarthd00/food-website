/**
 * functions/delete-menu-item.js
 * deletes the specified menu item 
 */

const co = require('co');
const mongoose = require('mongoose');
let conn = null;
let tempMenuItem;
const uri = process.env.MONGODB_URI;

exports.handler = function (event, context, callback) {

    context.callbackWaitsForEmptyEventLoop = false;
    tempMenuItem = JSON.parse(event.body)
    run().
        then(res => {
            callback(null, res);
        }).
        catch(error => callback(error));
};

function run() {
    return co(function* () {
        try {

            if (conn == null) {
                conn = yield mongoose.createConnection(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
                conn.model('menuitems', new mongoose.Schema({
                    name: String,
                    description: String,
                    price: Number,
                }));
            }

            const M = conn.model('menuitems');
            console.log(tempMenuItem)
            conn.collection('menuitems').deleteOne({ name: tempMenuItem.name })
            const doc = yield M.find();
            const response = {
                statusCode: 200,
                body: JSON.stringify(doc)
            };

            return response;

        }
        catch (e) {
            const response = {
                statusCode: 500,
                body: JSON.stringify(e)
            };
            return response;
        }
    });
}