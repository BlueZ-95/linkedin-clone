import React from 'react';
import '../styles/News.scss';

const News = ({title, views}) => {
    return (
        <div className="news">
            <span className="news__circle"></span>
            <div className="news__details">
                <h3>{title}</h3>
                <p>{views} Views</p>
            </div>
        </div>
    )
}

export default News
