export interface Admin {
    id: number;
    username: string;
    email: string;
    avatar_id: number | null;
    avatar_path: string | null;
}

export interface AdminSession {
    token: string;
    user: Admin;
    expiresAt: number;
}