module.exports = {
    port: 8082,
    db: {
        client: 'pg',
        seeds: {
            directory: './seeds'
        },
        connection: {
            database: process.env.DATABASE_NAME || 'plataformavendas',
            host: process.env.DATABASE_HOST || 'plataformavendas.cubskfxjipvx.sa-east-1.rds.amazonaws.com',
            user: process.env.DATABASE_USER || 'postgres',
            password: process.env.DATABASE_PASSWORD || 'postgres',
            charset: 'utf8'
        },
        pool: {
            min: process.env.DATABASE_POOL_MIN || 1,
            max: process.env.DATABASE_POOL_MAX || 1
        },
        debug: true
    },
    productApi: {
        //uri: 'http://localhost:3030/api/v1/graphql'
        uri: 'https://us-west-2.api.scaphold.io/graphql/product-api'
    }
}

//afterCreate: function (conn, cb) {
//  conn.query("SET SESSION SCHEMA 'my-schema-name-here';", function (err) {
//    cb(err, conn);
//  });
//}
