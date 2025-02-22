"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIN_HEIGHT =
  exports.MIN_WIDTH =
  exports.getLocalGameSavePath =
  exports.getGameSavePath =
    void 0;
var steamworks_js_1 = require("@fishpondstudio/steamworks.js");
var electron_1 = require("electron");
var node_path_1 = __importDefault(require("node:path"));
var IPCService_1 = require("./IPCService");
electron_1.app.commandLine.appendSwitch("enable-logging", "file");
electron_1.app.commandLine.appendSwitch(
  "log-file",
  node_path_1.default.join(getLocalGameSavePath(), "CivIdle.log")
);
electron_1.app.commandLine.appendSwitch(
  "enable-experimental-web-platform-features"
);
function getGameSavePath() {
  return node_path_1.default.join(
    electron_1.app.getPath("appData"),
    "CivIdleSaves"
  );
}
exports.getGameSavePath = getGameSavePath;
function getLocalGameSavePath() {
  return node_path_1.default.join(
    electron_1.app.getPath("appData"),
    "CivIdleLocal"
  );
}
exports.getLocalGameSavePath = getLocalGameSavePath;
exports.MIN_WIDTH = 1136;
exports.MIN_HEIGHT = 640;
var createWindow = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var steam, mainWindow_1, error_1, service_1, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 5, , 6]);
          steam = (0, steamworks_js_1.init)();
          mainWindow_1 = new electron_1.BrowserWindow({
            webPreferences: {
              preload: node_path_1.default.join(__dirname, "preload.js"),
              devTools: !electron_1.app.isPackaged,
              backgroundThrottling: false,
            },
            minHeight: exports.MIN_HEIGHT,
            minWidth: exports.MIN_WIDTH,
            show: false,
            frame: false,
            roundedCorners: false,
            thickFrame: false,
            backgroundColor: "#000000",
          });
          _a.label = 1;
        case 1:
          _a.trys.push([1, 3, , 4]);
          return [
            4 /*yield*/,
            Promise.all([
              mainWindow_1.webContents.session.clearCache(),
              mainWindow_1.webContents.session.clearAuthCache(),
              mainWindow_1.webContents.session.clearCodeCaches({}),
            ]),
          ];
        case 2:
          _a.sent();
          return [3 /*break*/, 4];
        case 3:
          error_1 = _a.sent();
          console.error("Failed to clear cache:", error_1);
          return [3 /*break*/, 4];
        case 4:
          if (electron_1.app.isPackaged) {
            mainWindow_1.loadFile(
              node_path_1.default.join(__dirname, "..", "dist", "index.html")
            );
          } else {
            mainWindow_1.loadURL("http://localhost:3000");
            mainWindow_1.webContents.openDevTools();
          }
          mainWindow_1.removeMenu();
          mainWindow_1.maximize();
          mainWindow_1.show();
          if (steam.utils.isSteamRunningOnSteamDeck()) {
            mainWindow_1.setFullScreen(true);
          }
          mainWindow_1.on("close", function (e) {
            e.preventDefault();
            mainWindow_1.webContents.send("close");
          });
          service_1 = new IPCService_1.IPCService(steam, mainWindow_1);
          electron_1.ipcMain.handle("__RPCCall", function (e, method, args) {
            // @ts-expect-error
            return service_1[method].apply(service_1, args);
          });
          return [3 /*break*/, 6];
        case 5:
          error_2 = _a.sent();
          electron_1.dialog.showErrorBox(
            "Failed to Start Game",
            String(error_2)
          );
          quit();
          return [3 /*break*/, 6];
        case 6:
          return [2 /*return*/];
      }
    });
  });
};
electron_1.Menu.setApplicationMenu(null);
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
  quit();
});
function quit() {
  electron_1.app.quit();
}
