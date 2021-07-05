import React, { useEffect, useState } from 'react';
import AddPost from './AddPost';
import '../styles/Feedbar.scss';
import Feed from './Feed';
import {db} from "../firebase";

const Feedbar = () => {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        db.collection('feeds').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setFeeds(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
    }, []);

    return (
        <div className="feedbar">
            <AddPost />

            <span className="feedbar__sortLine">
                <hr />
                <p>Sort by: <strong>Top</strong></p>
            </span>

            {
                feeds.map(feed => {
                    return (
                        <Feed key={feed.id} name={feed.data.name} description={feed.data.description} message={feed.data.message} photoUrl={feed.data.photoUrl} />
                    )
                })
            }
        </div>
    )
}

export default Feedbar
