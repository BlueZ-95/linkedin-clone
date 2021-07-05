import React, { useEffect, useState } from 'react';
import '../styles/Login.scss';
import {auth} from '../firebase';
import { useDispatch } from 'react-redux';
import { loginReducer } from '../features/userSlice';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [isRegisterEnabled, setIsRegisterEnabled] = useState(false);

    //User Details State
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicUrl, setProfilePicUrl] = useState('');

    useEffect(() => {
        if(auth)
            history.push('/');
    }, []);

    const toggleMode = e => {
        setIsRegisterEnabled(!isRegisterEnabled);
    }

    const submitForm = e => {
        e.preventDefault();

        if(isRegisterEnabled) {
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
                    history.push('/');
                });
            }).catch(err => {
                alert(err);
            })
        }
        else
        {
            if(!email || !password) {
                return alert('Please fill required values');
            }
    
            auth.signInWithEmailAndPassword(email, password).then(userAuth => {
                dispatch(loginReducer({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
                history.push('/');
            });
        }
    }

    return (
        <div className="login">
            {/* Logo */}
            <img src="/LinkedIn-Logo.svg" />

            {/* Form */}
            <form className="login__form" onSubmit={submitForm}>
                <input type="text" name="userName" className={`${isRegisterEnabled ? 'show' : 'hide'}`} value={userName} onChange={e => setUserName(e.target.value)} placeholder="Full Name (Required if Registering)" />
                <input type="text" name="profilePicUrl" className={`${isRegisterEnabled ? 'show' : 'hide'}`} value={profilePicUrl} onChange={e => setProfilePicUrl(e.target.value)} placeholder="Profile Pic Url (Optional)" />
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">{isRegisterEnabled ? 'Join' : 'Login'}</button>
            </form>

            {/* Join */}
            <p className="login__joinLink">{isRegisterEnabled ? 'Already a member?' : 'Not a member?'} <span onClick={toggleMode}>{isRegisterEnabled ? 'Login Now' : 'Join Now'}</span></p>
        </div>
    )
}

export default Login
