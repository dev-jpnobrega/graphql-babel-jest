import { mergeSchemas } from 'graphql-tools'

import schema  from './default'

const schemaBuild = {
    run: async () => {        
        //let schemaPrd = await productSchema.run()

        return schema            
    }
}

export default schemaBuild