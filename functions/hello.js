exports.handler = async function(event,context){
    const subject = event.queryStringParameters.name
    return {
        statusCode: 200,
        body: `Hello ${subject} `,
    }
}