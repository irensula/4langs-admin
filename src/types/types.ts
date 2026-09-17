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

export type Section =
    | 'languages'
    | 'exercises'
    | 'categories'
    | 'content'
    | 'words'
    | 'sentences'
    | 'texts';

export interface Language {
    language_id: number;
    code: string;
    name: string;
}
