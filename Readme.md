# TCP JS Client Class documentation
This class is designed to connect and interact with existing TCP server. The sample code written in this project will help you to dive deeper into understanding all this stuff :)
## client.js module
It exports default class **Client** so you can easily access it.
## Constructer Arguments
It recive several arguments.

        const client = new Class Client(arguments);

### Arguments
1. **Port** (number)
- This is to specify port of your running TCP server.
2. **Host** (string)
- This is to specify IP of your running TCP server.
3. **Data type** (optional, string)
- This is to define data type that you recive from server.
- Values
    - "ASCII" (default)
    - "hex"
## Methods
1. **connect()**
- When you call this method it will try to connect to server.
2. **send(data)**
- This will send data argument to server.
3. **setOnData(callback)**
- This method will set a function recived from arguments to listen to server. When server will send data, this functino will be called.
4. **setOnConnect(callback)**
- This will set a function recived from arguments to listen to server connection. It will be called once when connection to server will be successfully established.
5. **close()**
- Call of this method will destroy connection with server.

### Simple client example

        //Defining function for logging succesfull connection
        function onConnect(){
            console.log("Connected);
        }    

        //Defining function to handle new data from server
        function onData(data){
            conosle.log(data);
        }

        const client = new Client(8080, "10.200.140.140");
        //Specified port, host and default data type ASCII

        client.setOnConnect(onConnect);
        client.setOnData(onData);

        client.connect();

        //Sending success message to server
        client.send('I am client and I successfully connected');
        
        //Disconnecting from server after 5000 milliseconds.
        setTimout(() => client.close(), 5000)






