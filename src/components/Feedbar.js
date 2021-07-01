import React, { useEffect, useState } from 'react';
import AddPost from './AddPost';
import '../styles/Feedbar.scss';
import Feed from './Feed';
import {db} from "../firebase";

const Feedbar = () => {
    const [inputFeed, setInputFeed] = useState('');
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        db.collection('feeds').onSnapshot(snapshot => {
            setFeeds(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
    }, []);

    const sendFeed = e => {
        e.preventDefault();

        db.collection('feeds').add({
            name: 'Saad Patel',
            description: 'This is post',
            message: inputFeed,
            photoUrl: '',

        })
    }

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
            <Feed />
        </div>
    )
}

export default Feedbar
