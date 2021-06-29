import React from 'react';
import { Avatar } from '@material-ui/core';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="siderbar__top">
                <img src="" alt="" />
                <Avatar />
                <h2>Saad Patel</h2>
                <h4>patelsaad39@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar_stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">4323</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">1543</p>
                </div>
            </div>

            <div className="sidebar__recent">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
