import React from 'react';
import "./notification.css"

export const Notification = ({notificationStatus}) => {

    return (
        <div className="notificationBar">
            {notificationStatus}
        </div>
    )
}
