const { app, BrowserWindow } = require("electron");
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

  if (process.env.NODE_ENV === "development") {
    // In dev, run Next.js server
    mainWindow.loadURL("http://localhost:3000");
  } else {
    // In production, load static files from Next.js export
    mainWindow.loadFile(path.join(__dirname, "out", "index.html"));
  }
}

app.whenReady().then(createWindow);
