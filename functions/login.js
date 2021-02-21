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
            const M = conn.model('users');
            const doc = yield M.findOne({ username: usercreds.username })

            const key = 'keykeykeykeykeykeykeykey';
            const nonce = crypto.randomBytes(12);

            const aad = Buffer.from('0123456789', 'hex');

            const cipher = crypto.createCipheriv('aes-192-ccm', key, nonce, {
                authTagLength: 16
            });
            const plaintext = doc.username;
            cipher.setAAD(aad, {
                plaintextLength: Buffer.byteLength(plaintext)
            });
            const ciphertext = cipher.update(plaintext, 'utf8');
            cipher.final();
            const tag = cipher.getAuthTag();

            Object.assign(doc, { ciphertext })
            yield doc.save()
            const decipher = crypto.createDecipheriv('aes-192-ccm', key, nonce, {
                authTagLength: 16
            });
            decipher.setAuthTag(tag);
            decipher.setAAD(aad, {
                plaintextLength: ciphertext.length
            });
            const receivedPlaintext = decipher.update(ciphertext, null, 'utf8');

            try {
                decipher.final();
            } catch (err) {
                console.error('Authentication failed!');
                return;
            }

            console.log(doc)
            console.log(receivedPlaintext);
            const response = {
                statusCode: 200
                // body: JSON.stringify({ hashy: key })
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


// Beatrice_Rodriguez
// 58cf636420f016383639fdf13b6f465ad74c63800df9b0e642816a19a0ce1d5d
