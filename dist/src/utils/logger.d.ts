declare class Logger {
    private logs;
    private levelOrder;
    private currentLevel;
    private getTimestamp;
    private shouldLog;
    private colorize;
    private logMessage;
    log(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string, err?: unknown): void;
    debug(msg: string): void;
    getLogs(): string[];
    clear(): void;
}
export declare const logger: Logger;
export {};
