//In electron here you should write code that you want to be runned from your app
const Client = require('./client');
const terminal = document.getElementById('terminal');
let client = {};

//Defining function for logging succesfull connection
function onConnect(){
    console.log("Connected");
    //Sending success message to server
    client.send('I am client and I successfully connected');
    terminal.value += 'Connected\n'
}    

//Defining function to handle new data from server
function onData(data){
    console.log(data);
    terminal.value += data + '\n'

}

//Defining function to detect disconnect
function onEnd(){
    console.log("Connection closed");
    terminal.value += 'Connection closed\n'

}

function connect(){
    const port = document.getElementById('port').value;
    const host = document.getElementById('host').value;
    console.log(port, host)
    if(port && host){
        if(!isNaN(parseInt(port, 10)) && parseInt(port, 10) < 10000 && parseInt(port, 10) > 0){
            const ipArray = host.split('.');
            let validNumbers = true;
            ipArray.forEach(num => {
                if(isNaN(parseInt(num, 10))){
                    validNumbers = false;
                }
            })
            if(ipArray.length === 4 && validNumbers){
                client = new Client(parseInt(port, 10), host, "ASCII", onConnect, onData, onEnd);
                client.connect();
            }else{
                alert('Wrong format for host')
            }
        }else{
            alert('Port should be a number no more than 4 digits')
        }
    }else{
        alert('No port or host specified')
    }
}

function disconnect(){
    client.disconnect();
}