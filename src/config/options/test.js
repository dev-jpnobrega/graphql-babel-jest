module.exports = {
    port: 8082,
    db: {
        client: 'pg',
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
        }
    },
    productApi: {
        uri: 'https://us-west-2.api.scaphold.io/graphql/product-api'
        // uri: 'https://us-west-2.api.scaphold.io/graphql/product-api'
    }
}
