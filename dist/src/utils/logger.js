"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
class Logger {
    constructor() {
        this.logs = [];
        this.levelOrder = {
            error: 0,
            warn: 1,
            info: 2,
            log: 2,
            debug: 3,
        };
        this.currentLevel = "info";
    }
    getTimestamp() {
        return new Date().toISOString();
    }
    shouldLog(level) {
        return this.levelOrder[level] <= this.levelOrder[this.currentLevel];
    }
    colorize(level, message) {
        const colors = {
            error: "\x1b[31m", // red
            warn: "\x1b[33m", // yellow
            info: "\x1b[32m", // green
            log: "\x1b[37m", // white
            debug: "\x1b[36m", // cyan
        };
        const reset = "\x1b[0m";
        return `${colors[level]}${message}${reset}`;
    }
    logMessage(level, message, error) {
        if (!this.shouldLog(level))
            return;
        const timestamp = this.getTimestamp();
        const fullMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}` +
            (error instanceof Error ? `\n${error.stack}` : "");
        this.logs.push(fullMessage);
        console.log(this.colorize(level, fullMessage));
    }
    log(msg) {
        this.logMessage("log", msg);
    }
    info(msg) {
        this.logMessage("info", msg);
    }
    warn(msg) {
        this.logMessage("warn", msg);
    }
    error(msg, err) {
        this.logMessage("error", msg, err);
    }
    debug(msg) {
        this.logMessage("debug", msg);
    }
    getLogs() {
        return this.logs;
    }
    clear() {
        this.logs = [];
    }
}
exports.logger = new Logger();
