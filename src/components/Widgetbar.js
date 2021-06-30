import React from 'react';
import News from '../components/News';
import '../styles/Widgetbar.scss';

const Widgetbar = () => {
    return (
        <div className="widgetbar">
            <div className="widgetbar__top">
                <p>LinkedIn News</p>
                <p>info</p>
            </div>

            <div className="widgetbar__news">
                <News title="News 1" views="104853"></News>
                <News title="News 1" views="104853"></News>
                <News title="News 1" views="104853"></News>
            </div>
        </div>
    )
}

export default Widgetbar
