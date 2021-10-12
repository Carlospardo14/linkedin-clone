import React, { useEffect }from 'react';
import { useDispatch } from 'react-redux';
import{useSelector} from "react-redux"
import './App.css';
import { login, logout, selectUser } from './features/counter/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        // user is logged in
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        }))
      } else {
        // use is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);



  return (
    <div className="app">

    {/* Header */}
    <Header></Header>
    
    {!user ? (<Login></Login>):
    (<div className="app_body">
    <Sidebar></Sidebar>
    <Feed></Feed>
    </div>
    )}
    {/* Widgets */}
    </div>
  );
}

export default App;
