import React from 'react';
import AddPost from './AddPost';
import '../styles/Feedbar.scss';
import Feed from './Feed';

const Feedbar = () => {
    return (
        <div className="feedbar">
            {/* Add Post */}
            <AddPost />

            <span className="feedbar__sortLine">
                <hr />
                <p>Sort by: <strong>Top</strong></p>
            </span>

            {/* Feeds */}
            <Feed />
        </div>
    )
}

export default Feedbar
