import React from 'react';
import AddPost from './AddPost';
import '../styles/Feedbar.scss';

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
        </div>
    )
}

export default Feedbar
