const {app, BrowserWindow} = require('electron');


app.whenReady().then(() => {

    const myWindow = new BrowserWindow({
        width:800,
        height: 600,
        webPreferences: {
            nodeIntegration:true,
            contextIsolation:false
        }
    });

    // myWindow.setMenu(null);
    myWindow.loadFile('index.html').then(() => {
        
    })

})
