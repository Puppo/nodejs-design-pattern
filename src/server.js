import jsonOverTcp from 'json-over-tcp-2'


const PORT = 5000
const server = jsonOverTcp.createServer({ port: PORT })
server.on('connection', socket => {
    socket.on('data', data => {
        console.log("Client data", data)
    })
})
server.listen(PORT, () => console.log('Server started'))