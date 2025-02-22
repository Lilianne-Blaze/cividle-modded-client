"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("IPCBridge", {
    rpcCall: function (method, args) { return electron_1.ipcRenderer.invoke("__RPCCall", method, args); },
    onClose: function (callback) { return electron_1.ipcRenderer.on("close", function () { return callback(); }); },
});
