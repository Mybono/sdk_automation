"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREDENTIALS_MAP = exports.env = void 0;
function requireEnv(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`[requireEnv]: Missing required environment variable: ${name}`);
    }
    return value;
}
exports.env = {
    STANDART_USER: requireEnv('STANDART_USER'),
    LOCKED_OUT_USER: requireEnv('LOCKED_OUT_USER'),
    PROBLEM_USER: requireEnv('PROBLEM_USER'),
    GLITCH_USER: requireEnv('GLITCH_USER'),
    ERROR_USER: requireEnv('ERROR_USER'),
    VISUAL_USER: requireEnv('VISUAL_USER'),
    PASSWORD: requireEnv('PASSWORD'),
    MONGO_CONNECTION_STRING: requireEnv('MONGO_CONNECTION_STRING'),
    TIMEOUT: 5000,
    TEN_SECONDS: 10000,
};
exports.CREDENTIALS_MAP = {
    standard_user: { username: exports.env.STANDART_USER, password: exports.env.PASSWORD },
    locked_out_user: { username: exports.env.LOCKED_OUT_USER, password: exports.env.PASSWORD },
    problem_user: { username: exports.env.PROBLEM_USER, password: exports.env.PASSWORD },
    performance_glitch_user: { username: exports.env.GLITCH_USER, password: exports.env.PASSWORD },
    error_user: { username: exports.env.ERROR_USER, password: exports.env.PASSWORD },
    visual_user: { username: exports.env.VISUAL_USER, password: exports.env.PASSWORD },
};
