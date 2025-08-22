// electron/main.js
const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'My Dashboard',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (!app.isPackaged) {
    // Dev mode: load Next.js dev server
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    // Prod mode: load static export
    const indexPath = path.join(__dirname, '../out/index.html');
    win.loadFile(indexPath);
  }

  // Open external links in system browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  win.on('closed', () => (win = null));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
