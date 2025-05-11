const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  trocarTela: (caminho) => ipcRenderer.send("trocar-tela", caminho),
  voltarTela: (caminho) => ipcRenderer.send("voltar-para-tela", caminho),
});
