# TCP JS Client Class documentation
This class is designed to connect and interact with existing TCP server. The sample code written in this project will help you to dive deeper into understanding all this stuff :)
## client.js module
It exports default class **Client** so you can easily access it.
## Constructer Arguments
It recive several arguments.

        const client = new Client(arguments);

### Arguments
1. **Port** (number)
- This is to specify port of your running TCP server.
2. **Host** (string)
- This is to specify IP of your running TCP server.
3. **Data type** (string, optional)
- This is to define data type that you recive from server.
- Values
    - "ASCII" (default)
    - "hex"
4. **onConnect** (function, optional)
- Through this argument you can set function that will be called after establishing successfull connection.
5. **onData** (function, optional)
- This function will be called when data is recived from server. It recives **one argument** which contains the data.
6. **onEnd** (function, optional)
- This function will be called when connection with server is closed

        If you send wrong type of argument you will recive log in your console with error.
## Methods
1. **connect()**
- When you call this method it will try to connect to server.
2. **send(data)**
- This will send data argument to server.
3. **close()**
- Call of this method will destroy connection with server.

### Simple client example

        //In electron here you should write code that you want to be runned from your app
        const Client = require('./client');

        //Defining function for logging succesfull connection
        function onConnect(){
            console.log("Connected");
            //Sending success message to server
            client.send('I am client and I successfully connected');
        }    

        //Defining function to handle new data from server
        function onData(data){
            console.log(data);
        }

        //Defining function to detect disconnect
        function onEnd(){
            console.log("Connection closed")
        }

        //Specifing port, host and default data type ASCII
        const client = new Client(6559, "10.200.140.30", "ASCII", onConnect, onData, onEnd);

        client.connect();

        //Disconnecting from server after 5000 milliseconds.
        setTimeout(() => client.close(), 5000)






