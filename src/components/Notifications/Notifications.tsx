import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Notification } from '../../types/notification';

const Notifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        adminService.getNotifications()
            .then(data => {
                setNotifications(data);
            })
            .catch(error => {
                console.error('Error fetching notifications: ', error);
            });
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.notification_id}>
                        <p>{notification.user_id}</p>
                        <p>{notification.type}</p>
                        <p>{notification.title}</p>
                        <p>{notification.body}</p>
                        <p>{notification.data.version}</p>
                        <p>{notification.created_at}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Notifications;