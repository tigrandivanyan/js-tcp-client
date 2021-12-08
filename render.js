const Client = require('./client');

function doThisOnConnection() {
    console.log('Connected');
    client.send('I am client and I connected successfully')
}

function dataRecived(data) {
    console.log(data)
}


const client = new Client(6559, "10.200.140.30");


client.onConnect = doThisOnConnection;
client.onData = dataRecived;

client.connect();


// setTimeout(() => {
//     client.close();
// }, 5000)