const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    // In development, load your Next.js dev server
    mainWindow.loadURL("http://localhost:3000");
  } else {
    // In production, load the built Next.js app
    mainWindow.loadFile(path.join(__dirname, "out/index.html"));
  }
}

app.whenReady().then(createWindow);

ipcMain.on("download-and-open", () => {
  if (isDev) {
    mainWindow.loadURL("http://localhost:3000/dashboard");
  } else {
    mainWindow.loadFile(path.join(__dirname, "out/dashboard/index.html"));
  }
});
