const net = require('net');
const socket = new net.Socket();

class Client {
    constructor(port, host, type) {
        this.port = port;
        this.host = host;
        this.type = type;
    }

    onData = () => {};
    onConnect = () => {};
    
    setOnData = (callback) => {
        this.onData = callback;
    };

    setOnConnect = (callback) => { 
        this.onConnect = callback;
    };  

    connect() {
        socket.connect(this.port, this.host, function () {

            this.onConnect();

            socket.on('data', function (data) {
                this.onData(data.toString(this.type));
            }.bind(this))
        }.bind(this))
    }

    send(data) {
        socket.write(data)
    }

    close() {
        socket.destroy()
    }
}

module.exports = Client;