const net = require('net');
const socket = new net.Socket();

class Client {
    constructor(port, host, type, onConnect, onData, onEnd) {
        if(typeof port === "number"){
            this.port = port;
        }else{
            console.error("Port argument should be a number")
        }
        if(typeof host === "string"){
            this.host = host;
        }else{
            console.error("Host argument should be a string")
        }
        if(type === "ASCII" || type === "hex" || type === undefined){
            this.type = type;
        }else{
            console.error("Type argument should be undefined or string with values ASCII or hex")
        }

        if(typeof onConnect === "function"){
            this.onConnect = onConnect;
        }else if(onConnect !== undefined){
            console.error("onConnect argument should be a function")
        }
        if(typeof onEnd === "function"){
            this.onEnd = onEnd;
        }else if(onEnd !== undefined){
            console.error("onEnd argument should be a function")
        }
        if(typeof onData === "function"){
            this.onData = onData;
        }else if(onData !== undefined){
            console.error("onData argument should be a function")
        }
    }

    onData = () => {};
    onConnect = () => {};
    onEnd = () => {};
    
    connect() {
        if(this.port && this.host){
            socket.connect(this.port, this.host, function () {
                this.connected = true;
                this.onConnect();
    
                socket.on('data', function (data) {
                    this.onData(data.toString(this.type));
                }.bind(this))
    
                socket.on('end', function (){
                    this.onEnd();
                    this.connected = false;
                }.bind(this))

                socket.on('close', function (){
                    this.onEnd();
                    this.connected = false;
                }.bind(this))            

            }.bind(this))
        }else{
            console.error("Cannot connect to server as port and/or host are not specified")
        }
    }

    send(data) {
        if(this.connected){
            socket.write(data)
        }else{
            console.error("You cannot send data while you are not connected to server")
        }
    }

    close() {
        if(this.connected){
            socket.destroy()
        }else{
            console.error("You cannot disconnect as you are not connected to server")
        }
    }
}

module.exports = Client;