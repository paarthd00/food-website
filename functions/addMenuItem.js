const co = require('co');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
var responseBody = []
let conn = null;

const uri = `${process.env.MONGODB_URI}`;

exports.handler = function (event, context, callback) {

    context.callbackWaitsForEmptyEventLoop = false;
    run(JSON.parse(event.body)).
        then(res => {
            callback(null, res);
        }).
        catch(error => callback(error));
};
// http://localhost:8888/.netlify/functions/AddMenuItem?{"name":"paellas","description":"chicken liver, butter","price":{"$numberInt":"12"}}
function run(data) {

    return co(function* () {
        
        if (conn == null) {
            conn = yield mongoose.createConnection(uri, { useNewUrlParser: true });
            conn.collection('menuitems').insertOne(data).then((res) => res.ops.map((el) => console.log(el))).catch(err => console.error(err))
        }
        return { statusCode: 200 }

    });
}