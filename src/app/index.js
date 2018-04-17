import express     from 'express'
import bodyParser  from 'body-parser'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import cors    from 'cors'
import config from '../config'
import schemaBuild from '../schema'

const port = config.port || 8082
const app = express()

app.port = port
  
app.start = () => {
    return new Promise(async ( resolve ) => {
        const superSchema = await schemaBuild.run()

        app.use('/graphql', 
            cors(),
            bodyParser.json({ limit: '50mb' }), 
            graphqlExpress({ schema: superSchema })
        )

        app.get('/graphiql', 
            graphiqlExpress({ endpointURL: '/graphql' })
        ) 

        return resolve()
    })
}

export default app

