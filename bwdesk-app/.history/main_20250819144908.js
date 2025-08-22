const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // In dev → load Next.js server
  mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);

ipcMain.on("download-and-open", () => {
  mainWindow.loadURL("http://localhost:3000/dashboard");
});
