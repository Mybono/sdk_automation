import { UserRoleType, Credentials } from '../interfaces';
export declare const env: {
    readonly STANDART_USER: string;
    readonly LOCKED_OUT_USER: string;
    readonly PROBLEM_USER: string;
    readonly GLITCH_USER: string;
    readonly ERROR_USER: string;
    readonly VISUAL_USER: string;
    readonly PASSWORD: string;
    readonly MONGO_CONNECTION_STRING: string;
    readonly TIMEOUT: 5000;
    readonly TEN_SECONDS: 10000;
};
export declare const CREDENTIALS_MAP: Record<UserRoleType, Credentials>;
