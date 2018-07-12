const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname);

let win = null;

app.on('ready', function () {

    // Initialize window to a specific dimensions;
    win = new BrowserWindow({ width: 1280, height: 720});

    //Specify Entry point
    if(process.env.PACKAGE === 'true'){
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/ang-music-player/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    } else {
        win.loadURL(process.env.HOST);
        win.webContents.openDevTools();
    }

    // Specify entry point
    // win.loadURL('http://localhost:4000');

    // Show dev tools
    // TODO Remove this line before distributing
    win.webContents.openDevTools()

    // Remove window once app is closed
    win.on('closed', function() {
        win = null;
    });
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});

app.on('window-all-closed', function () {
   if (process.platform != 'darwin') {
       app.quit();
   }
});