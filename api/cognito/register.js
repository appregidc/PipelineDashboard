'use strict';

module.exports.preSignUp = (event, context, callback) => {

    callback(null, {
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        statusCode: 200,
        body: JSON.stringify({ register: 'test' })
    });
};
