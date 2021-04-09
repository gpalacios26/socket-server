class Sockets {

    constructor(io) {
        this.io = io;
        this.socketsEvents();
    }

    socketsEvents() {
        this.io.on('connection', (socket) => {

            // Escuchar eventos
            socket.on('mensaje-to-server', (data) => {
                this.io.emit('mensaje-from-server', data);
            });
        });
    }
}

module.exports = Sockets;