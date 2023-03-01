import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
    const win = new BrowserWindow({
        width:600,
        height:900,
        autoHideMenuBar:true,
        webPreferences: {
            nodeIntegration:true
        }
    });

    win.loadFile('/home/nuke/Desktop/git/Neutron/public/index.html')
}

app.whenReady()
    .then(() => {
        createWindow();

        app.on('activate', () =>{
            createWindow();
        })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})