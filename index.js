const io = require('socket.io')(3000, {
    cors: {
        origin: "*"
    }
})

const users = {}

io.on('connection', socket => {
    socket.on('new-user', name => {
        console.log(name);
    })
})