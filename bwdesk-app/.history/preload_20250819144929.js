const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openDashboard: () => ipcRenderer.send("download-and-open"),
});
