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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

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
        history.push('/login');
      }
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <h1>Settings</h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
