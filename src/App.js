import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Login from './components/Login.js';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feedbar from './components/Feedbar';
import Widgetbar from './components/Widgetbar';
import { loginReducer, logoutReducer, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(loginReducer({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logoutReducer());
        auth.signOut();
      }
    })
  }, [])

  return (
    <div className="app">

      {
        !user ? <Login /> : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feedbar />
              <Widgetbar />
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
