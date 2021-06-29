import React from 'react';
import '../styles/Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="/linkedin-icon.svg" />
                
                <div className="header__search">
                    <SearchIcon />
                    <input type="texr" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={SmsIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://avatars.githubusercontent.com/u/62077144?s=400&u=d53b191db878c5f288358fbaffe0a6733ec06c1e&v=4" title="Me" />
            </div>
        </div>
    )
}

export default Header
