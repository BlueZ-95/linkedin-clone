import React from 'react';
import { Avatar } from '@material-ui/core';
import BookmarkSharpIcon from '@material-ui/icons/BookmarkSharp';
import '../styles/Sidebar.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Sidebar = () => {

    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className="sidebar__coverPhoto" src="https://media-exp3.licdn.com/dms/image/C4D16AQE1AJrtk4-MRQ/profile-displaybackgroundimage-shrink_350_1400/0/1623083809608?e=1630540800&v=beta&t=X4tBbzMdeQouKtJLgV1vfOxMZg_UhJCTtO8Cc853PPs" alt="Cover_Picture" />
                <Avatar className="sidebar__avatar" src={user.photoURL}>
                    {user.displayName && user.displayName.split(' ')[0][0] + user.displayName.split(' ')[1][0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
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
