import React, { useState } from 'react';
import '../styles/Login.scss';
import {auth} from '../firebase';
import { useDispatch } from 'react-redux';
import { loginReducer } from '../features/userSlice';

const Login = () => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicUrl, setProfilePicUrl] = useState('');

    const register = e => {
        e.preventDefault();

        if(!userName || !email || !password) {
            return alert('Please fill required values');
        }

        auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
            userAuth.user.updateProfile({
                displayName: userName,
                photoURL: profilePicUrl
            }).then(() => {
                dispatch(loginReducer({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userName,
                        photoUrl: profilePicUrl
                    })
                );
            });
        }).catch(err => {
            alert(err);
        })
    }

    const login = e => {
        // e.preventDefault();
    }

    return (
        <div className="login">
            {/* Logo */}
            <img src="/LinkedIn-Logo.svg" />

            {/* Form */}
            <form className="login__form">
                <input type="text" name="userName" value={userName} onChange={e => setUserName(e.target.value)} placeholder="Full Name" />
                <input type="text" name="profilePicUrl" value={profilePicUrl} onChange={e => setProfilePicUrl(e.target.value)} placeholder="Profile Pic Url (Optional)" />
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>

            {/* Join */}
            <p className="login__joinLink">Not a member? <span onClick={register}>Join Now</span></p>
        </div>
    )
}

export default Login
