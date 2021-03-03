/**
 * function/update-menu-item.js
 * update a menu item by assigning new data based on the id passed 
 */

const { ObjectID } = require('bson');
const crypto = require('crypto');
const assert = require('assert');
const co = require('co');
const mongoose = require('mongoose');
const { Schema } = mongoose
let conn = null;

const uri = process.env.MONGODB_URI;
let usercreds;
exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    usercreds = JSON.parse(event.body)
    login().
        then(res => {
            callback(null, res);
        }).
        catch(error => callback(error));
};

const login = () => {
    return co(function* () {

        try {
            if (conn == null) {
                conn = yield mongoose.createConnection(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                });
                conn.model('users', new Schema({
                    _id: ObjectID,
                    username: String,
                    password: String,
                }));
            }
            const secret = usercreds.userpassword;
            const hash = crypto.createHmac('sha256', secret)
                .digest('hex');
            const M = conn.model('users');
            const doc = yield M.findOne({ username: usercreds.username })
            let myarr = [] = Object.values(doc);
            const userarr = (Object.values(myarr[myarr.length - 2]))
            if (userarr[2] == hash)
                console.log('matched')
            else
                console.log('not matched')
            const response = {
                statusCode: 200,
                body: JSON.stringify({ data: doc })
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

