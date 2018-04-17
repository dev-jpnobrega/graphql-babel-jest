import app from './app'
import { info } from './helpers/logger'

app.start().then(() => {
    const server = app.listen(app.port, () => {
        info(`Server starting port ${app.port}`)
    })

    server.setTimeout(10 * 60 * 1000)
})

export default app