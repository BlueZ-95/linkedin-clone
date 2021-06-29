import React from 'react';
import '../styles/AddPost.scss';
import { Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';

const AddPost = () => {
    return (
        <div className="addpost">
            <div className="addpost__top">
                <Avatar className="addpost__avatar" src="https://avatars.githubusercontent.com/u/62077144?s=400&u=d53b191db878c5f288358fbaffe0a6733ec06c1e&v=4"></Avatar>
                <input type="text" placeholder="Start a post" />
            </div>

            <div className="addpost__bottom">
                <span className="addpost__addOption">
                    <PhotoIcon className="addpost__icon"></PhotoIcon>
                    <p>Photo</p>
                </span>
                <span className="addpost__addOption">
                    <YouTubeIcon className="addpost__icon"></YouTubeIcon>
                    <p>Video</p>
                </span>
                <span className="addpost__addOption">
                    <TodayIcon className="addpost__icon"></TodayIcon>
                    <p>Event</p>
                </span>
                <span className="addpost__addOption">
                    <AssignmentIcon className="addpost__icon"></AssignmentIcon>
                    <p>Article</p>
                </span>
            </div>
        </div>
    )
}

export default AddPost
