import React, { useState } from 'react';
import '../styles/AddPost.scss';
import { Avatar } from '@material-ui/core';
import {db} from "../firebase";
import firebase from "firebase";

const AddPost = () => {
    const [postText, setPostText] = useState('');
    const [addingPost, setAddingPost] = useState(false);

    const setText = e => {
        let _postText = e.target.value;
        
        setPostText(_postText);

        if(_postText === '') {
            setAddingPost(false);
        }
        else {
            setAddingPost(true);
        }
    }
    
    const submitPost = e => {
        e.preventDefault();
        var text = e.target.postText.value;

        db.collection('feeds').add({
            name: 'Saad Patel',
            description: 'This is post',
            message: text,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(res => {
            setPostText('');
        });
    }

    return (
        <div className="addpost">
            <div className="addpost__top">
                <Avatar className="addpost__avatar" src="https://avatars.githubusercontent.com/u/62077144?s=400&u=d53b191db878c5f288358fbaffe0a6733ec06c1e&v=4"></Avatar>
                <form onSubmit={submitPost}>
                    <input name="postText" type="text" value={postText} onChange={e => setText(e)} placeholder="Start a post" />
                    {addingPost && <button type="submit" className={`addpost__addButton`}>Add</button>}
                </form>
            </div>

            <div className="addpost__bottom">
                <span className="addpost__addOption">
                    <svg className="addpost__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                    <p>Photo</p>
                </span>
                <span className="addpost__addOption">
                    <svg className="addpost__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                    </svg>
                    <p>Video</p>
                </span>
                <span className="addpost__addOption">
                    <svg className="addpost__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                    </svg>
                    <p>Event</p>
                </span>
                <span className="addpost__addOption">
                    <svg className="addpost__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                    </svg>
                    <p>Article</p>
                </span>
            </div>
        </div>
    )
}

export default AddPost
