module.exports = {
    port: 8082,
    db: {
        client: 'pg',
        seeds: {
            directory: './seeds'
        },
        connection: {
            database: '',
            host: '',
            user: '',
            password: '',
            charset: 'utf8'
        },
        pool: {
            min: 1,
            max: 1
        },
        debug: true
    },
    productApi: {
        //uri: 'http://localhost:3030/api/v1/graphql'
        uri: ''
    }
}

//afterCreate: function (conn, cb) {
//  conn.query("SET SESSION SCHEMA 'my-schema-name-here';", function (err) {
//    cb(err, conn);
//  });
//}
