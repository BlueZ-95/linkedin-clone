import React from 'react';
import { Avatar } from '@material-ui/core';
import BookmarkSharpIcon from '@material-ui/icons/BookmarkSharp';
import '../styles/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className="sidebar__coverPhoto" src="https://media-exp3.licdn.com/dms/image/C4D16AQE1AJrtk4-MRQ/profile-displaybackgroundimage-shrink_350_1400/0/1623083809608?e=1630540800&v=beta&t=X4tBbzMdeQouKtJLgV1vfOxMZg_UhJCTtO8Cc853PPs" alt="Cover_Picture" />
                <Avatar className="sidebar__avatar" src="https://avatars.githubusercontent.com/u/62077144?s=400&u=d53b191db878c5f288358fbaffe0a6733ec06c1e&v=4" />
                <h2>Saad Patel</h2>
                <h4>patelsaad39@gmail.com</h4>
            </div>

            <hr />

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

            <hr />
            
            <div className="sidebar__myItems">
                <BookmarkSharpIcon />
                <p>My Items</p>
            </div>
        </div>
    )
}

export default Sidebar
