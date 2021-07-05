import React, { useState } from 'react';
import '../styles/Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logoutReducer } from '../features/userSlice';
import { auth } from '../firebase';
import { Link } from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();


    const [isProfileOptionsVisible, setIProfileOptionsVisible] = useState(false);

    const showProfileOptions = e => {
        setIProfileOptionsVisible(!isProfileOptionsVisible);
    }

    const goToSettings = () => {

    }

    const logout = () => {
        dispatch(logoutReducer());
        setIProfileOptionsVisible(false);
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="/linkedin-icon.svg" />
                
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={SmsIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption showProfileOptions={showProfileOptions} avatar={auth.currentUser.photoURL} title={auth.currentUser.displayName} />

                <ul className={`header__profileOptions ${isProfileOptionsVisible && 'header__showProfileOptions'}`}>
                    <Link to="/settings"><li onClick={goToSettings}>Settings</li></Link>
                    <li onClick={logout}>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
