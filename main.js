const {app, BrowserWindow} = require('electron');

function createWindow(){
    const ventana = new BrowserWindow({
        width: 400,
        height: 300
    });
    ventana.loadFile('index.html')
}

function closeWindow(){
    ventana.close()
}

app.whenReady().then(createWindow)