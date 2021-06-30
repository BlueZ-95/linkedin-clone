import React from 'react';
import '../styles/WidgetbarItem.scss';

const WidgetbarItem = ({type, index, title, views}) => {
    return (
        <div className="widgetbarItem">
            <span className={`${type == 'news' ? 'widgetbarItem__circle' : 'widgetbarItem__index'}`}>{type === 'course' && index + '.'}</span>
            <div className="widgetbarItem__details">
                <h3>{title}</h3>
                <p>{views} Views</p>
            </div>
        </div>
    )
}

export default WidgetbarItem
