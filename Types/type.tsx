export type UserData = {
    username: string,
    password: string,
}

export enum ActionType {
    Success = 'success',
    Error = 'error'
}


export type UserInformation = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    emailVerified: boolean;
    userProfileMetadata: Record<string, unknown>;
};

export type DashboardProps = {
    userInfo: UserInformation | null;
}
