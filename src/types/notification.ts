export interface Notification {
    notification_id: number;
    user_id: number;
    type: string;
    title: string;
    body: string;
    data: {
        version: string;
    }
    created_at: string;
}