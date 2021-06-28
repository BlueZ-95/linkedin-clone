import React from 'react';
import '../styles/Header.scss';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linkedin_icon" />
                
                <div className="header__search">
                    <SearchIcon />
                    <input type="texr" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                
            </div>
        </div>
    )
}

export default Header
