import React, { useState } from 'react';
import '../styles/Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logoutReducer, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { Link, useHistory } from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const history = useHistory();

    const [isProfileOptionsVisible, setIProfileOptionsVisible] = useState(false);

    const headerOptionClick = e => {
        let optionName = e.currentTarget.attributes['name'].value;
        
        switch (optionName) {
            case 'Home':
                history.push('/');
                break;
            case 'Profile':
                setIProfileOptionsVisible(!isProfileOptionsVisible);
                break;        
            default:
                break;
        }
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
                <HeaderOption headerOptionClickEvent={headerOptionClick} name="Home" Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={SmsIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption headerOptionClickEvent={headerOptionClick} name="Profile" avatar={user?.photoURL} title={user?.displayName} />

                <ul className={`header__profileOptions ${isProfileOptionsVisible && 'header__showProfileOptions'}`}>
                    <Link to="/settings"><li>Settings</li></Link>
                    <li onClick={logout}>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
