import { 
    graphqlLambda 
} from 'apollo-server-lambda'
import schemaBuild from './schema'

const handler = graphqlLambda(async (event, context) => {
    console.warn('context', context)
    context.callbackWaitsForEmptyEventLoop = false

    const schema = await schemaBuild.run()
    
    console.warn('event', event)

    const headers = event.headers
    const functionName = context.functionName || 'NOT FOUND FUNCTION NAME'

    console.warn('schema', schema)    
    
    return {
        schema: schema,
        context: {
            headers: headers,
            functionName: functionName,
            event: event,
            context: context
        }
    }
})

export default handler

// export const graphiqlHandler = graphiqlLambda({
//     endpointURL: '/graphql',
// })