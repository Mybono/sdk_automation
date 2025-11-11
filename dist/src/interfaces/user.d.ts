import { ObjectId } from 'mongodb';
export declare const UserRole: {
    readonly standard_user: "standard_user";
    readonly locked_out_user: "locked_out_user";
    readonly problem_user: "problem_user";
    readonly performance_glitch_user: "performance_glitch_user";
    readonly error_user: "error_user";
    readonly visual_user: "visual_user";
};
export type UserRoleType = typeof UserRole[keyof typeof UserRole];
export interface User {
    _id: ObjectId;
    username: string;
    role: UserRoleType;
    firstName: string;
    lastName: string;
    postalCode: string;
    email: string;
    phone: string;
    isDeleted: boolean;
    isVisible: boolean;
}
