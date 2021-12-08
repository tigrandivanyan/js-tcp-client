//In electron here you should write code that you want to be runned from your app
const Client = require('./client');

//Defining function for logging succesfull connection
function onConnect(){
    console.log("Connected");
}    

//Defining function to handle new data from server
function onData(data){
    console.log(data);
}

//Specifing port, host and default data type ASCII
const client = new Client(6559, "10.200.140.30");

client.setOnConnect(onConnect);
client.setOnData(onData);

client.connect();

//Sending success message to server
client.send('I am client and I successfully connected');

//Disconnecting from server after 5000 milliseconds.
setTimeout(() => client.close(), 5000)