/**
 * function/update-menu-item.js
 * update a menu item by assigning new data based on the id passed 
 */

const { ObjectID } = require('bson');
const co = require('co');
// const { map } = require('jquery');
const mongoose = require('mongoose');
const { Schema } = mongoose
let conn = null;
let tempMenuBody;
// let menuItemId;
const uri = process.env.MONGODB_URI;

exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    tempMenuBody = JSON.parse(event.body)
    // menuItemId = JSON.parse(event.body._id)
    run().
        then(res => {
            callback(null, res);
        }).
        catch(error => callback(error));
};

const run = () => {
    return co(function* () {

        try {
            if (conn == null) {
                conn = yield mongoose.createConnection(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                });
                conn.model('menuitems', new Schema({
                    _id: ObjectID,
                    name: String,
                    description: String,
                    price: Number,
                }));
            }
            const M = conn.model('menuitems');
            const doc = yield M.findOne({ _id: tempMenuBody._id })
            Object.assign(doc, tempMenuBody.data)
            yield doc.save()
            console.log(doc)
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