import React from 'react';
import WidgetbarItem from './WidgetbarItem';
import '../styles/Widgetbar.scss';

const Widgetbar = () => {
    return (
        <div className="widgetbar">
            <div className="widgetbar__news">
                <div className="widgetbar__top">
                    <p>LinkedIn News</p>
                    <p>info</p>
                </div>
                <WidgetbarItem type="news" title="News 1" views="104853"></WidgetbarItem>
                <WidgetbarItem type="news" title="News 1" views="104853"></WidgetbarItem>
                <WidgetbarItem type="news" title="News 1" views="104853"></WidgetbarItem>
            </div>

            <div className="widgetbar__courses">
                <div className="widgetbar__top">
                    <p>Today's Top Courses</p>
                    <p>info</p>
                </div>
                <WidgetbarItem type="course" index="1" title="Course 1" views="104853"></WidgetbarItem>
                <WidgetbarItem type="course" index="2" title="Course 1" views="104853"></WidgetbarItem>
                <WidgetbarItem type="course" index="3" title="Course 1" views="104853"></WidgetbarItem>
            </div>
        </div>
    )
}

export default Widgetbar
