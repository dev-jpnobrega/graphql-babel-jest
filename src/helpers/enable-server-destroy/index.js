export default function(server) {
    var connections = {}
    
    if (server) {
        server.on('connection', conn => {
            //console.warn('conn', conn);
            var key = conn.remoteAddress + ':' + conn.remotePort
            connections[key] = conn
            conn.on('close', function() {
                delete connections[key]
            })
        })
    
        server.destroy = cb => {
            server.close(cb)
            for (var key in connections)
                connections[key].destroy()
        }  
    }
}