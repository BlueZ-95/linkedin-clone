import React from 'react';
import '../styles/HeaderOption.scss';
import { Avatar } from '@material-ui/core';
const HeaderOption = ({avatar, Icon, title, name, headerOptionClickEvent}) => {
    return (
        <div className="headerOption" name={name} onClick={headerOptionClickEvent}>
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" src={avatar} />}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption