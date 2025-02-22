"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPCService = void 0;
var electron_1 = require("electron");
var fs_extra_1 = require("fs-extra");
var promises_1 = require("node:fs/promises");
var node_path_1 = __importDefault(require("node:path"));
var _1 = require(".");
var BACKUP_FREQ = 1000 * 60 * 10;
var IPCService = /** @class */ (function () {
    function IPCService(steam, mainWindow) {
        this.counter = 0;
        this.lastWriteAt = Date.now();
        this._client = steam;
        this._mainWindow = mainWindow;
    }
    IPCService.prototype.fileWrite = function (name, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fs_extra_1.outputFile)(node_path_1.default.join((0, _1.getGameSavePath)(), this.getSteamId(), name), content)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    IPCService.prototype.fileWriteBytes = function (name, content) {
        return __awaiter(this, void 0, void 0, function () {
            var buffer, tempFile, tempPath, backup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (content.byteLength <= 0)
                            return [2 /*return*/];
                        buffer = Buffer.from(content);
                        tempFile = "".concat(name, ".tmp");
                        tempPath = node_path_1.default.join((0, _1.getGameSavePath)(), this.getSteamId(), tempFile);
                        return [4 /*yield*/, (0, fs_extra_1.outputFile)(tempPath, buffer)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, promises_1.rename)(tempPath, node_path_1.default.join((0, _1.getGameSavePath)(), this.getSteamId(), name))];
                    case 2:
                        _a.sent();
                        if (!(Date.now() - this.lastWriteAt > BACKUP_FREQ)) return [3 /*break*/, 4];
                        backup = "".concat(name, "_").concat((++this.counter % 10) + 1);
                        return [4 /*yield*/, (0, fs_extra_1.outputFile)(node_path_1.default.join((0, _1.getLocalGameSavePath)(), this.getSteamId(), backup), buffer)];
                    case 3:
                        _a.sent();
                        this.lastWriteAt = Date.now();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    IPCService.prototype.fileRead = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fs_extra_1.readFile)(node_path_1.default.join((0, _1.getGameSavePath)(), this.getSteamId(), name))];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, content.toString("utf-8")];
                }
            });
        });
    };
    IPCService.prototype.fileReadBytes = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fs_extra_1.readFile)(node_path_1.default.join((0, _1.getGameSavePath)(), this.getSteamId(), name))];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, content.buffer];
                }
            });
        });
    };
    IPCService.prototype.fileDelete = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filePath = node_path_1.default.join((0, _1.getGameSavePath)(), this.getSteamId(), name);
                        return [4 /*yield*/, (0, fs_extra_1.exists)(filePath)];
                    case 1:
                        if (_a.sent()) {
                            (0, fs_extra_1.unlink)(filePath);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IPCService.prototype.openUrl = function (url) {
        electron_1.shell.openExternal(url);
    };
    IPCService.prototype.getSteamId = function () {
        return this._client.localplayer.getSteamId().steamId64.toString();
    };
    IPCService.prototype.getAuthSessionTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.auth.getAuthTicketForWebApi("")];
                    case 1: return [2 /*return*/, (_a.sent()).getBytes().toString("hex")];
                }
            });
        });
    };
    IPCService.prototype.getAppId = function () {
        return this._client.utils.getAppId();
    };
    IPCService.prototype.getBetaName = function () {
        var _a;
        return (_a = this._client.apps.currentBetaName()) !== null && _a !== void 0 ? _a : "";
    };
    IPCService.prototype.openMainSaveFolder = function () {
        electron_1.shell.openPath(node_path_1.default.join((0, _1.getGameSavePath)(), this.getSteamId()));
    };
    IPCService.prototype.openBackupSaveFolder = function () {
        electron_1.shell.openPath(node_path_1.default.join((0, _1.getLocalGameSavePath)(), this.getSteamId()));
    };
    IPCService.prototype.openLogFolder = function () {
        electron_1.shell.openPath((0, _1.getLocalGameSavePath)());
    };
    IPCService.prototype.unlockAchievement = function (key) {
        return this._client.achievement.activate(key);
    };
    IPCService.prototype.quit = function () {
        electron_1.app.exit(0);
    };
    IPCService.prototype.minimize = function () {
        this._mainWindow.minimize();
    };
    IPCService.prototype.maximize = function () {
        this._mainWindow.maximize();
    };
    IPCService.prototype.restore = function () {
        this._mainWindow.restore();
    };
    IPCService.prototype.isMaximized = function () {
        return this._mainWindow.isMaximized();
    };
    IPCService.prototype.setSize = function (width, height) {
        this._mainWindow.setMinimumSize(width, height);
        this._mainWindow.setSize(width, height);
    };
    IPCService.prototype.enterFloatingMode = function () {
        this._mainWindow.setResizable(false);
        this._mainWindow.setAlwaysOnTop(true);
    };
    IPCService.prototype.exitFloatingMode = function () {
        this._mainWindow.setResizable(true);
        this._mainWindow.setAlwaysOnTop(false);
        this._mainWindow.setMinimumSize(_1.MIN_WIDTH, _1.MIN_HEIGHT);
    };
    return IPCService;
}());
exports.IPCService = IPCService;
