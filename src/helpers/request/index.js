
import request from 'request'

export default function (options = {}) {
    return new Promise((resolve, reject) => {      
        request(options, (err, response, body) => {
            if (err) {
                return reject(err)
            }

            resolve({response, body})
        })
    })
}