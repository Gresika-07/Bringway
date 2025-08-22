// For secure communication between frontend and backend
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // add APIs if needed later
});
