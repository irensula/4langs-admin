import { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import type { Notification } from '../../types/notification';
import './Notifications.css';

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
        <div className='content__s'>
            <h2 className='title'>Notifications</h2>
            <div className='content-section'>
                <h3 className='category__table__title'>Notifications</h3>
                <table className="notifications__table content-table-wrapper">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Type</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Version</th>
                            <th>Created at</th>
                        </tr>
                    </thead>

                    <tbody>
                        {notifications.map(notification => (
                            <tr key={notification.notification_id}>
                                <td>{notification.user_id}</td>
                                <td>{notification.type}</td>
                                <td>{notification.title}</td>
                                <td>{notification.body}</td>
                                <td>{notification.data.version}</td>
                                <td>{notification.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Notifications;