//In electron here you should write code that you want to be runned from your app
const Client = require('./client');
let client;

//Defining function for logging succesfull connection
function onConnect(){
    console.log("Connected");
    //Sending success message to server
    client.send('I am client and I successfully connected');
}    

//Defining function to handle new data from server
function onData(data){
    console.log(data);
    document.getElementById('logs').value += data + '\n'
}

//Defining function to detect disconnect
function onEnd(){
    console.log("Connection closed");
    document.getElementById('logs').value += 'Connection closed' + '\n'
}

function connect(){
    console.log('Trying to connect')
    const PORT = parseInt(document.getElementById('port').value, 10);
    const HOST = document.getElementById('host').value;
    //Specifing port, host and default data type ASCII
    console.log(PORT, HOST)
    client = new Client(PORT, HOST, "ASCII", onConnect, onData, onEnd);

    client.connect();
}

function disconnect(){
    client.close();
}
